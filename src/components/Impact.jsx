import { useCountUp } from '../hooks/useCountUp'

const STATS = [
  { target: 12500, suffix: '+', unit: 'MWh', label: 'Energía generada',     desc: 'Producción acumulada de la flota.' },
  { target: 4800,  suffix: 't',  unit: '',    label: 'CO₂ evitado',          desc: 'Toneladas que no llegaron a la atmósfera.' },
  { target: 1200,  suffix: '+', unit: '',    label: 'Instalaciones',        desc: 'Hogares, empresas y comunidades.' },
  { target: 98,    suffix: '%', unit: '',    label: 'Satisfacción',         desc: 'Clientes que recomiendan el servicio.' },
]

export default function Impact() {
  return (
    <section
      className="relative"
      style={{
        paddingBlock: 'var(--section-y, 140px)',
        background: 'linear-gradient(180deg, transparent 0%, rgba(244, 236, 218, 0.55) 50%, transparent 100%)',
      }}
    >
      <div className="container-x">
        <div className="grid items-end mb-14" style={{ gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)', gap: 'clamp(28px, 5vw, 80px)' }}>
          <div>
            <span className="eyebrow reveal">Impacto</span>
            <h2 className="reveal mt-5" data-delay="1" style={{ fontSize: 'clamp(2.3rem, 5.2vw, 4.4rem)', letterSpacing: '-0.04em', lineHeight: 0.98, maxWidth: '14ch' }}>
              Cifras que <em>importan.</em>
            </h2>
          </div>
          <div className="reveal justify-self-end" data-delay="2">
            <p className="lead">
              Cada kWh que producimos es energía que dejas de comprar. Cada tonelada de
              CO₂ evitada es un futuro mejor.
            </p>
            <div className="mt-6 flex items-center gap-2 flex-wrap">
              {['Premio Solar 2024', 'Top 10 instaladores', 'Empresa B Corp'].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full text-[0.78rem] font-semibold"
                  style={{
                    background: 'rgba(255,255,255,0.85)',
                    border: '1px solid rgba(217,164,65,0.32)',
                    color: '#A87614',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats editorial grid */}
        <div
          className="reveal grid grid-cols-2 lg:grid-cols-4 gap-0 rounded-[22px] overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.85)',
            border: '1px solid rgba(217,164,65,0.22)',
            backdropFilter: 'blur(14px)',
            boxShadow: '0 28px 60px -20px rgba(21,17,11,0.10)',
          }}
        >
          {STATS.map((s, i) => <Stat key={i} {...s} index={i} total={STATS.length} />)}
        </div>
      </div>
    </section>
  )
}

function Stat({ target, suffix, unit, label, desc, index, total }) {
  const [ref, value] = useCountUp(target, { duration: 2000 })
  const isLast = index === total - 1
  return (
    <article
      ref={ref}
      className="relative px-7 py-9 lg:py-12 transition-colors hover:bg-paper-deep"
      style={{
        borderRight: !isLast ? '1px solid rgba(21, 17, 11, 0.08)' : 'none',
        borderBottom: index < 2 ? '1px solid rgba(21, 17, 11, 0.08)' : 'none',
      }}
    >
      <div
        className="text-[0.74rem] uppercase tracking-[0.16em] font-bold mb-5"
        style={{ color: '#A87614' }}
      >
        {String(index + 1).padStart(2, '0')} · {label}
      </div>
      <strong
        className="block font-serif font-medium text-ink mb-3"
        style={{
          fontSize: 'clamp(3rem, 5.5vw, 5rem)',
          letterSpacing: '-0.05em',
          lineHeight: 0.92,
          fontVariationSettings: "'opsz' 144, 'SOFT' 50",
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {Math.round(value).toLocaleString('es')}
        <em
          className="italic text-gold-deep"
          style={{ fontSize: '0.58em', marginLeft: '4px' }}
        >
          {suffix}
        </em>
        {unit && (
          <span
            className="ml-2 font-serif italic text-gold-deep"
            style={{ fontSize: '0.42em', verticalAlign: 'middle', fontVariationSettings: "'opsz' 36, 'SOFT' 100" }}
          >
            {unit}
          </span>
        )}
      </strong>
      <p className="text-[0.86rem] text-muted leading-snug">{desc}</p>
    </article>
  )
}
