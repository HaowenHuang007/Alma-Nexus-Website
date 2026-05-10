import SectionHead from './SectionHead'

const CASES = [
  {
    num: '01 — Particular',
    title: 'Vivienda',
    desc: 'Reduce tu factura y mejora el confort combinando fotovoltaica, aerotermia, ACS o suelo radiante.',
    cta: { label: 'Calcular vivienda', tipo: 'vivienda' },
  },
  {
    num: '02 — Negocio',
    title: 'Empresa',
    desc: 'Optimiza el consumo de tu nave, local, hotel, oficina o comunidad con una solución energética rentable.',
    cta: { label: 'Calcular empresa', tipo: 'empresa' },
  },
  {
    num: '03 — B2B',
    title: 'Instalador / Partner',
    desc: 'Escala proyectos con soporte técnico, leads cualificados, automatización y acompañamiento especializado.',
    cta: { label: 'Ser partner', href: '#partners' },
  },
]

export default function WhoFor() {
  return (
    <section id="para-quien" className="relative" style={{ paddingBlock: 'var(--section-y, 140px)' }}>
      <div className="container-x">
        <SectionHead
          num="01 — Identificación"
          eyebrow="Empieza por aquí"
          title={<>¿Qué <em>necesitas?</em></>}
          lead="Cada caso requiere una conversación distinta. Identifícate y la web te lleva al camino correcto desde el primer clic."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CASES.map((c, i) => (
            <Choice key={c.title} {...c} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Choice({ num, title, desc, cta, delay }) {
  const handleClick = (e) => {
    if (cta.tipo) {
      e.preventDefault()
      window.dispatchEvent(new CustomEvent('open-calculator', { detail: { tipo: cta.tipo } }))
    }
  }
  return (
    <article
      className="reveal card-elevate group relative flex flex-col justify-between gap-8 p-8 rounded-[18px] overflow-hidden"
      data-delay={delay}
      style={{
        minHeight: '320px',
        background: 'rgba(255, 255, 255, 0.88)',
        border: '1px solid rgba(21, 17, 11, 0.10)',
        backdropFilter: 'blur(14px)',
      }}
    >
      <div>
        <div
          className="font-serif italic text-gold-deep text-[0.95rem]"
          style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 100" }}
        >
          {num}
        </div>
        <h3 className="mt-3.5 mb-3">{title}</h3>
        <p className="text-[0.96rem]">{desc}</p>
      </div>
      <a
        href={cta.href || '#calculadora'}
        onClick={handleClick}
        className="inline-flex items-center gap-2 font-semibold text-[0.92rem] text-ink"
      >
        {cta.label}
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </a>
    </article>
  )
}
