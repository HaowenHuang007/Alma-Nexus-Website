/**
 * Strip de certificaciones y reconocimientos.
 * Cada item es un badge con código tipográfico + descripción breve.
 */
const ITEMS = [
  { code: 'ISO 9001', label: 'Calidad certificada' },
  { code: 'ISO 14001', label: 'Gestión ambiental' },
  { code: 'IDAE',      label: 'Registro oficial' },
  { code: 'UNEF',      label: 'Asociación FV' },
  { code: 'RITE',      label: 'Reglamento térmico' },
  { code: 'CE',        label: 'Conformidad europea' },
]

export default function Recognitions() {
  return (
    <section
      className="relative"
      style={{
        paddingBlock: 'clamp(48px, 6vw, 80px)',
      }}
    >
      <div className="container-x">
        <div className="text-center mb-9 reveal">
          <span className="eyebrow">Certificaciones</span>
        </div>
        <div className="flex items-stretch justify-center gap-3 flex-wrap">
          {ITEMS.map((it, i) => (
            <div
              key={it.code}
              className="reveal flex items-center gap-3 px-5 py-3.5 rounded-[14px] transition-all hover:-translate-y-0.5"
              data-delay={(i % 4) + 1}
              style={{
                background: 'rgba(255,255,255,0.85)',
                border: '1px solid rgba(217,164,65,0.28)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <span
                className="font-serif font-medium text-gold-deep"
                style={{
                  fontSize: '0.95rem',
                  letterSpacing: '0.06em',
                  fontVariationSettings: "'opsz' 36, 'SOFT' 50",
                }}
              >
                {it.code}
              </span>
              <span className="w-px h-5" style={{ background: 'rgba(217,164,65,0.3)' }} />
              <span className="text-[0.8rem] text-muted">{it.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
