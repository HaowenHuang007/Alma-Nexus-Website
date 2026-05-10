/**
 * Strip "Confían en nosotros" — tipografía elegante con nombres
 * de partners/medios. Sin imágenes, solo wordmarks elegantes.
 */
const LOGOS = [
  { name: 'Iberdrola',     style: 'serif' },
  { name: 'IDAE',          style: 'mono'  },
  { name: 'Endesa',        style: 'serif' },
  { name: 'Naturgy',       style: 'sans'  },
  { name: 'Repsol',        style: 'serif' },
  { name: 'Acciona',       style: 'sans'  },
  { name: 'EnerAgen',      style: 'mono'  },
]

export default function TrustedBy() {
  return (
    <section
      className="relative"
      style={{
        paddingBlock: 'clamp(48px, 6vw, 72px)',
        background: 'linear-gradient(180deg, transparent, rgba(244, 236, 218, 0.4), transparent)',
      }}
    >
      <div className="container-x">
        <div className="text-center mb-8 reveal">
          <span className="eyebrow">Trabajamos con</span>
        </div>
        <div
          className="flex items-center justify-around gap-8 flex-wrap"
          style={{ opacity: 0.55 }}
        >
          {LOGOS.map((l) => (
            <span
              key={l.name}
              className="reveal transition-all hover:opacity-100"
              style={{
                fontFamily:
                  l.style === 'serif'
                    ? "'Fraunces', serif"
                    : l.style === 'mono'
                      ? "'Courier New', monospace"
                      : "'Plus Jakarta Sans', sans-serif",
                fontSize: '1.15rem',
                fontWeight: l.style === 'sans' ? 700 : 500,
                letterSpacing: l.style === 'mono' ? '0.18em' : '-0.01em',
                color: '#15110B',
                textTransform: l.style === 'mono' ? 'uppercase' : 'none',
                fontStyle: l.style === 'serif' ? 'italic' : 'normal',
                fontVariationSettings: l.style === 'serif' ? "'opsz' 36, 'SOFT' 100" : 'normal',
              }}
            >
              {l.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
