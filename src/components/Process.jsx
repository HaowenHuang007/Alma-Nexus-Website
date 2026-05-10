import { useEffect, useRef, useState } from 'react'
import SectionHead from './SectionHead'

const ICONS = {
  estudio: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="6" /><path d="M16.5 16.5L23 23" />
    </svg>
  ),
  propuesta: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="4" width="18" height="22" rx="2" />
      <path d="M9 10h10M9 14h10M9 18h6" />
    </svg>
  ),
  instalacion: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l-2 4 4 2-2 4 4 2-2 4 4 2-2 4" />
      <path d="M5 26h18" />
    </svg>
  ),
  seguimiento: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 4a10 10 0 1 0 10 10" />
      <path d="M14 8v6l4 2" />
      <path d="M19 4l5 1-1 5" />
    </svg>
  ),
}

const PHASES = [
  { id: 'estudio',     num: 'i — Estudio',       title: 'Revisamos tu caso',       desc: 'Consumo, necesidades, vivienda o negocio y posibilidades reales sobre el terreno.' },
  { id: 'propuesta',   num: 'ii — Propuesta',    title: 'Te enviamos la solución', desc: 'Inversión, ahorro, retorno y equipos. Clara, sin letra pequeña, con alternativas cuando aplica.' },
  { id: 'instalacion', num: 'iii — Instalación', title: 'Coordinamos la ejecución', desc: 'Puesta en marcha, documentación técnica y trámites administrativos por un único responsable.' },
  { id: 'seguimiento', num: 'iv — Seguimiento',  title: 'Acompañamos después',     desc: 'Control de rendimiento, soporte 24/7 y mantenimiento del sistema mientras dure su vida útil.' },
]

export default function Process() {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return
      const r = ref.current.getBoundingClientRect()
      const vh = window.innerHeight
      // 0 cuando entra por abajo, 1 cuando sale por arriba (centrado)
      const p = (vh * 0.85 - r.top) / (r.height + vh * 0.5)
      setProgress(Math.max(0, Math.min(1, p)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="proceso" className="relative" style={{ paddingBlock: 'var(--section-y, 140px)' }}>
      <div className="container-x">
        <SectionHead
          num="05 — Acompañamiento"
          eyebrow="Proceso"
          title={<>De la idea al <em>ahorro real.</em></>}
          lead="El lenguaje y el ritmo deben transmitir acompañamiento. No se trata al usuario como un lead dentro de un embudo, sino como cliente desde el primer día."
        />

        <div ref={ref} className="relative grid grid-cols-1 md:grid-cols-4 gap-7 md:gap-3.5">
          {/* Línea horizontal animada (desktop) */}
          <div
            className="hidden md:block absolute pointer-events-none"
            style={{
              top: '32px',
              left: '8%',
              right: '8%',
              height: '2px',
              background: 'rgba(217,164,65,0.18)',
            }}
          >
            <div
              className="h-full"
              style={{
                width: `${progress * 100}%`,
                background: 'linear-gradient(90deg, #D9A441, #F4D177)',
                boxShadow: '0 0 12px rgba(217,164,65,0.6)',
                transition: 'width 0.3s ease',
              }}
            />
          </div>

          {PHASES.map((ph, i) => {
            const reached = progress > i / PHASES.length
            return (
              <article
                key={ph.title}
                className="reveal relative pt-16 px-1"
                data-delay={i + 1}
              >
                {/* Punto en la línea */}
                <span
                  className="hidden md:block absolute pointer-events-none rounded-full transition-all duration-500"
                  style={{
                    top: '24px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: reached ? '18px' : '12px',
                    height: reached ? '18px' : '12px',
                    background: reached ? '#D9A441' : '#FBF7EE',
                    border: '2px solid #D9A441',
                    boxShadow: reached ? '0 0 16px rgba(217,164,65,0.7)' : 'none',
                    zIndex: 1,
                  }}
                />
                <div className="flex justify-center mb-4">
                  <div
                    className="w-11 h-11 rounded-[10px] grid place-items-center text-gold-deep"
                    style={{
                      background: reached ? 'linear-gradient(135deg, #D9A441, #F4D177)' : 'linear-gradient(135deg, rgba(217,164,65,0.16), rgba(217,164,65,0.04))',
                      border: '1px solid rgba(217,164,65,0.4)',
                      color: reached ? '#15110B' : '#A87614',
                      transition: 'all 0.5s ease',
                    }}
                  >
                    {ICONS[ph.id]}
                  </div>
                </div>
                <div
                  className="font-serif italic text-gold-deep mb-2 text-center"
                  style={{ fontSize: '0.9rem', fontVariationSettings: "'opsz' 36, 'SOFT' 100" }}
                >
                  {ph.num}
                </div>
                <h3 className="text-[1.1rem] mb-2 text-center" style={{ letterSpacing: '-0.02em' }}>
                  {ph.title}
                </h3>
                <p className="text-[0.88rem] text-center max-w-[28ch] mx-auto">{ph.desc}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
