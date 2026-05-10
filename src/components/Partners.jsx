import SectionHead from './SectionHead'

const ICONS = {
  clientes: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="5" />
      <circle cx="22" cy="13" r="4" />
      <path d="M3 28c1-6 4-9 8-9s7 3 8 9" />
      <path d="M18 28c1-4 3-7 6-7s4 2 5 6" />
    </svg>
  ),
  soporte: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4l-2 4-4 1 3 3-1 4 4-2 4 2-1-4 3-3-4-1z" />
      <path d="M9 19l-3 3 2 2 2-2M23 19l3 3-2 2-2-2" />
      <path d="M11 28h10" />
    </svg>
  ),
  escala: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 26l6-6 5 5 7-9 4 4" />
      <path d="M22 16h6v6" />
      <path d="M4 28h24" />
    </svg>
  ),
}

const CARDS = [
  {
    id: 'clientes',
    num: '01',
    title: 'Más clientes',
    desc: 'Acceso a oportunidades cualificadas y proyectos pre-validados.',
  },
  {
    id: 'soporte',
    num: '02',
    title: 'Soporte técnico',
    desc: 'Apoyo en diseño, dimensionamiento, componentes e incidencias en obra.',
  },
  {
    id: 'escala',
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
          title={<>Crece con <em>Alma Nexus.</em></>}
          lead="Programa para instaladores, ingenierías y empresas energéticas que quieran vender más, ejecutar mejor y escalar con soporte real."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {CARDS.map((c, i) => (
            <article
              key={c.id}
              className="reveal card-elevate p-7 rounded-[18px]"
              data-delay={i + 1}
              style={{
                background: 'rgba(255, 255, 255, 0.92)',
                border: '1px solid rgba(217, 164, 65, 0.28)',
                backdropFilter: 'blur(14px)',
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-12 h-12 rounded-[12px] grid place-items-center text-gold-deep"
                  style={{
                    background: 'linear-gradient(135deg, rgba(217,164,65,0.18), rgba(217,164,65,0.04))',
                    border: '1px solid rgba(217,164,65,0.40)',
                  }}
                >
                  {ICONS[c.id]}
                </div>
                <div
                  className="font-serif italic text-gold-deep"
                  style={{ fontSize: '0.95rem', fontVariationSettings: "'opsz' 36, 'SOFT' 100" }}
                >
                  {c.num}
                </div>
              </div>
              <h3 className="mb-2.5">{c.title}</h3>
              <p className="text-[0.92rem]">{c.desc}</p>
            </article>
          ))}
        </div>

        <div className="reveal text-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => window.dispatchEvent(new Event('open-partner'))}
          >
            Quiero ser partner
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5" aria-hidden="true">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
