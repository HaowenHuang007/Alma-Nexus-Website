import { useEffect, useState } from 'react'

const FEATURES = [
  { title: 'Energía limpia', desc: '100 % renovable y sostenible' },
  { title: 'Máxima eficiencia', desc: 'Tecnología avanzada y ahorro real' },
  { title: 'Instalación profesional', desc: 'Equipos certificados y garantía total' },
  { title: 'Asistencia 24/7', desc: 'Soporte técnico siempre disponible' },
]

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex flex-col justify-center"
      style={{
        paddingTop: 'calc(var(--section-y, 140px) + 60px)',
        paddingBottom: '40px',
        minHeight: '100vh',
      }}
    >
      <div className="container-x flex-1 grid items-center" style={{ gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 0.85fr)', gap: 'clamp(40px, 6vw, 80px)' }}>
        <div className="max-w-[680px]">
          <h1 style={{ fontSize: 'clamp(3.4rem, 8.6vw, 8rem)', letterSpacing: '-0.05em', lineHeight: 0.94, fontWeight: 400 }}>
            <span className="reveal-mask"><span>Energía que</span></span>
            <br />
            <span className="reveal-mask" data-delay="1">
              <span
                style={{
                  fontStyle: 'italic',
                  background: 'linear-gradient(135deg, #C99634 0%, #D9A441 30%, #F4D177 60%, #A87614 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                transforma
              </span>
            </span>
          </h1>
          <p className="lead reveal mt-7 mb-9" data-delay="1" style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.22rem)' }}>
            Soluciones <RotatingWord /> en energía renovable, climatización y eficiencia.
          </p>
          <div className="flex flex-wrap gap-3.5 reveal" data-delay="2">
            <button
              type="button"
              className="btn btn-gold"
              onClick={() => window.dispatchEvent(new Event('open-calculator'))}
            >
              Quiero mi proyecto
              <Arrow />
            </button>
          </div>
        </div>

        {/* Tarjeta lateral derecha — visual decorativo (oculta en móvil) */}
        <div className="hidden lg:block reveal" data-delay="3">
          <HeroSideCard />
        </div>
      </div>

      <div className="scroll-cue hidden md:flex" aria-hidden="true">Scroll</div>

      {/* Strip de features inferior */}
      <div className="container-x mt-14 reveal" data-delay="3">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 p-5 rounded-[18px]"
          style={{
            background: 'rgba(255,255,255,0.85)',
            border: '1px solid rgba(21,17,11,0.10)',
            backdropFilter: 'blur(14px)',
            boxShadow: '0 18px 40px rgba(21,17,11,0.06)',
          }}
        >
          {FEATURES.map((f) => (
            <div key={f.title} className="flex items-center gap-3 px-2">
              <span
                className="w-2 h-2 rounded-full bg-gold flex-shrink-0"
                style={{ boxShadow: '0 0 10px rgba(217,164,65,0.6)' }}
              />
              <div>
                <div className="font-semibold text-[0.92rem] text-ink leading-tight">{f.title}</div>
                <div className="text-[0.78rem] text-muted leading-tight">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HeroSideCard() {
  const [tick, setTick] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1000)
    return () => clearInterval(id)
  }, [])
  // Live stats que tickan
  const kwh = (tick * 14.6).toFixed(1)
  const eur = (tick * 2.34).toFixed(2)

  return (
    <div
      className="relative ml-auto"
      style={{ maxWidth: '380px' }}
    >
      {/* Card principal */}
      <div
        className="relative p-6 rounded-[22px] overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(244,224,171,0.45))',
          border: '1px solid rgba(217,164,65,0.32)',
          boxShadow: '0 30px 70px rgba(21,17,11,0.12), 0 8px 22px rgba(217,164,65,0.18)',
          backdropFilter: 'blur(14px)',
        }}
      >
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold animate-breathe" style={{ boxShadow: '0 0 8px rgba(217,164,65,0.6)' }} />
            <span className="text-[0.74rem] uppercase tracking-[0.14em] font-bold text-gold-deep">En directo</span>
          </div>
          <span className="text-[0.72rem] text-muted">flota Alma</span>
        </div>

        <div className="mb-5 pb-5" style={{ borderBottom: '1px solid rgba(21,17,11,0.10)' }}>
          <div className="text-[0.78rem] text-muted mb-1.5">Producción ahora</div>
          <strong
            className="block font-serif font-medium text-ink"
            style={{ fontSize: '2.4rem', letterSpacing: '-0.04em', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}
          >
            {Number(kwh).toLocaleString('es', { minimumFractionDigits: 1 })}
            <em className="italic text-gold-deep" style={{ fontSize: '0.5em', marginLeft: '5px' }}>kWh</em>
          </strong>
        </div>

        <div className="mb-5">
          <div className="text-[0.78rem] text-muted mb-1.5">Ahorro acumulado</div>
          <strong
            className="block font-serif font-medium text-gold-deep"
            style={{ fontSize: '1.6rem', letterSpacing: '-0.03em', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}
          >
            {Number(eur).toLocaleString('es', { minimumFractionDigits: 2 })}
            <em className="italic" style={{ fontSize: '0.6em', marginLeft: '4px' }}>€</em>
          </strong>
        </div>

        {/* Mini gráfica de barras */}
        <div className="flex items-end gap-1.5 h-12">
          {[35, 52, 68, 45, 78, 95, 82, 67, 88, 72, 58, 90].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm"
              style={{
                height: `${h}%`,
                background: 'linear-gradient(180deg, #D9A441, rgba(217,164,65,0.3))',
                animation: `barGrow 0.8s ease-out ${i * 0.05}s backwards`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Mini-card flotante — ahorro mensual */}
      <div
        className="absolute -bottom-5 -left-7 px-5 py-3.5 rounded-[14px]"
        style={{
          background: '#15110B',
          color: '#FCFCFA',
          border: '1px solid rgba(217,164,65,0.4)',
          boxShadow: '0 18px 36px rgba(21,17,11,0.32)',
        }}
      >
        <div className="text-[0.66rem] uppercase tracking-[0.14em] font-bold" style={{ color: '#F4D177' }}>Ahorro/mes</div>
        <div
          className="font-serif font-medium"
          style={{ fontSize: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1, color: '#F4D177', marginTop: '2px' }}
        >
          −180 €
        </div>
      </div>
    </div>
  )
}

function RotatingWord() {
  const words = ['sostenibles', 'eficientes', 'inteligentes', 'rentables']
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % words.length), 2400)
    return () => clearInterval(id)
  }, [])
  return (
    <span
      className="inline-block relative"
      style={{ minWidth: '8.5ch', verticalAlign: 'baseline', overflow: 'hidden', height: '1.2em', textAlign: 'left' }}
    >
      <span
        key={i}
        className="inline-block font-serif italic text-gold-deep"
        style={{
          fontVariationSettings: "'opsz' 36, 'SOFT' 100",
          animation: 'wordSlide 2.4s cubic-bezier(0.2,0.7,0.3,1)',
        }}
      >
        {words[i]}
      </span>
    </span>
  )
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
