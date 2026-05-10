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
      const opacity = Math.max(0.18, 0.95 - p * 0.85)   // brillante → tenue
      const glowSize = Math.max(20, 80 - p * 65)
      const glowAlpha = Math.max(0.10, 0.55 - p * 0.50)

      sun.style.transform = `translate(${tx}px, ${ty}px) rotate(${rot}deg) scale(${sc})`
      sun.style.opacity = opacity
      sun.style.filter = `drop-shadow(0 0 ${glowSize}px rgba(217, 164, 65, ${glowAlpha}))`

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
