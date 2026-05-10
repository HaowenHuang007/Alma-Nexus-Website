import { useEffect } from 'react'

/**
 * Aplica un efecto de tilt 3D a todos los elementos con la clase indicada.
 * El elemento rota ligeramente siguiendo al cursor.
 */
export function useTilt(selector = '.tilt') {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(pointer: fine)').matches) return

    const els = document.querySelectorAll(selector)
    const handlers = []

    els.forEach((el) => {
      el.style.transformStyle = 'preserve-3d'
      el.style.transition = 'transform 0.2s cubic-bezier(0.2,0.7,0.3,1)'

      const onMove = (e) => {
        const r = el.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width - 0.5
        const y = (e.clientY - r.top) / r.height - 0.5
        const rx = -y * 8
        const ry = x * 10
        el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`
      }
      const onLeave = () => {
        el.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateY(0)'
      }

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
