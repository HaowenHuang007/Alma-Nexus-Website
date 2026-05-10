import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'top', label: 'Inicio' },
  { id: 'para-quien', label: 'Identificación' },
  { id: 'calculadora', label: 'Calculadora' },
  { id: 'beneficio', label: 'Beneficio' },
  { id: 'como', label: 'Proceso' },
  { id: 'soluciones', label: 'Soluciones' },
  { id: 'diferenciacion', label: 'Diferenciación' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'partners', label: 'Partners' },
]

export default function SectionDots() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    let raf = null
    const update = () => {
      const mid = window.innerHeight / 2
      let bestIdx = 0
      let bestDist = Infinity
      SECTIONS.forEach((s, i) => {
        const el = document.getElementById(s.id)
        if (!el) return
        const dist = Math.abs(el.getBoundingClientRect().top - mid)
        if (dist < bestDist) { bestDist = dist; bestIdx = i }
      })
      setActive(bestIdx)
      raf = null
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <nav
      className="hidden lg:flex fixed right-7 top-1/2 -translate-y-1/2 flex-col gap-3.5"
      style={{ zIndex: 40 }}
      aria-label="Navegación de secciones"
    >
      {SECTIONS.map((s, i) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          aria-label={s.label}
          className="group relative flex items-center justify-end"
        >
          <span
            className="absolute right-6 whitespace-nowrap text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink-soft opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ background: 'rgba(251,247,238,0.85)', padding: '4px 10px', borderRadius: '999px', backdropFilter: 'blur(8px)' }}
          >
            {s.label}
          </span>
          <span
            className="block rounded-full transition-all"
            style={{
              width: i === active ? '10px' : '6px',
              height: i === active ? '10px' : '6px',
              background: i === active ? '#D9A441' : 'rgba(21,17,11,0.20)',
              boxShadow: i === active ? '0 0 12px rgba(217,164,65,0.6)' : 'none',
            }}
          />
        </a>
      ))}
    </nav>
  )
}
