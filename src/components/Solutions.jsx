import SectionHead from './SectionHead'

/**
 * Soluciones (spec §3.6):
 *   - Fotovoltaica, Aerotermia, Suelo radiante, ACS, Geotermia
 *   - Enfoque: sistema completo, no productos aislados
 *
 * IMPORTANTE: spec §11 prohíbe "iconografía evidente de elementos (agua, fuego, etc.)".
 * Por eso NO usamos pictogramas (gota, llama, montaña, ondas). Usamos etiquetas
 * tipográficas en serif italic dentro de un bloque sutil (ver clase .sol-tag).
 */
const SOLUTIONS = [
  { tag: 'FV', title: 'Fotovoltaica', desc: 'Autoconsumo residencial, empresas, comunidades y proyectos industriales.' },
  { tag: 'AE', title: 'Aerotermia', desc: 'Climatización eficiente para calefacción, refrigeración y agua caliente.' },
  { tag: 'SR', title: 'Suelo radiante', desc: 'Confort térmico estable, invisible y eficiente durante todo el año.' },
  { tag: 'ACS', title: 'Agua caliente', desc: 'Sistemas de ACS optimizados para viviendas, hoteles y negocios.' },
  { tag: 'GT', title: 'Geotermia', desc: 'Energía del subsuelo para proyectos de máxima eficiencia.' },
]

export default function Solutions() {
  return (
    <section id="soluciones" className="relative bg-paper" style={{ paddingBlock: 'var(--section-y, 140px)' }}>
      <div className="container-x">
        <SectionHead
          num="03 — Servicios"
          eyebrow="Soluciones"
          title={<>Un sistema energético <em>completo.</em></>}
          lead="No vendemos placas sueltas. Combinamos generación, climatización, ACS y soporte para crear instalaciones eficientes, escalables y mantenibles."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {SOLUTIONS.map((s, i) => (
            <article
              key={s.tag}
              className="reveal card-elevate relative p-7 rounded-[18px] overflow-hidden group"
              data-delay={Math.min(i + 1, 4)}
              style={{
                background: 'rgba(255, 255, 255, 0.92)',
                border: '1px solid rgba(21, 17, 11, 0.10)',
                backdropFilter: 'blur(14px)',
              }}
            >
              <span
                className="absolute top-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: 'linear-gradient(90deg, #D9A441 0%, #F4E0AB 100%)' }}
              />
              <div className="sol-tag mb-5">{s.tag}</div>
              <h3 className="text-[1.12rem] mb-2">{s.title}</h3>
              <p className="text-[0.88rem]">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
