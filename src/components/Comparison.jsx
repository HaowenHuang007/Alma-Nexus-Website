const ROWS = [
  { feature: 'Diseño técnico personalizado',          alma: true,  trad: 'A veces' },
  { feature: 'Único responsable del proyecto',        alma: true,  trad: false },
  { feature: 'Tramitación de subvenciones incluida',  alma: true,  trad: false },
  { feature: 'Monitorización 24/7 incluida',          alma: true,  trad: false },
  { feature: 'Mantenimiento preventivo',              alma: true,  trad: 'Coste extra' },
  { feature: 'SAT especializado por áreas',           alma: true,  trad: false },
  { feature: 'Calculadora con propuesta inmediata',   alma: true,  trad: false },
  { feature: 'Subcontrataciones invisibles',          alma: false, trad: true },
  { feature: 'Letra pequeña en el contrato',          alma: false, trad: true },
]

export default function Comparison() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        paddingBlock: 'var(--section-y, 140px)',
        background: 'linear-gradient(135deg, #0A1014 0%, #131A1F 100%)',
        color: '#FCFCFA',
      }}
    >
      {/* Decoración: orbes dorado + azul sutiles */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '5%', left: '-5%', width: '420px', height: '420px',
          background: 'radial-gradient(circle, rgba(217,164,65,0.18), transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '5%', right: '-5%', width: '480px', height: '480px',
          background: 'radial-gradient(circle, rgba(14,168,255,0.10), transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="container-x relative">
        <div className="relative mb-12">
          {/* Big number */}
          <div
            className="absolute pointer-events-none select-none"
            style={{
              top: '-30px', right: '0',
              fontFamily: 'Fraunces, serif',
              fontSize: 'clamp(8rem, 18vw, 16rem)',
              fontStyle: 'italic',
              fontWeight: 300,
              letterSpacing: '-0.06em',
              lineHeight: 0.85,
              color: 'rgba(217,164,65,0.08)',
              fontVariationSettings: "'opsz' 144, 'SOFT' 100",
              zIndex: 0,
            }}
            aria-hidden="true"
          >
            07
          </div>

          <div className="relative" style={{ zIndex: 1 }}>
            <div
              className="reveal flex items-center gap-3 mb-7"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.18em', color: '#F4D177' }}
            >
              <span style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: '1.05rem' }}>§</span>
              <span>07 — VS</span>
              <span className="flex-1 h-px max-w-[60px]" style={{ background: 'linear-gradient(90deg, rgba(244,209,119,0.5), transparent)' }} />
            </div>

            <div className="grid items-end" style={{ gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)', gap: 'clamp(28px, 5vw, 80px)' }}>
              <div>
                <span className="eyebrow reveal" style={{ color: '#F4D177' }}>Comparación honesta</span>
                <h2
                  className="reveal mt-5"
                  data-delay="1"
                  style={{ fontSize: 'clamp(2.3rem, 5.2vw, 4.4rem)', letterSpacing: '-0.04em', lineHeight: 0.98, maxWidth: '14ch', color: '#FCFCFA' }}
                >
                  Alma Nexus <em style={{ color: '#F4D177' }}>vs.</em> instalador tradicional.
                </h2>
              </div>
              <p
                className="reveal justify-self-end"
                data-delay="2"
                style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.22rem)', lineHeight: 1.55, color: 'rgba(252,252,250,0.72)', maxWidth: '56ch' }}
              >
                Hay una diferencia entre vender placas y entregar un sistema energético completo.
                Esta es la nuestra.
              </p>
            </div>
          </div>
        </div>

        <div
          className="reveal overflow-hidden rounded-[20px]"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.10)',
            backdropFilter: 'blur(14px)',
          }}
        >
          <div
            className="grid items-center"
            style={{
              gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr) minmax(0, 1fr)',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div className="px-6 md:px-9 py-6 text-[0.78rem] uppercase tracking-[0.16em] font-semibold" style={{ color: 'rgba(252,252,250,0.55)' }}>
              Característica
            </div>
            <div
              className="px-6 md:px-9 py-6 text-center"
              style={{ background: 'linear-gradient(180deg, rgba(217,164,65,0.18), rgba(217,164,65,0.06))' }}
            >
              <div className="font-serif font-medium text-[1.15rem]" style={{ letterSpacing: '0.05em', color: '#FCFCFA' }}>
                ALMA <span style={{ color: '#F4D177', fontStyle: 'italic' }}>NEXUS</span>
              </div>
            </div>
            <div className="px-6 md:px-9 py-6 text-center">
              <div className="font-serif italic text-[1.05rem]" style={{ color: 'rgba(252,252,250,0.55)' }}>
                Instalador tradicional
              </div>
            </div>
          </div>

          {ROWS.map((row, i) => (
            <div
              key={i}
              className="grid items-center transition-colors"
              style={{
                gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr) minmax(0, 1fr)',
                borderBottom: i < ROWS.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}
            >
              <div className="px-6 md:px-9 py-5 text-[0.95rem]" style={{ color: '#FCFCFA' }}>{row.feature}</div>
              <div
                className="px-6 md:px-9 py-5 text-center"
                style={{ background: 'rgba(217,164,65,0.06)' }}
              >
                <Cell value={row.alma} good />
              </div>
              <div className="px-6 md:px-9 py-5 text-center">
                <Cell value={row.trad} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Cell({ value, good }) {
  if (typeof value === 'string') {
    return <span className="text-[0.85rem] italic" style={{ color: 'rgba(252,252,250,0.5)' }}>{value}</span>
  }
  if (value === true) {
    return (
      <span
        className="inline-grid place-items-center w-7 h-7 rounded-full"
        style={{
          background: good ? 'linear-gradient(135deg, #D9A441, #F4D177)' : 'rgba(255,255,255,0.10)',
          boxShadow: good ? '0 4px 14px rgba(217,164,65,0.5)' : 'none',
        }}
      >
        <svg viewBox="0 0 14 14" width="12" height="12" fill="none" stroke={good ? '#15110B' : 'rgba(252,252,250,0.55)'} strokeWidth="2.4">
          <path d="M3 7l3 3 5-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    )
  }
  return (
    <span
      className="inline-grid place-items-center w-7 h-7 rounded-full"
      style={{ background: 'rgba(255,255,255,0.06)' }}
    >
      <svg viewBox="0 0 14 14" width="11" height="11" fill="none" stroke="rgba(252,252,250,0.45)" strokeWidth="2">
        <path d="M3 3l8 8M11 3l-8 8" strokeLinecap="round" />
      </svg>
    </span>
  )
}
