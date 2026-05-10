/**
 * Bot / Calculadora — el núcleo de la web (spec §3.3).
 * Sin compromiso, resultado inmediato, adaptado al tipo de cliente.
 */
export default function Bot() {
  return (
    <section
      id="calculadora"
      className="relative"
      style={{ paddingBlock: 'clamp(60px, 8vw, 100px)' }}
    >
      <div className="container-x">
        <div
          className="reveal grid items-stretch rounded-[28px] shadow-lg-soft"
          style={{
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 0.95fr)',
            gap: 'clamp(28px, 4vw, 60px)',
            padding: 'clamp(28px, 4vw, 56px)',
            background:
              'linear-gradient(135deg, rgba(255, 255, 255, 0.88) 0%, rgba(244, 224, 171, 0.32) 100%)',
            border: '1px solid rgba(21, 17, 11, 0.10)',
            backdropFilter: 'blur(14px)',
          }}
        >
          <div>
            <span className="eyebrow">Calculadora inteligente</span>
            <h2 className="mt-5 mb-5">
              Precio, ahorro y solución técnica <em>en minutos.</em>
            </h2>
            <p className="lead mb-8">
              Dinos tu tipo de instalación, consumo aproximado y necesidades. En minutos
              tienes precio orientativo, ahorro mensual estimado y retorno de la inversión.
              Sin formularios largos, sin esperar días.
            </p>
            <ul className="grid gap-3 mb-8 list-none p-0">
              {[
                'Sin compromiso ni datos sensibles',
                'Resultado inmediato adaptado a tu caso',
                'Vivienda, empresa o comunidad',
                'Estimación de inversión, ahorro y retorno',
              ].map((b) => (
                <li key={b} className="flex items-center gap-3 text-[0.96rem] text-ink-soft">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"
                    style={{ boxShadow: '0 0 8px rgba(217, 164, 65, 0.55)' }}
                  />
                  {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="btn btn-gold"
                onClick={() => window.dispatchEvent(new Event('open-calculator'))}
              >
                Abrir calculadora
                <Arrow />
              </button>
              <a className="btn" href="#como">
                Ver cómo funciona
              </a>
            </div>
          </div>

          <BotPreview />
        </div>
      </div>
    </section>
  )
}

import { useEffect, useState } from 'react'

const SCRIPT = [
  { who: 'bot',  text: 'Hola, soy el asistente de Alma. ¿Quieres calcular para una vivienda, una empresa o una comunidad?' },
  { who: 'user', text: 'Una vivienda unifamiliar.' },
  { who: 'bot',  text: 'Perfecto. Te puedo estimar fotovoltaica, aerotermia y ahorro real. ¿Cuál es tu factura mensual aproximada?' },
  { who: 'user', text: 'Unos 180 €/mes.' },
  { who: 'bot',  text: 'Con eso preparo una primera propuesta con inversión, retorno y ahorro estimado.' },
]

function BotPreview() {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    let timeouts = []
    let cycleTimeout
    const cycle = () => {
      setVisible(0)
      SCRIPT.forEach((_, i) => {
        timeouts.push(setTimeout(() => setVisible(i + 1), 800 + i * 1100))
      })
      cycleTimeout = setTimeout(cycle, 800 + SCRIPT.length * 1100 + 4000)
    }
    cycle()
    return () => {
      timeouts.forEach(clearTimeout)
      clearTimeout(cycleTimeout)
    }
  }, [])

  return (
    <div
      className="relative flex flex-col gap-3 p-6 rounded-[22px] bg-white shadow-md-soft"
      style={{
        minHeight: '380px',
        border: '1px solid rgba(21, 17, 11, 0.10)',
      }}
      aria-label="Vista previa del asistente"
    >
      <div className="flex items-center gap-2.5 pb-4 mb-2 border-b border-line">
        <span
          className="w-2 h-2 rounded-full bg-gold animate-breathe"
          style={{ boxShadow: '0 0 8px rgba(217, 164, 65, 0.55)' }}
        />
        <span className="text-[0.86rem] font-semibold text-ink-soft">
          Asistente Alma · en línea
        </span>
      </div>

      {SCRIPT.map((m, i) => (
        i < visible && <Bubble key={`${visible}-${i}`} who={m.who}>{m.text}</Bubble>
      ))}

      {visible < SCRIPT.length && visible > 0 && (
        <div
          className="bot-bubble flex items-center gap-1.5 px-4 py-3 rounded-2xl"
          style={{
            background: SCRIPT[visible].who === 'bot' ? 'rgba(244, 224, 171, 0.42)' : '#15110B',
            border: SCRIPT[visible].who === 'bot' ? '1px solid rgba(217, 164, 65, 0.18)' : 'none',
            alignSelf: SCRIPT[visible].who === 'bot' ? 'flex-start' : 'flex-end',
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: SCRIPT[visible].who === 'bot' ? '#A87614' : '#FCFCFA',
                opacity: 0.6,
                animation: `dotBounce 1.2s ease-in-out ${i * 0.15}s infinite`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function Bubble({ who, children }) {
  const isBot = who === 'bot'
  return (
    <div
      className="bot-bubble px-4 py-3 rounded-2xl text-[0.94rem] leading-snug"
      style={{
        maxWidth: '88%',
        background: isBot ? 'rgba(244, 224, 171, 0.42)' : '#15110B',
        color: isBot ? '#15110B' : '#FCFCFA',
        border: isBot ? '1px solid rgba(217, 164, 65, 0.18)' : 'none',
        alignSelf: isBot ? 'flex-start' : 'flex-end',
      }}
    >
      {children}
    </div>
  )
}

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-3.5 h-3.5"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
