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
      <div className="container-x flex-1 flex items-center">
        <div className="max-w-[680px]">
          <h1 style={{ fontSize: 'clamp(3rem, 7.4vw, 6.5rem)', letterSpacing: '-0.04em', lineHeight: 1.02 }}>
            <span className="reveal-mask"><span>Energía que</span></span>
            <br />
            <span className="reveal-mask" data-delay="1">
              <span style={{ color: '#D9A441', fontStyle: 'italic' }}>transforma</span>
            </span>
          </h1>
          <p className="lead reveal mt-7 mb-9" data-delay="1" style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.22rem)' }}>
            Soluciones integrales en energía renovable, climatización y eficiencia energética.
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

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
