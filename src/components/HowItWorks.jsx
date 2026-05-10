import SectionHead from './SectionHead'

const ICONS = {
  datos: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="6" width="22" height="20" rx="2" />
      <path d="M5 11h22M9 16h10M9 20h7" />
    </svg>
  ),
  analisis: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="14" cy="14" r="8" />
      <path d="M20 20l6 6" />
      <path d="M11 14l2 2 4-4" />
    </svg>
  ),
  calculo: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="4" width="18" height="24" rx="2" />
      <path d="M11 9h10M11 14h3M17 14h3M11 19h3M17 19h3M11 24h9" />
    </svg>
  ),
  resultado: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" />
    </svg>
  ),
}

const STEPS = [
  { id: 'datos',     num: 'i — Datos',     title: 'Introduces tu situación', desc: 'Tipo de cliente, ubicación, consumo aproximado y necesidades principales.' },
  { id: 'analisis',  num: 'ii — Análisis',  title: 'Analizamos tu caso',      desc: 'Estimación automática de demanda, producción posible y solución viable.' },
  { id: 'calculo',   num: 'iii — Cálculo',  title: 'Calculamos números reales', desc: 'Precio orientativo, ahorro mensual, retorno y componentes principales.' },
  { id: 'resultado', num: 'iv — Resultado', title: 'Recibes tu propuesta',    desc: 'Propuesta inicial clara y siguiente paso comercial o técnico, sin presión.' },
]

export default function HowItWorks() {
  return (
    <section id="como" className="relative" style={{ paddingBlock: 'var(--section-y, 140px)' }}>
      <div className="container-x">
        <SectionHead
          num="02 — Proceso"
          eyebrow="Cómo funciona"
          title={<>Simple para el cliente,<br /><em>potente</em> por detrás.</>}
          lead="Un recorrido claro reduce fricción y permite convertir visitas en oportunidades cualificadas, sin formularios largos ni jerga técnica."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {STEPS.map((s, i) => (
            <article
              key={s.title}
              className="reveal card-elevate relative p-7 rounded-[18px] overflow-hidden"
              data-delay={i + 1}
              style={{
                background: 'rgba(255, 255, 255, 0.88)',
                border: '1px solid rgba(21, 17, 11, 0.10)',
                backdropFilter: 'blur(14px)',
              }}
            >
              {/* Número grande de fondo */}
              <span
                className="absolute -top-3 -right-2 font-serif italic select-none pointer-events-none"
                style={{
                  fontSize: '6rem',
                  color: 'rgba(217,164,65,0.10)',
                  fontVariationSettings: "'opsz' 144, 'SOFT' 100",
                  lineHeight: 1,
                }}
                aria-hidden="true"
              >
                {i + 1}
              </span>

              <div
                className="relative w-12 h-12 rounded-[12px] grid place-items-center text-gold-deep mb-5"
                style={{
                  background: 'linear-gradient(135deg, rgba(217,164,65,0.16), rgba(217,164,65,0.04))',
                  border: '1px solid rgba(217,164,65,0.32)',
                }}
              >
                {ICONS[s.id]}
              </div>
              <div
                className="relative font-serif italic text-gold-deep mb-2"
                style={{ fontSize: '0.92rem', fontVariationSettings: "'opsz' 36, 'SOFT' 100" }}
              >
                {s.num}
              </div>
              <h3 className="relative text-[1.18rem] mb-2.5">{s.title}</h3>
              <p className="relative text-[0.9rem]">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
