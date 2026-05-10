import { useCountUp } from '../hooks/useCountUp'

const METRICS = [
  { target: 60, prefix: '−', suffix: '%', label: 'Reducción potencial de factura combinando producción y eficiencia.' },
  { target: 5,  prefix: '',  suffix: 'a', label: 'Retorno medio estimado según consumo y solución implementada.' },
  { target: 25, prefix: '+', suffix: 'a', label: 'Vida útil de los sistemas con mantenimiento y soporte continuo.' },
]

// Datos de ahorro acumulado a 25 años (porcentaje)
const SAVINGS = [4, 12, 22, 32, 42, 50, 58, 64, 70, 75, 80, 85]

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
          className="grid items-start gap-10 md:gap-20 mb-12"
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
            {METRICS.map((m, i) => <Metric key={i} {...m} delay={i + 1} />)}
          </div>
        </div>

        {/* Gráfico de ahorro acumulado */}
        <SavingsChart />
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

function SavingsChart() {
  return (
    <div
      className="reveal relative p-8 md:p-10 rounded-[22px]"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.92), rgba(244,224,171,0.30))',
        border: '1px solid rgba(217,164,65,0.28)',
        backdropFilter: 'blur(14px)',
      }}
    >
      <div className="flex items-end justify-between mb-7 flex-wrap gap-4">
        <div>
          <span className="eyebrow">Ahorro acumulado</span>
          <h3 className="mt-3 text-[1.4rem] md:text-[1.7rem]" style={{ letterSpacing: '-0.025em' }}>
            Inversión recuperada · ahorro creciente.
          </h3>
        </div>
        <div className="flex items-center gap-5 text-[0.82rem]">
          <span className="flex items-center gap-2 text-muted">
            <span className="w-3 h-3 rounded-sm" style={{ background: 'linear-gradient(180deg, #D9A441, #A87614)' }} />
            Ahorro %
          </span>
          <span className="flex items-center gap-2 text-muted">
            <span className="w-3 h-[2px]" style={{ background: '#15110B' }} />
            Inversión recuperada
          </span>
        </div>
      </div>

      <div className="relative" style={{ height: '220px' }}>
        {/* Líneas de referencia */}
        {[0, 25, 50, 75, 100].map((v) => (
          <div
            key={v}
            className="absolute left-0 right-0 flex items-center"
            style={{ bottom: `${v}%`, transform: 'translateY(50%)' }}
          >
            <span className="text-[0.7rem] text-muted mr-3 w-8 text-right">{v}%</span>
            <div className="flex-1 h-px" style={{ background: 'rgba(21,17,11,0.06)' }} />
          </div>
        ))}

        {/* Línea de inversión recuperada (año 5) */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: `calc(${(5 / 25) * 100}% + 32px)`,
            bottom: '0',
            top: '0',
            width: '1.5px',
            background: 'repeating-linear-gradient(180deg, #15110B 0 4px, transparent 4px 8px)',
          }}
        >
          <span
            className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[0.66rem] font-bold uppercase tracking-[0.10em] whitespace-nowrap"
            style={{ background: '#15110B', color: '#F4D177' }}
          >
            Año 5 · ROI
          </span>
        </div>

        {/* Barras */}
        <div className="absolute left-12 right-0 bottom-0 top-0 flex items-end gap-1">
          {SAVINGS.map((h, i) => (
            <div
              key={i}
              className="flex-1 relative group"
              style={{
                height: `${h}%`,
                background: i < 2
                  ? 'linear-gradient(180deg, rgba(168, 118, 20, 0.7), rgba(168, 118, 20, 0.4))'
                  : 'linear-gradient(180deg, #D9A441, rgba(217, 164, 65, 0.5))',
                borderRadius: '4px 4px 0 0',
                animation: `barGrow 1.2s cubic-bezier(0.2, 0.7, 0.3, 1) ${i * 0.08}s backwards`,
                boxShadow: i >= 4 ? '0 0 16px rgba(217,164,65,0.32)' : 'none',
              }}
            >
              <span
                className="absolute -top-6 left-1/2 -translate-x-1/2 text-[0.7rem] font-bold text-gold-deep opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
              >
                {h}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Eje X */}
      <div className="flex justify-between mt-3 pl-12 text-[0.7rem] text-muted">
        <span>Año 1</span>
        <span>Año 5</span>
        <span>Año 10</span>
        <span>Año 15</span>
        <span>Año 20</span>
        <span>Año 25</span>
      </div>
    </div>
  )
}
