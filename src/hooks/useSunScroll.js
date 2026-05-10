import { useEffect } from 'react'

/**
 * Trayectoria diagonal: el sol nace arriba-izquierda y se desplaza
 * progresivamente hacia abajo-derecha conforme se hace scroll,
 * desvaneciéndose de brillante a tenue (efecto atardecer).
 */
export function useSunScroll(sunRef) {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let target = 0
    let current = 0
    let rafId = null

    const readScroll = () => {
      const max = Math.max(1, document.body.scrollHeight - window.innerHeight)
      target = Math.min(window.scrollY / max, 1)
      if (!rafId) loop()
    }

    const loop = () => {
      current += (target - current) * 0.08
      const p = current
      const sun = sunRef.current
      if (!sun) {
        rafId = null
        return
      }

      // Diagonal: arriba-derecha → abajo-izquierda
      const vw = window.innerWidth
      const vh = window.innerHeight
      const tx = -p * (vw * 0.75)       // se desplaza a la izquierda
      const ty =  p * (vh * 0.85)       // baja casi una pantalla
      const rot = -p * 360
      const sc = 1 - p * 0.35
      const opacity = Math.max(0.30, 1 - p * 0.75)        // sigue brillante
      const glowSize  = Math.max(40, 110 - p * 70)
      const glowAlpha = Math.max(0.30, 0.90 - p * 0.55)
      const haloSize  = Math.max(80, 180 - p * 100)
      const haloAlpha = Math.max(0.20, 0.65 - p * 0.40)

      sun.style.transform = `translate(${tx}px, ${ty}px) rotate(${rot}deg) scale(${sc})`
      sun.style.opacity = opacity
      sun.style.filter = `drop-shadow(0 0 ${glowSize}px rgba(255, 220, 140, ${glowAlpha})) drop-shadow(0 0 ${haloSize}px rgba(217, 164, 65, ${haloAlpha}))`

      if (Math.abs(target - current) > 0.001) {
        rafId = requestAnimationFrame(loop)
      } else {
        rafId = null
      }
    }

    window.addEventListener('scroll', readScroll, { passive: true })
    readScroll()

    return () => {
      window.removeEventListener('scroll', readScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [sunRef])
}
