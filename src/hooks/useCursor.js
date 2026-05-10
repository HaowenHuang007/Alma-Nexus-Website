import { useEffect } from 'react'

/**
 * Cursor dot que sigue al ratón con suavizado.
 * Solo en pantallas con puntero fino (no táctil).
 */
export function useCursor() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot = document.createElement('div')
    dot.setAttribute('aria-hidden', 'true')
    Object.assign(dot.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: '#D9A441',
      boxShadow: '0 0 16px rgba(217, 164, 65, 0.55)',
      pointerEvents: 'none',
      zIndex: '9999',
      transform: 'translate3d(-50px, -50px, 0)',
      transition: 'width 0.25s ease, height 0.25s ease, opacity 0.3s ease',
      mixBlendMode: 'multiply',
    })
    document.body.appendChild(dot)

    let tx = -50, ty = -50, x = -50, y = -50
    let raf = null

    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
      if (!raf) raf = requestAnimationFrame(loop)
    }
    const loop = () => {
      x += (tx - x) * 0.18
      y += (ty - y) * 0.18
      dot.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`
      if (Math.abs(tx - x) > 0.5 || Math.abs(ty - y) > 0.5) {
        raf = requestAnimationFrame(loop)
      } else {
        raf = null
      }
    }
    const enterLink = () => {
      dot.style.width = '24px'
      dot.style.height = '24px'
      dot.style.opacity = '0.6'
    }
    const leaveLink = () => {
      dot.style.width = '8px'
      dot.style.height = '8px'
      dot.style.opacity = '1'
    }

    window.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', enterLink)
      el.addEventListener('mouseleave', leaveLink)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf) cancelAnimationFrame(raf)
      dot.remove()
    }
  }, [])
}
