import SectionHead from './SectionHead'

const PHASES = [
  { num: 'i — Estudio', title: 'Revisamos tu caso', desc: 'Consumo, necesidades, vivienda o negocio y posibilidades reales sobre el terreno.' },
  { num: 'ii — Propuesta', title: 'Te enviamos la solución', desc: 'Inversión, ahorro, retorno y equipos. Clara, sin letra pequeña, con alternativas cuando aplica.' },
  { num: 'iii — Instalación', title: 'Coordinamos la ejecución', desc: 'Puesta en marcha, documentación técnica y trámites administrativos por un único responsable.' },
  { num: 'iv — Seguimiento', title: 'Acompañamos después', desc: 'Control de rendimiento, soporte 24/7 y mantenimiento del sistema mientras dure su vida útil.' },
]

export default function Process() {
  return (
    <section id="proceso" className="relative" style={{ paddingBlock: 'var(--section-y, 140px)' }}>
      <div className="container-x">
        <SectionHead
          num="05 — Acompañamiento"
          eyebrow="Proceso"
          title={<>De la idea al <em>ahorro real.</em></>}
          lead="El lenguaje y el ritmo deben transmitir acompañamiento. No se trata al usuario como un lead dentro de un embudo, sino como cliente desde el primer día."
        />
        <div
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 backdrop-blur-md"
          style={{
            borderTop: '1px solid rgba(21, 17, 11, 0.10)',
            borderBottom: '1px solid rgba(21, 17, 11, 0.10)',
            background: 'rgba(255, 255, 255, 0.55)',
          }}
        >
          {PHASES.map((ph, i) => (
            <div
              key={ph.title}
              className="reveal relative p-9"
              data-delay={i + 1}
              style={{
                borderRight:
                  i < PHASES.length - 1 ? '1px solid rgba(21, 17, 11, 0.10)' : 'none',
              }}
            >
              <span
                className="absolute top-[-1px] left-7 w-7 h-px bg-gold"
                aria-hidden="true"
              />
              <div
                className="font-serif italic text-gold-deep mb-4"
                style={{ fontSize: '0.88rem', fontVariationSettings: "'opsz' 36, 'SOFT' 100" }}
              >
                {ph.num}
              </div>
              <h3 className="text-[1.18rem] mb-2.5">{ph.title}</h3>
              <p className="text-[0.9rem]">{ph.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
