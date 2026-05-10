import { useState } from 'react'

const ITEMS = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/34900000000',
    bg: '#25D366',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M20.52 3.48A11.93 11.93 0 0 0 12.04 0C5.46 0 .12 5.34.1 11.92c0 2.1.55 4.16 1.6 5.97L0 24l6.27-1.65a11.96 11.96 0 0 0 5.77 1.47h.01c6.58 0 11.92-5.34 11.94-11.92 0-3.18-1.24-6.18-3.48-8.42zM12.05 21.8h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.97 1-3.62-.24-.38a9.91 9.91 0 1 1 18.4-5.27c0 5.46-4.45 9.9-9.92 9.9zm5.43-7.42c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47a8.97 8.97 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01a1.1 1.1 0 0 0-.8.37c-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.11 3.22 5.11 4.51.71.31 1.27.49 1.71.63.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:hola@almanexus.es',
    bg: '#15110B',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 7 9-7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Teléfono',
    href: 'tel:+34900000000',
    bg: '#A87614',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.4.6 3.5.1.4 0 .8-.2 1l-2.3 2.3z"/>
      </svg>
    ),
  },
]

export default function FloatingContacts() {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="fixed left-6 bottom-7 flex flex-col-reverse items-start gap-2.5"
      style={{ zIndex: 45 }}
    >
      {/* Items expandidos */}
      {ITEMS.map((it, i) => (
        <a
          key={it.label}
          href={it.href}
          target={it.href.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          aria-label={it.label}
          className="flex items-center gap-2 group"
          style={{
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.85)',
            pointerEvents: open ? 'auto' : 'none',
            transition: `opacity 0.3s ease ${(ITEMS.length - i) * 0.05}s, transform 0.3s cubic-bezier(0.2,0.7,0.3,1) ${(ITEMS.length - i) * 0.05}s`,
          }}
        >
          <span
            className="w-11 h-11 rounded-full grid place-items-center text-white shadow-md-soft"
            style={{ background: it.bg, boxShadow: '0 8px 22px rgba(21,17,11,0.18)' }}
          >
            {it.icon}
          </span>
          <span
            className="text-[0.82rem] font-semibold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ background: 'rgba(251,247,238,0.96)', backdropFilter: 'blur(8px)', border: '1px solid rgba(21,17,11,0.10)' }}
          >
            {it.label}
          </span>
        </a>
      ))}

      {/* Botón principal */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Cerrar contactos' : 'Abrir contactos'}
        className="w-14 h-14 rounded-full grid place-items-center text-white transition-all"
        style={{
          background: 'linear-gradient(135deg, #D9A441, #A87614)',
          boxShadow: '0 14px 32px rgba(217,164,65,0.45)',
          transform: open ? 'rotate(45deg)' : 'rotate(0)',
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          {open ? (
            <path d="M5 5l14 14M19 5l-14 14" strokeLinecap="round" />
          ) : (
            <>
              <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" strokeLinecap="round" strokeLinejoin="round" />
            </>
          )}
        </svg>
      </button>
    </div>
  )
}
