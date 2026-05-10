import SectionHead from './SectionHead'

/**
 * Mapa SVG de España con puntos pulsando en las ciudades donde hay proyectos.
 * Coordenadas aproximadas en el viewBox 0-1000 / 0-700.
 */
const PROJECTS = [
  { name: 'Madrid',     x: 480, y: 340, count: 184, delay: 0 },
  { name: 'Barcelona',  x: 800, y: 270, count: 156, delay: 0.5 },
  { name: 'Valencia',   x: 660, y: 410, count: 132, delay: 1.0 },
  { name: 'Sevilla',    x: 320, y: 510, count: 98,  delay: 1.5 },
  { name: 'Bilbao',     x: 530, y: 150, count: 87,  delay: 2.0 },
  { name: 'Zaragoza',   x: 620, y: 280, count: 74,  delay: 2.5 },
  { name: 'Málaga',     x: 410, y: 560, count: 68,  delay: 3.0 },
  { name: 'A Coruña',   x: 200, y: 110, count: 52,  delay: 3.5 },
  { name: 'Murcia',     x: 600, y: 490, count: 48,  delay: 4.0 },
  { name: 'Granada',    x: 470, y: 540, count: 42,  delay: 4.5 },
]

// Path muy simplificado de la silueta de la península + Baleares
const MAINLAND = 'M120,150 Q140,90 220,90 L350,80 Q420,75 470,100 L580,90 Q700,80 780,110 L860,150 Q900,200 880,260 L890,330 Q880,420 820,470 L760,520 Q680,560 600,560 L500,580 Q400,590 320,580 L240,560 Q170,540 130,490 L100,420 Q80,330 90,260 Q95,200 120,150 Z'
const BALEARES = 'M880,360 Q900,355 920,365 Q930,375 920,385 Q900,390 880,380 Q872,370 880,360 Z'

export default function SpainMap() {
  return (
    <section className="relative" style={{ paddingBlock: 'var(--section-y, 140px)' }}>
      <div className="container-x">
        <SectionHead
          num="09 — Cobertura"
          eyebrow="Donde estamos"
          title={<>+ <em>1.200</em> proyectos<br />en toda España.</>}
          lead="Trabajamos con clientes en todas las provincias. Esta es una muestra de las ciudades con mayor concentración de instalaciones."
        />

        <div
          className="reveal relative mx-auto rounded-[22px] overflow-hidden"
          style={{
            maxWidth: '1080px',
            background: 'linear-gradient(135deg, rgba(244,236,218,0.5), rgba(255,255,255,0.85))',
            border: '1px solid rgba(217,164,65,0.20)',
            padding: 'clamp(24px, 4vw, 56px)',
          }}
        >
          <svg viewBox="0 0 1000 700" className="w-full h-auto">
            <defs>
              <linearGradient id="mapFill" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"  stopColor="rgba(217,164,65,0.10)" />
                <stop offset="100%" stopColor="rgba(217,164,65,0.04)" />
              </linearGradient>
              <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%"  stopColor="rgba(217,164,65,0.6)" />
                <stop offset="100%" stopColor="rgba(217,164,65,0)" />
              </radialGradient>
            </defs>

            {/* Silueta */}
            <path
              d={MAINLAND}
              fill="url(#mapFill)"
              stroke="rgba(217,164,65,0.40)"
              strokeWidth="1.5"
              strokeDasharray="3 4"
            />
            <path
              d={BALEARES}
              fill="url(#mapFill)"
              stroke="rgba(217,164,65,0.40)"
              strokeWidth="1.5"
              strokeDasharray="3 4"
            />

            {/* Puntos */}
            {PROJECTS.map((p) => (
              <g key={p.name}>
                {/* Halo pulsante */}
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="6"
                  fill="url(#dotGlow)"
                  style={{
                    transformOrigin: `${p.x}px ${p.y}px`,
                    animation: `mapPulse 3s ease-out infinite`,
                    animationDelay: `${p.delay}s`,
                  }}
                />
                {/* Punto sólido */}
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="4"
                  fill="#D9A441"
                  style={{
                    filter: 'drop-shadow(0 0 6px rgba(217,164,65,0.7))',
                  }}
                />
                {/* Etiqueta */}
                <text
                  x={p.x + 12}
                  y={p.y + 4}
                  fill="#15110B"
                  fontSize="14"
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                  fontWeight="600"
                  style={{ letterSpacing: '0.02em' }}
                >
                  {p.name}
                </text>
                <text
                  x={p.x + 12}
                  y={p.y + 22}
                  fill="#A87614"
                  fontSize="11"
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                  fontWeight="500"
                  fontStyle="italic"
                >
                  {p.count} proyectos
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  )
}
