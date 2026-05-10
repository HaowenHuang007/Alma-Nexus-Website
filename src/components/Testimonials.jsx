import { useState } from 'react'
import SectionHead from './SectionHead'

const QUOTES = [
  {
    quote: 'Pasamos de 220 € de factura mensual a 45 € en seis meses. La instalación se amortiza sola y el equipo de Alma se encargó de absolutamente todo, incluida la subvención.',
    name: 'Marta Sánchez',
    role: 'Vivienda unifamiliar · Valencia',
    saving: '−79%',
    initial: 'M',
  },
  {
    quote: 'Nuestra nave consumía 18.000 € al año en electricidad. Con la solución de fotovoltaica + aerotermia hemos reducido el coste en un 64 % y monitorizamos todo en tiempo real.',
    name: 'Javier Ortiz',
    role: 'Director general · Logística Mediterráneo',
    saving: '−64%',
    initial: 'J',
  },
  {
    quote: 'El proceso fue transparente desde el primer día. La calculadora me dio una estimación realista, la propuesta llegó en 48h y la instalación se completó en una semana sin sorpresas.',
    name: 'Lucía Romero',
    role: 'Comunidad de vecinos · Madrid',
    saving: '−52%',
    initial: 'L',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const t = QUOTES[active]

  return (
    <section className="relative" style={{ paddingBlock: 'var(--section-y, 140px)' }}>
      <div className="container-x">
        <SectionHead
          num="08 — Voces"
          eyebrow="Testimonios"
          title={<>Quien lo vivió, <em>lo cuenta.</em></>}
          lead="Tres clientes, tres situaciones distintas, una misma sensación: control, ahorro y acompañamiento real."
        />

        <div
          className="reveal relative overflow-hidden rounded-[24px]"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(244,224,171,0.30) 100%)',
            border: '1px solid rgba(217,164,65,0.25)',
            boxShadow: '0 40px 80px -28px rgba(21,17,11,0.15)',
            backdropFilter: 'blur(14px)',
          }}
        >
          {/* Comilla decorativa gigante */}
          <div
            className="absolute pointer-events-none select-none"
            style={{
              top: '-30px',
              left: 'clamp(20px, 4vw, 60px)',
              fontFamily: 'Fraunces, serif',
              fontSize: 'clamp(12rem, 22vw, 22rem)',
              fontWeight: 400,
              lineHeight: 1,
              color: 'rgba(217,164,65,0.14)',
              fontVariationSettings: "'opsz' 144, 'SOFT' 100",
            }}
            aria-hidden="true"
          >
            "
          </div>

          <div
            className="relative grid items-stretch"
            style={{
              gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 0.6fr)',
              padding: 'clamp(36px, 5vw, 72px)',
              gap: 'clamp(28px, 4vw, 56px)',
              minHeight: '380px',
            }}
          >
            {/* Cita principal */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-7">
                  <span
                    className="font-serif font-medium text-gold-deep"
                    style={{ fontSize: 'clamp(2.6rem, 5vw, 4rem)', letterSpacing: '-0.03em', lineHeight: 1 }}
                  >
                    {t.saving}
                  </span>
                  <span className="text-[0.78rem] uppercase tracking-[0.14em] text-muted font-semibold max-w-[14ch]">
                    Reducción de factura mensual
                  </span>
                </div>

                <p
                  className="font-serif text-ink"
                  style={{
                    fontSize: 'clamp(1.3rem, 2.2vw, 1.85rem)',
                    lineHeight: 1.35,
                    letterSpacing: '-0.015em',
                    fontVariationSettings: "'opsz' 144, 'SOFT' 70",
                  }}
                >
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-8 mt-8" style={{ borderTop: '1px solid rgba(21,17,11,0.10)' }}>
                <span
                  className="w-12 h-12 rounded-full grid place-items-center font-serif text-ink"
                  style={{
                    background: 'linear-gradient(135deg, #F4D177 0%, #D9A441 100%)',
                    fontSize: '1.3rem',
                    fontVariationSettings: "'opsz' 36, 'SOFT' 50",
                    boxShadow: '0 8px 18px rgba(217,164,65,0.35)',
                  }}
                >
                  {t.initial}
                </span>
                <div>
                  <div className="font-semibold text-[1rem] text-ink leading-tight">{t.name}</div>
                  <div className="text-[0.85rem] text-muted leading-tight italic">{t.role}</div>
                </div>
              </div>
            </div>

            {/* Selector lateral */}
            <div className="flex flex-col gap-2 justify-center">
              {QUOTES.map((q, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className="text-left p-4 rounded-[14px] transition-all"
                  style={{
                    background: active === i ? 'rgba(255,255,255,0.95)' : 'transparent',
                    border: active === i ? '1px solid rgba(217,164,65,0.35)' : '1px solid transparent',
                    boxShadow: active === i ? '0 10px 24px -10px rgba(21,17,11,0.10)' : 'none',
                  }}
                >
                  <div className="flex items-center gap-2.5 mb-1">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background: active === i ? '#D9A441' : 'rgba(21,17,11,0.18)',
                        boxShadow: active === i ? '0 0 8px rgba(217,164,65,0.6)' : 'none',
                      }}
                    />
                    <span
                      className="font-serif italic"
                      style={{
                        fontSize: '1.1rem',
                        color: active === i ? '#A87614' : '#15110B',
                        fontVariationSettings: "'opsz' 36, 'SOFT' 100",
                      }}
                    >
                      {q.saving}
                    </span>
                  </div>
                  <div className="text-[0.78rem] text-muted ml-4">{q.role.split(' · ')[0]}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
