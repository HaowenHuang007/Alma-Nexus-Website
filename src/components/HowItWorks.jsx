import SectionHead from './SectionHead'

const STEPS = [
  { num: 'i — Datos', title: 'Introduces tu situación', desc: 'Tipo de cliente, ubicación, consumo aproximado y necesidades principales.' },
  { num: 'ii — Análisis', title: 'Analizamos tu caso', desc: 'Estimación automática de demanda, producción posible y solución viable.' },
  { num: 'iii — Cálculo', title: 'Calculamos números reales', desc: 'Precio orientativo, ahorro mensual, retorno y componentes principales.' },
  { num: 'iv — Resultado', title: 'Recibes tu propuesta', desc: 'Propuesta inicial clara y siguiente paso comercial o técnico, sin presión.' },
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
              className="reveal p-7 rounded-[18px] transition-all hover:-translate-y-0.5"
              data-delay={i + 1}
              style={{
                background: 'rgba(255, 255, 255, 0.88)',
                border: '1px solid rgba(21, 17, 11, 0.10)',
                backdropFilter: 'blur(14px)',
              }}
            >
              <div
                className="font-serif italic text-gold-deep mb-3"
                style={{ fontSize: '1rem', fontVariationSettings: "'opsz' 36, 'SOFT' 100" }}
              >
                {s.num}
              </div>
              <h3 className="text-[1.18rem] mb-2.5">{s.title}</h3>
              <p className="text-[0.9rem]">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
