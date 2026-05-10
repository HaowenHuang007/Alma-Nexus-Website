import SectionHead from './SectionHead'

const ICONS = {
  fv: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="14" r="5" />
      <path d="M24 4v3M24 21v3M14 14h-3M37 14h-3M17 7l-2-2M31 7l2-2M17 21l-2 2M31 21l2 2" />
      <path d="M10 32l4-8h20l4 8M10 32l-2 8h32l-2-8M10 32h28M16 32l-1 8M24 32v8M32 32l1 8" />
    </svg>
  ),
  ae: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="14" width="32" height="20" rx="3" />
      <circle cx="24" cy="24" r="6" />
      <path d="M24 19v10M19 24h10" />
      <path d="M6 8c2-2 4-2 6 0M36 8c2-2 4-2 6 0M6 40c2 2 4 2 6 0M36 40c2 2 4 2 6 0" />
    </svg>
  ),
  sr: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 36h36M6 30h36M6 24h36" />
      <path d="M14 18c0-3 4-3 4-6s-4-3-4-6M24 18c0-3 4-3 4-6s-4-3-4-6M34 18c0-3 4-3 4-6s-4-3-4-6" />
    </svg>
  ),
  acs: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 6c-6 8-12 14-12 22a12 12 0 0 0 24 0c0-8-6-14-12-22z" />
      <path d="M20 30c0 3 2 5 4 5" />
      <path d="M14 4c1.5 1.5 1.5 3 0 4.5M30 4c1.5 1.5 1.5 3 0 4.5" />
    </svg>
  ),
  gt: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 36l10-14 8 10 6-8 16 12" />
      <path d="M4 36h40" />
      <path d="M14 22v-8M14 14l-3 3M14 14l3 3" />
    </svg>
  ),
}

const SOLUTIONS = [
  { id: 'fv',  title: 'Fotovoltaica',  desc: 'Autoconsumo residencial, empresas, comunidades y proyectos industriales.' },
  { id: 'ae',  title: 'Aerotermia',    desc: 'Climatización eficiente para calefacción, refrigeración y agua caliente.' },
  { id: 'sr',  title: 'Suelo radiante',desc: 'Confort térmico estable, invisible y eficiente durante todo el año.' },
  { id: 'acs', title: 'Agua caliente', desc: 'Sistemas de ACS optimizados para viviendas, hoteles y negocios.' },
  { id: 'gt',  title: 'Geotermia',     desc: 'Energía del subsuelo para proyectos de máxima eficiencia.' },
]

export default function Solutions() {
  return (
    <section id="soluciones" className="relative" style={{ paddingBlock: 'var(--section-y, 140px)' }}>
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
              key={s.id}
              className="reveal card-elevate tilt relative p-7 rounded-[18px] overflow-hidden group"
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
              <div
                className="w-12 h-12 rounded-[12px] grid place-items-center mb-5 text-gold-deep"
                style={{
                  background: 'linear-gradient(135deg, rgba(217,164,65,0.16), rgba(217,164,65,0.04))',
                  border: '1px solid rgba(217,164,65,0.32)',
                }}
              >
                {ICONS[s.id]}
              </div>
              <h3 className="text-[1.12rem] mb-2">{s.title}</h3>
              <p className="text-[0.88rem]">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
