import SectionHead from './SectionHead'
import panelImg from '../assets/panel.jpg'

const PROJECTS = [
  {
    tag: 'Vivienda',
    title: 'Vivienda unifamiliar eficiente',
    desc: 'Fotovoltaica + aerotermia + ACS para reducir consumo y aumentar confort durante todo el año.',
    metric: '−74%',
    metricLabel: 'reducción factura',
    location: 'Valencia',
  },
  {
    tag: 'Empresa',
    title: 'Nave industrial autoconsumo',
    desc: 'Instalación orientada a retorno, estabilidad de costes y reducción inmediata de factura energética.',
    metric: '−61%',
    metricLabel: 'coste energético',
    location: 'Zaragoza',
  },
  {
    tag: 'Comunidad',
    title: 'Comunidad energética',
    desc: 'Soluciones compartidas para edificios, comunidades y parkings con gestión centralizada.',
    metric: '−52%',
    metricLabel: 'gasto común',
    location: 'Madrid',
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
              className="reveal card-elevate group relative rounded-[20px] overflow-hidden"
              data-delay={i + 1}
              style={{
                background: '#fff',
                border: '1px solid rgba(21, 17, 11, 0.10)',
                boxShadow: '0 20px 50px rgba(21,17,11,0.06)',
              }}
            >
              {/* Imagen real del panel */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: '4 / 3' }}
                aria-hidden="true"
              >
                <img
                  src={panelImg}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay oscuro gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(10,16,20,0) 0%, rgba(10,16,20,0.10) 60%, rgba(10,16,20,0.65) 100%)',
                  }}
                />
                {/* Tag arriba-izquierda */}
                <div
                  className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-[0.72rem] font-bold tracking-[0.14em] uppercase"
                  style={{
                    background: 'rgba(251,247,238,0.95)',
                    color: '#A87614',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {p.tag}
                </div>
                {/* Métrica destacada abajo */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <div
                      className="font-serif font-medium"
                      style={{
                        fontSize: '2.4rem',
                        letterSpacing: '-0.04em',
                        lineHeight: 1,
                        color: '#F4D177',
                        textShadow: '0 2px 12px rgba(10,16,20,0.5)',
                      }}
                    >
                      {p.metric}
                    </div>
                    <div className="text-[0.78rem] uppercase tracking-[0.12em] font-semibold opacity-90">
                      {p.metricLabel}
                    </div>
                  </div>
                  <span className="text-[0.78rem] font-medium opacity-80 italic">{p.location}</span>
                </div>
              </div>
              {/* Body */}
              <div className="p-7">
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
