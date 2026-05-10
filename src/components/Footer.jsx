const COL_NAV = [
  { title: 'Servicios', items: [
    { href: '#soluciones', label: 'Fotovoltaica' },
    { href: '#soluciones', label: 'Aerotermia' },
    { href: '#soluciones', label: 'Suelo radiante' },
    { href: '#soluciones', label: 'Geotermia' },
  ]},
  { title: 'Empresa', items: [
    { href: '#diferenciacion', label: 'Sobre nosotros' },
    { href: '#proceso', label: 'Proceso' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#partners', label: 'Partners' },
  ]},
  { title: 'Contacto', items: [
    { href: 'mailto:hola@almanexus.es', label: 'hola@almanexus.es' },
    { href: 'tel:+34900000000', label: '+34 900 00 00 00' },
    { href: '#calculadora', label: 'Solicitar presupuesto' },
  ]},
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer
      className="relative"
      style={{
        paddingTop: 'clamp(64px, 8vw, 96px)',
        paddingBottom: '32px',
        borderTop: '1px solid rgba(21,17,11,0.10)',
        background: 'linear-gradient(180deg, transparent 0%, rgba(244, 236, 218, 0.5) 100%)',
      }}
    >
      <div className="container-x">
        <div
          className="grid gap-12 mb-16"
          style={{ gridTemplateColumns: 'minmax(0, 1.4fr) repeat(3, minmax(0, 1fr))' }}
        >
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-6 max-w-[36ch] text-[0.92rem] text-muted leading-relaxed">
              Sistemas energéticos completos: producción, climatización, ACS, automatización
              y soporte técnico bajo un único responsable.
            </p>
            <div className="mt-7 flex gap-2.5">
              {['LinkedIn', 'Instagram', 'YouTube'].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-10 h-10 grid place-items-center rounded-full transition-all hover:-translate-y-0.5"
                  style={{
                    border: '1px solid rgba(21,17,11,0.12)',
                    background: 'rgba(255,255,255,0.6)',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    color: '#A87614',
                  }}
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Columnas nav */}
          {COL_NAV.map((col) => (
            <div key={col.title}>
              <div
                className="font-serif italic text-gold-deep mb-5"
                style={{ fontSize: '0.95rem', fontVariationSettings: "'opsz' 36, 'SOFT' 100" }}
              >
                {col.title}
              </div>
              <ul className="flex flex-col gap-2.5 list-none p-0">
                {col.items.map((it) => (
                  <li key={it.label}>
                    <a
                      href={it.href}
                      className="text-[0.9rem] text-ink-soft hover:text-gold-deep transition-colors"
                    >
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Línea dorada separadora */}
        <div
          className="h-px mb-7"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(217,164,65,0.4), transparent)' }}
        />

        <div className="flex justify-between gap-4 flex-wrap text-[0.82rem] text-muted">
          <span>© {year} Alma Nexus. Todos los derechos reservados.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink transition-colors">Aviso legal</a>
            <a href="#" className="hover:text-ink transition-colors">Privacidad</a>
            <a href="#" className="hover:text-ink transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function Logo() {
  return (
    <div
      className="inline-flex items-center gap-3 font-serif tracking-tight"
      style={{ color: '#15110B' }}
    >
      <span className="relative inline-block w-10 h-10 flex-shrink-0">
        <span
          className="absolute inset-[7px] rounded-full"
          style={{
            background: 'radial-gradient(circle, #D9A441 0 60%, #A87614 100%)',
            boxShadow: '0 0 14px rgba(217,164,65,0.55)',
          }}
        />
        <span
          className="absolute inset-0"
          style={{
            background: 'repeating-conic-gradient(from 0deg, transparent 0deg 18deg, #D9A441 18deg 22deg, transparent 22deg 36deg)',
            mask: 'radial-gradient(circle, transparent 0 50%, #000 51% 100%)',
            WebkitMask: 'radial-gradient(circle, transparent 0 50%, #000 51% 100%)',
          }}
        />
      </span>
      <span className="flex flex-col leading-none">
        <span style={{ fontSize: '1.25rem', fontWeight: 600, letterSpacing: '0.18em' }}>ALMA</span>
        <span style={{ fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.32em', color: '#A87614' }}>NEXUS</span>
      </span>
    </div>
  )
}
