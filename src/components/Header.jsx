import { useState, useEffect } from 'react'

const NAV = [
  { href: '#top', label: 'Inicio' },
  { href: '#soluciones', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#diferenciacion', label: 'Sobre nosotros' },
  { href: '#partners', label: 'Contacto' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        background: scrolled ? 'rgba(251,247,238,0.92)' : 'rgba(251,247,238,0.72)',
        borderBottom: scrolled ? '1px solid rgba(21,17,11,0.10)' : '1px solid transparent',
      }}
    >
      <div className="container-x flex items-center justify-between" style={{ paddingBlock: '18px' }}>
        <Logo />

        <nav className="hidden md:flex items-center gap-7" aria-label="Principal">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-[0.92rem] font-medium text-ink-soft hover:text-ink transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="hidden md:inline-flex btn btn-gold btn-small"
          onClick={() => window.dispatchEvent(new Event('open-calculator'))}
        >
          Solicitar presupuesto
        </button>

        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen(!open)}
        >
          <span className="block h-[1.5px] bg-ink transition-all duration-200 origin-center" style={{ transform: open ? 'translateY(6.5px) rotate(45deg)' : '' }} />
          <span className="block h-[1.5px] bg-ink transition-all duration-200" style={{ opacity: open ? 0 : 1 }} />
          <span className="block h-[1.5px] bg-ink transition-all duration-200 origin-center" style={{ transform: open ? 'translateY(-6.5px) rotate(-45deg)' : '' }} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line" style={{ background: 'rgba(251,247,238,0.97)', backdropFilter: 'blur(18px)' }}>
          <nav className="container-x flex flex-col py-4 gap-1" aria-label="Menú móvil">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="py-3 text-[0.95rem] font-medium text-ink-soft hover:text-ink border-b border-line transition-colors" onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
            <div className="pt-4 pb-2">
              <a className="btn btn-gold btn-small w-full justify-center" href="#calculadora" onClick={() => setOpen(false)}>
                Solicitar presupuesto
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

function Logo() {
  return (
    <a
      href="#top"
      className="inline-flex items-center gap-3 font-serif tracking-tight"
      style={{ textDecoration: 'none', color: '#15110B' }}
    >
      <span className="relative inline-block w-9 h-9 flex-shrink-0">
        <span
          className="absolute inset-[6px] rounded-full"
          style={{
            background: 'radial-gradient(circle, #D9A441 0 60%, #A87614 100%)',
            boxShadow: '0 0 12px rgba(217,164,65,0.55)',
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
        <span style={{ fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.18em' }}>ALMA</span>
        <span style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.32em', color: '#A87614' }}>NEXUS</span>
      </span>
    </a>
  )
}
