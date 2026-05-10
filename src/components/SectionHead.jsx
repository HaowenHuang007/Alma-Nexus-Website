export default function SectionHead({ eyebrow, title, lead, num }) {
  // Extraer el número (ej: "01 — Identificación" → "01")
  const bigNum = num ? num.split(' ')[0] : null

  return (
    <div className="relative mb-10 md:mb-16">
      {/* Número editorial gigante de fondo */}
      {bigNum && (
        <div
          className="reveal absolute pointer-events-none select-none"
          style={{
            top: '-20px',
            right: '0',
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
          {bigNum}
        </div>
      )}

      <div className="relative" style={{ zIndex: 1 }}>
        {num && (
          <div
            className="reveal flex items-center gap-3 mb-7 text-gold-deep"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.18em' }}
          >
            <span style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: '1.05rem', fontVariationSettings: "'opsz' 36, 'SOFT' 100" }}>
              §
            </span>
            <span>{num}</span>
            <span className="flex-1 h-px max-w-[60px]" style={{ background: 'linear-gradient(90deg, rgba(217,164,65,0.5), transparent)' }} />
          </div>
        )}
        <div
          className="grid items-end"
          style={{
            gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)',
            gap: 'clamp(28px, 5vw, 80px)',
          }}
        >
          <div>
            <span className="eyebrow reveal">{eyebrow}</span>
            <h2
              className="reveal mt-5"
              data-delay="1"
              style={{ fontSize: 'clamp(2.3rem, 5.2vw, 4.4rem)', letterSpacing: '-0.04em', lineHeight: 0.98, maxWidth: '14ch' }}
            >
              {title}
            </h2>
          </div>
          <p className="lead reveal justify-self-end" data-delay="2">
            {lead}
          </p>
        </div>
      </div>
    </div>
  )
}
