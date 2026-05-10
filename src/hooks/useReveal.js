import { useEffect } from 'react'

/**
 * Activa la clase .visible sobre todos los .reveal cuando entran en viewport.
 * Es global: se monta una vez en el árbol y observa todo el documento.
 */
export function useReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    // Observar elementos actuales y futuros mediante MutationObserver
    const observeAll = () => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => io.observe(el))
    }
    observeAll()

    const mo = new MutationObserver(observeAll)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}
