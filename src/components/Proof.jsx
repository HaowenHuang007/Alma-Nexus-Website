import SectionHead from './SectionHead'

const PROJECTS = [
  {
    tag: 'Vivienda',
    title: 'Vivienda unifamiliar eficiente',
    desc: 'Fotovoltaica + aerotermia + ACS para reducir consumo y aumentar confort durante todo el año.',
  },
  {
    tag: 'Empresa',
    title: 'Nave industrial autoconsumo',
    desc: 'Instalación orientada a retorno, estabilidad de costes y reducción inmediata de factura energética.',
  },
  {
    tag: 'Comunidad',
    title: 'Comunidad energética',
    desc: 'Soluciones compartidas para edificios, comunidades y parkings con gestión centralizada.',
  },
]

export default function Proof() {
  return (
    <section id="proyectos" className="relative" style={{ paddingBlock: 'var(--section-y, 140px)' }}>
      <div className="container-x">
        <SectionHead
          num="04 — Proyectos"
          eyebrow="Prueba social"
          title={<>Resultados que generan <em>confianza.</em></>}
          lead="Bloque preparado para proyectos, testimonios e imágenes reales cuando estén disponibles. Por ahora, ejemplos de los tres ejes de trabajo."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className="reveal rounded-[18px] overflow-hidden bg-white shadow-sm-soft transition-all hover:-translate-y-1 hover:shadow-md-soft"
              data-delay={i + 1}
              style={{ border: '1px solid rgba(21, 17, 11, 0.10)' }}
            >
              <div
                className="relative overflow-hidden"
                style={{
                  aspectRatio: '4 / 3',
                  background: `
                    linear-gradient(140deg, rgba(217,164,65,0.18), rgba(14,168,255,0.06)),
                    linear-gradient(135deg, #131A1F, #0A1014)
                  `,
                }}
                aria-hidden="true"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `
                      repeating-linear-gradient(118deg, transparent 0 32px, rgba(217,164,65,0.32) 32px 33px, transparent 33px 66px),
                      radial-gradient(circle at 70% 60%, rgba(14, 168, 255, 0.28), transparent 40%)
                    `,
                  }}
                />
              </div>
              <div className="p-6 pb-7">
                <div className="text-[0.74rem] font-bold uppercase tracking-widest text-gold-deep mb-2.5">
                  {p.tag}
                </div>
                <h3 className="text-[1.18rem] mb-2">{p.title}</h3>
                <p className="text-[0.9rem]">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
