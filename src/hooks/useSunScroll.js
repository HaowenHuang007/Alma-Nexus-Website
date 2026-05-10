import { useEffect } from 'react'

/**
 * El sol se mueve hacia abajo y ligeramente a la izquierda con el scroll.
 * Al ~100% del hero queda oculto detrás del panel FV que crece desde abajo.
 */
export function useSunScroll(sunRef) {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let target = 0
    let current = 0
    let rafId = null

    const readScroll = () => {
      const vh = window.innerHeight
      target = Math.min(window.scrollY / (vh * 1.2), 1.2)
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

      const tx = -p * 220
      const ty =  p * 480           // baja más agresivo
      const rot = -p * 540
      const sc = Math.max(0.55, 1 - p * 0.45)
      const opacity = Math.max(0.18, 0.95 - p * 0.7)
      const glowSize = Math.max(20, 80 - p * 60)
      const glowAlpha = Math.max(0.08, 0.55 - p * 0.5)

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
