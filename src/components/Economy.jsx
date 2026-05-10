import { useCountUp } from '../hooks/useCountUp'

const METRICS = [
  { target: 60, prefix: '−', suffix: '%', label: 'Reducción potencial de factura combinando producción y eficiencia.' },
  { target: 5,  prefix: '',  suffix: 'a', label: 'Retorno medio estimado según consumo y solución implementada.' },
  { target: 25, prefix: '+', suffix: 'a', label: 'Vida útil de los sistemas con mantenimiento y soporte continuo.' },
]

export default function Economy() {
  return (
    <section
      id="beneficio"
      className="relative"
      style={{
        paddingBlock: 'var(--section-y, 140px)',
        background: 'linear-gradient(180deg, transparent 0%, #F4ECDA 50%, transparent 100%)',
      }}
    >
      <div className="container-x">
        <div
          className="grid items-center gap-10 md:gap-20"
          style={{ gridTemplateColumns: 'minmax(0, 0.85fr) minmax(0, 1.15fr)' }}
        >
          <div>
            <span className="eyebrow reveal">Beneficio económico</span>
            <h2 className="reveal mt-5" data-delay="1">
              La decisión empieza por el <em>ahorro.</em>
            </h2>
            <p className="lead reveal mt-5" data-delay="2">
              Antes de hablar de equipos, el cliente necesita entender cuánto puede ahorrar,
              en cuánto tiempo recupera la inversión y qué solución encaja con su consumo real.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {METRICS.map((m, i) => (
              <Metric key={i} {...m} delay={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Metric({ target, prefix, suffix, label, delay }) {
  const [ref, value] = useCountUp(target, { duration: 1600 })
  return (
    <article
      ref={ref}
      className="reveal card-elevate p-7 rounded-[18px] bg-white shadow-sm-soft"
      data-delay={delay}
      style={{ border: '1px solid rgba(21, 17, 11, 0.10)' }}
    >
      <strong
        className="block font-serif font-medium text-gold-deep mb-3"
        style={{ fontSize: 'clamp(2.2rem, 3vw, 2.8rem)', letterSpacing: '-0.04em', lineHeight: 1 }}
      >
        {prefix}{value}<em className="italic">{suffix}</em>
      </strong>
      <p className="text-[0.9rem] text-muted">{label}</p>
    </article>
  )
}
