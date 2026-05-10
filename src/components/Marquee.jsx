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
        background: 'linear-gradient(180deg, transparent, rgba(217,164,65,0.04))',
        paddingBlock: '22px',
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
            <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" style={{ boxShadow: '0 0 8px rgba(217,164,65,0.55)' }} />
          </span>
        ))}
      </div>
    </div>
  )
}
