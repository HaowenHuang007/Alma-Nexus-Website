import SectionHead from './SectionHead'

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
    <section className="relative" style={{ paddingBlock: 'var(--section-y, 140px)' }}>
      <div className="container-x">
        <SectionHead
          num="07 — VS"
          eyebrow="Comparación honesta"
          title={<>Alma Nexus <em>vs.</em> instalador tradicional.</>}
          lead="Hay una diferencia entre vender placas y entregar un sistema energético completo. Esta es la nuestra."
        />

        <div
          className="reveal overflow-hidden rounded-[20px]"
          style={{
            background: 'rgba(255,255,255,0.85)',
            border: '1px solid rgba(21,17,11,0.10)',
            backdropFilter: 'blur(14px)',
            boxShadow: '0 28px 60px rgba(21,17,11,0.08)',
          }}
        >
          {/* Cabecera */}
          <div
            className="grid items-center"
            style={{
              gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr) minmax(0, 1fr)',
              borderBottom: '1px solid rgba(21,17,11,0.10)',
            }}
          >
            <div className="px-6 md:px-9 py-6 text-[0.78rem] uppercase tracking-[0.16em] font-semibold text-muted">
              Característica
            </div>
            <div
              className="px-6 md:px-9 py-6 text-center"
              style={{ background: 'linear-gradient(180deg, rgba(244,224,171,0.45), rgba(217,164,65,0.18))' }}
            >
              <div className="font-serif font-medium text-[1.15rem]" style={{ letterSpacing: '0.05em' }}>
                ALMA <span style={{ color: '#A87614', fontStyle: 'italic' }}>NEXUS</span>
              </div>
            </div>
            <div className="px-6 md:px-9 py-6 text-center">
              <div className="font-serif italic text-[1.05rem] text-muted">
                Instalador tradicional
              </div>
            </div>
          </div>

          {/* Filas */}
          {ROWS.map((row, i) => (
            <div
              key={i}
              className="grid items-center transition-colors hover:bg-paper-deep"
              style={{
                gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr) minmax(0, 1fr)',
                borderBottom: i < ROWS.length - 1 ? '1px solid rgba(21,17,11,0.06)' : 'none',
              }}
            >
              <div className="px-6 md:px-9 py-5 text-[0.95rem] text-ink">{row.feature}</div>
              <div
                className="px-6 md:px-9 py-5 text-center"
                style={{ background: 'rgba(244,224,171,0.10)' }}
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
    return <span className="text-[0.85rem] text-muted italic">{value}</span>
  }
  if (value === true) {
    return (
      <span
        className="inline-grid place-items-center w-7 h-7 rounded-full"
        style={{
          background: good ? '#D9A441' : 'rgba(21,17,11,0.12)',
          boxShadow: good ? '0 4px 12px rgba(217,164,65,0.4)' : 'none',
        }}
      >
        <svg viewBox="0 0 14 14" width="12" height="12" fill="none" stroke={good ? '#15110B' : '#80796B'} strokeWidth="2.4">
          <path d="M3 7l3 3 5-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    )
  }
  return (
    <span
      className="inline-grid place-items-center w-7 h-7 rounded-full"
      style={{ background: 'rgba(21,17,11,0.06)' }}
    >
      <svg viewBox="0 0 14 14" width="11" height="11" fill="none" stroke="#80796B" strokeWidth="2">
        <path d="M3 3l8 8M11 3l-8 8" strokeLinecap="round" />
      </svg>
    </span>
  )
}
