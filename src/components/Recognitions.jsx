const ITEMS = [
  {
    code: 'ISO 9001', label: 'Calidad certificada',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" />
      </svg>
    ),
  },
  {
    code: 'ISO 14001', label: 'Gestión ambiental',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c-4 5-7 8-7 13a7 7 0 0 0 14 0c0-5-3-8-7-13z" />
        <path d="M10 16c0 2 1 3 2 3" />
      </svg>
    ),
  },
  {
    code: 'IDAE', label: 'Registro oficial',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 5l7-3 7 3v6c0 5-3 9-7 11-4-2-7-6-7-11V5z" />
        <path d="M9 12l2 2 4-5" />
      </svg>
    ),
  },
  {
    code: 'UNEF', label: 'Asociación FV',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="9" r="3.5" />
        <path d="M12 2v2M12 14v2M5 9h2M17 9h2M7 4l1.5 1.5M15.5 4L17 5.5M7 14l1.5-1.5M15.5 14L17 12.5" />
        <path d="M6 20h12M8 22h8" />
      </svg>
    ),
  },
  {
    code: 'RITE', label: 'Reglamento térmico',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 9v6M9 12h6" />
      </svg>
    ),
  },
  {
    code: 'CE', label: 'Conformidad europea',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M15 8a5 5 0 1 0 0 8" />
        <path d="M8 12h3" />
      </svg>
    ),
  },
]

export default function Recognitions() {
  return (
    <section className="relative" style={{ paddingBlock: 'clamp(56px, 7vw, 88px)' }}>
      <div className="container-x">
        <div className="text-center mb-10 reveal">
          <span className="eyebrow">Certificaciones</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {ITEMS.map((it, i) => (
            <div
              key={it.code}
              className="reveal group flex flex-col items-center gap-3 p-6 rounded-[16px] transition-all hover:-translate-y-1"
              data-delay={(i % 4) + 1}
              style={{
                background: 'rgba(255,255,255,0.85)',
                border: '1px solid rgba(217,164,65,0.28)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 1px 2px rgba(21,17,11,0.04)',
              }}
            >
              <div
                className="w-11 h-11 rounded-[12px] grid place-items-center text-gold-deep transition-colors group-hover:bg-gold group-hover:text-ink"
                style={{
                  background: 'linear-gradient(135deg, rgba(217,164,65,0.14), rgba(217,164,65,0.03))',
                  border: '1px solid rgba(217,164,65,0.32)',
                }}
              >
                {it.icon}
              </div>
              <div className="text-center">
                <div
                  className="font-serif font-medium text-gold-deep"
                  style={{
                    fontSize: '0.92rem',
                    letterSpacing: '0.04em',
                    fontVariationSettings: "'opsz' 36, 'SOFT' 50",
                  }}
                >
                  {it.code}
                </div>
                <div className="text-[0.74rem] text-muted mt-0.5 leading-tight">{it.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
