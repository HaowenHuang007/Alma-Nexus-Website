import SectionHead from './SectionHead'

/**
 * Partners (spec §3.10): 3 tarjetas + CTA centrado.
 * Fondo: gradiente dorado cálido según referencia HTML.
 */
const CARDS = [
  {
    num: '01',
    title: 'Más clientes',
    desc: 'Acceso a oportunidades cualificadas y proyectos pre-validados.',
  },
  {
    num: '02',
    title: 'Soporte técnico',
    desc: 'Apoyo en diseño, dimensionamiento, componentes e incidencias en obra.',
  },
  {
    num: '03',
    title: 'Escalabilidad',
    desc: 'Procesos, automatización y estructura para crecer con control y previsibilidad.',
  },
]

export default function Partners() {
  return (
    <section
      id="partners"
      className="relative"
      style={{
        paddingBlock: 'var(--section-y, 140px)',
        background: 'linear-gradient(135deg, #F4ECDA 0%, rgba(244,224,171,0.5) 100%)',
      }}
    >
      <div className="container-x">
        <SectionHead
          num="06 — B2B"
          eyebrow="Partners"
          title={<>Crece con <em>Alma Energies.</em></>}
          lead="Programa para instaladores, ingenierías y empresas energéticas que quieran vender más, ejecutar mejor y escalar con soporte real."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {CARDS.map((c, i) => (
            <article
              key={c.num}
              className="reveal card-elevate p-7 rounded-[18px]"
              data-delay={i + 1}
              style={{
                background: 'rgba(255, 255, 255, 0.92)',
                border: '1px solid rgba(217, 164, 65, 0.28)',
                backdropFilter: 'blur(14px)',
              }}
            >
              <div
                className="font-serif italic text-gold-deep mb-3"
                style={{ fontSize: '0.92rem', fontVariationSettings: "'opsz' 36, 'SOFT' 100" }}
              >
                {c.num}
              </div>
              <h3 className="mb-2.5">{c.title}</h3>
              <p className="text-[0.92rem]">{c.desc}</p>
            </article>
          ))}
        </div>

        <div className="reveal text-center">
          <a className="btn btn-primary" href="mailto:partners@almaenergies.es">
            Quiero ser partner
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-3.5 h-3.5"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
