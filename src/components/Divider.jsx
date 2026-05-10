/**
 * Separador elegante entre grupos de secciones.
 * Ornamento dorado central con líneas degradadas a los lados.
 */
export default function Divider() {
  return (
    <div
      className="container-x flex items-center justify-center gap-5"
      style={{ paddingBlock: 'clamp(40px, 5vw, 64px)' }}
      aria-hidden="true"
    >
      <span
        className="flex-1 h-px max-w-[200px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(217,164,65,0.5))' }}
      />
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D9A441" strokeWidth="1.4" style={{ filter: 'drop-shadow(0 0 8px rgba(217,164,65,0.5))' }}>
        <circle cx="12" cy="12" r="3" fill="#D9A441" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3" strokeLinecap="round" />
      </svg>
      <span
        className="flex-1 h-px max-w-[200px]"
        style={{ background: 'linear-gradient(90deg, rgba(217,164,65,0.5), transparent)' }}
      />
    </div>
  )
}
