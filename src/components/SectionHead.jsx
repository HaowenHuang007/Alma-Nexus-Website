export default function SectionHead({ eyebrow, title, lead, num }) {
  return (
    <div className="mb-10 md:mb-16">
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
            style={{ fontSize: 'clamp(2.1rem, 4.6vw, 3.8rem)', letterSpacing: '-0.035em', maxWidth: '14ch' }}
          >
            {title}
          </h2>
        </div>
        <p className="lead reveal justify-self-end" data-delay="2">
          {lead}
        </p>
      </div>
    </div>
  )
}
