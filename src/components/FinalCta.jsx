/**
 * CTA final (spec §3.11): repetición del acceso al bot + mensaje directo.
 */
export default function FinalCta() {
  return (
    <section className="relative" style={{ paddingBlock: 'clamp(80px, 10vw, 120px)' }}>
      <div className="container-x">
        <div
          className="reveal relative max-w-[980px] mx-auto text-center overflow-hidden"
          style={{
            padding: 'clamp(48px, 7vw, 96px)',
            borderRadius: '28px',
            color: '#FCFCFA',
            background: `
              radial-gradient(circle at 80% 20%, rgba(217, 164, 65, 0.32), transparent 45%),
              radial-gradient(circle at 20% 80%, rgba(14, 168, 255, 0.16), transparent 50%),
              linear-gradient(135deg, #0A1014 0%, #131A1F 100%)
            `,
            boxShadow: '0 60px 120px rgba(10, 16, 20, 0.32)',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'repeating-linear-gradient(118deg, transparent 0 60px, rgba(255, 255, 255, 0.04) 60px 61px, transparent 61px 122px)',
            }}
            aria-hidden="true"
          />
          <span className="eyebrow" style={{ color: '#F4E0AB' }}>
            Sin compromiso · Resultado inmediato
          </span>
          <h2
            className="mt-6 mb-6 mx-auto"
            style={{ color: '#FCFCFA', maxWidth: '18ch' }}
          >
            Calcula tu instalación y descubre <em style={{ color: '#F4E0AB' }}>tu ahorro real.</em>
          </h2>
          <p
            className="mx-auto mb-9 text-[1.1rem]"
            style={{ maxWidth: '56ch', color: 'rgba(252, 252, 250, 0.78)' }}
          >
            Un único punto de entrada para cualificar, presupuestar y avanzar hacia
            una solución energética completa, sin compromiso.
          </p>
          <button
            type="button"
            className="btn btn-gold"
            onClick={() => window.dispatchEvent(new Event('open-calculator'))}
          >
            Abrir calculadora
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-3.5 h-3.5"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M13 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
