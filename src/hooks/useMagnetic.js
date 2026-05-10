import { useEffect } from 'react'

/**
 * Botones magnéticos: el botón se desplaza ligeramente hacia el cursor.
 */
export function useMagnetic(selector = '.magnetic') {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(pointer: fine)').matches) return

    const els = document.querySelectorAll(selector)
    const handlers = []

    els.forEach((el) => {
      el.style.transition = 'transform 0.25s cubic-bezier(0.2,0.7,0.3,1)'

      const onMove = (e) => {
        const r = el.getBoundingClientRect()
        const cx = r.left + r.width / 2
        const cy = r.top + r.height / 2
        const dx = (e.clientX - cx) * 0.20
        const dy = (e.clientY - cy) * 0.20
        el.style.transform = `translate(${dx}px, ${dy}px)`
      }
      const onLeave = () => { el.style.transform = 'translate(0, 0)' }

      el.addEventListener('mousemove', onMove)
      el.addEventListener('mouseleave', onLeave)
      handlers.push({ el, onMove, onLeave })
    })

    return () => {
      handlers.forEach(({ el, onMove, onLeave }) => {
        el.removeEventListener('mousemove', onMove)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [selector])
}
