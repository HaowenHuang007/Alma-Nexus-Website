/**
 * Marquee dorado con valores rotando.
 * Doble track para loop infinito sin saltos.
 */
const VALUES = [
  'Energía sostenible',
  'Tecnología avanzada',
  'Soporte 24/7',
  'Sistemas integrados',
  'Eficiencia real',
  'Sin instaladores sueltos',
  'Retorno garantizado',
  'Compromiso con el planeta',
]

export default function Marquee() {
  return (
    <div
      className="relative overflow-hidden border-y"
      style={{
        borderColor: 'rgba(217, 164, 65, 0.22)',
        background: 'linear-gradient(180deg, #FBF7EE, #F4ECDA)',
        paddingBlock: '26px',
      }}
      aria-hidden="true"
    >
      <div className="flex gap-12 whitespace-nowrap" style={{ animation: 'marqueeScroll 40s linear infinite' }}>
        {[...VALUES, ...VALUES, ...VALUES].map((v, i) => (
          <span key={i} className="flex items-center gap-12">
            <span
              className="font-serif italic text-gold-deep"
              style={{ fontSize: '1.5rem', letterSpacing: '-0.02em', fontVariationSettings: "'opsz' 36, 'SOFT' 100" }}
            >
              {v}
            </span>
            <Star />
          </span>
        ))}
      </div>
    </div>
  )
}

function Star() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="#D9A441" aria-hidden="true" style={{ flexShrink: 0, filter: 'drop-shadow(0 0 6px rgba(217,164,65,0.55))' }}>
      <path d="M12 2l2.4 6.6L21 10l-5.5 4 2 7-5.5-4-5.5 4 2-7L3 10l6.6-1.4z" />
    </svg>
  )
}
