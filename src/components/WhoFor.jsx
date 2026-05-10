import SectionHead from './SectionHead'

const ICONS = {
  vivienda: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 18l15-12 15 12" />
      <path d="M9 16v17h22V16" />
      <path d="M16 33v-9h8v9" />
      <circle cx="27" cy="22" r="1.5" fill="currentColor" />
    </svg>
  ),
  empresa: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 35V13l10-6 10 6v22" />
      <path d="M25 35V19h10v16" />
      <path d="M5 35h30" />
      <path d="M11 17h2M11 22h2M11 27h2M17 17h2M17 22h2M17 27h2M28 24h4M28 29h4" />
    </svg>
  ),
  partner: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="14" cy="14" r="6" />
      <circle cx="28" cy="16" r="5" />
      <path d="M3 33c1-6 5-9 11-9s10 3 11 9" />
      <path d="M22 33c0-4 3-8 8-8s7 3 7 7" />
    </svg>
  ),
}

const CASES = [
  {
    id: 'vivienda',
    num: '01 — Particular',
    title: 'Vivienda',
    desc: 'Reduce tu factura y mejora el confort combinando fotovoltaica, aerotermia, ACS o suelo radiante.',
    cta: { label: 'Calcular vivienda', tipo: 'vivienda' },
  },
  {
    id: 'empresa',
    num: '02 — Negocio',
    title: 'Empresa',
    desc: 'Optimiza el consumo de tu nave, local, hotel, oficina o comunidad con una solución energética rentable.',
    cta: { label: 'Calcular empresa', tipo: 'empresa' },
  },
  {
    id: 'partner',
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

function Choice({ id, num, title, desc, cta, delay }) {
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
        minHeight: '340px',
        background: 'rgba(255, 255, 255, 0.88)',
        border: '1px solid rgba(21, 17, 11, 0.10)',
        backdropFilter: 'blur(14px)',
      }}
    >
      <div>
        <div
          className="w-14 h-14 rounded-[14px] grid place-items-center text-gold-deep mb-6 transition-all group-hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, rgba(217,164,65,0.16), rgba(217,164,65,0.04))',
            border: '1px solid rgba(217,164,65,0.32)',
          }}
        >
          {ICONS[id]}
        </div>
        <div
          className="font-serif italic text-gold-deep text-[0.92rem]"
          style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 100" }}
        >
          {num}
        </div>
        <h3 className="mt-2.5 mb-3">{title}</h3>
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
