import { useCountUp } from '../hooks/useCountUp'

const STATS = [
  { target: 12500, suffix: '+', label: 'MWh generados', desc: 'Energía limpia producida por nuestras instalaciones' },
  { target: 4800,  suffix: 't',  label: 'CO₂ evitado', desc: 'Toneladas de emisiones que no llegaron a la atmósfera' },
  { target: 1200,  suffix: '+', label: 'Instalaciones', desc: 'Hogares, empresas y comunidades transformados' },
  { target: 98,    suffix: '%', label: 'Satisfacción', desc: 'Clientes que recomendarían nuestro servicio' },
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
        <div className="text-center max-w-[720px] mx-auto mb-14">
          <span className="eyebrow reveal">Impacto</span>
          <h2 className="reveal mt-5" data-delay="1">
            Cifras que <em>importan.</em>
          </h2>
          <p className="lead reveal mt-5 mx-auto" data-delay="2">
            Cada kWh que producimos es energía que dejas de comprar. Cada tonelada de
            CO₂ evitada es un futuro mejor.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((s, i) => <Stat key={i} {...s} delay={i + 1} />)}
        </div>
      </div>
    </section>
  )
}

function Stat({ target, suffix, label, desc, delay }) {
  const [ref, value] = useCountUp(target, { duration: 2000 })
  return (
    <article
      ref={ref}
      className="reveal text-center p-6"
      data-delay={delay}
    >
      <strong
        className="block font-serif font-medium text-gold-deep mb-2"
        style={{
          fontSize: 'clamp(2.6rem, 5vw, 4.4rem)',
          letterSpacing: '-0.04em',
          lineHeight: 1,
          fontVariationSettings: "'opsz' 144, 'SOFT' 50",
        }}
      >
        {Math.round(value).toLocaleString('es')}<em className="italic" style={{ fontSize: '0.6em' }}>{suffix}</em>
      </strong>
      <div
        className="font-serif italic text-ink mb-2"
        style={{ fontSize: '1.05rem', fontVariationSettings: "'opsz' 36, 'SOFT' 100" }}
      >
        {label}
      </div>
      <p className="text-[0.85rem] text-muted max-w-[28ch] mx-auto leading-snug">{desc}</p>
    </article>
  )
}
