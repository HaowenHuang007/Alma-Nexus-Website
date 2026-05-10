import { useEffect, useState } from 'react'

/**
 * CTA flotante que aparece después de scrollear el hero.
 * Se oculta al llegar al footer para no superponerse.
 */
export default function StickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight
      const y = window.scrollY
      const max = document.body.scrollHeight - vh
      // Visible entre 1.2vh y 95% del scroll
      setVisible(y > vh * 1.2 && y < max * 0.94)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event('open-calculator'))}
      className="fixed bottom-7 right-7 inline-flex items-center gap-2.5 btn btn-gold"
      style={{
        zIndex: 45,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.92)',
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.35s ease, transform 0.35s cubic-bezier(0.2,0.7,0.3,1)',
        boxShadow: '0 18px 42px rgba(217,164,65,0.5), inset 0 1px 0 rgba(255,255,255,0.55)',
      }}
    >
      Calcular mi ahorro
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5" aria-hidden="true">
        <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
