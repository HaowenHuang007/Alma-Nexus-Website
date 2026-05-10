import SectionHead from './SectionHead'

/**
 * Mapa SVG de España con puntos pulsando en las ciudades donde hay proyectos.
 */
const PROJECTS = [
  { name: 'Madrid',     x: 480, y: 320, count: 184, delay: 0 },
  { name: 'Barcelona',  x: 815, y: 268, count: 156, delay: 0.5 },
  { name: 'Valencia',   x: 700, y: 405, count: 132, delay: 1.0 },
  { name: 'Sevilla',    x: 335, y: 488, count: 98,  delay: 1.5 },
  { name: 'Bilbao',     x: 555, y: 145, count: 87,  delay: 2.0 },
  { name: 'Zaragoza',   x: 645, y: 245, count: 74,  delay: 2.5 },
  { name: 'Málaga',     x: 420, y: 525, count: 68,  delay: 3.0 },
  { name: 'A Coruña',   x: 215, y: 130, count: 52,  delay: 3.5 },
  { name: 'Murcia',     x: 615, y: 460, count: 48,  delay: 4.0 },
  { name: 'Granada',    x: 490, y: 510, count: 42,  delay: 4.5 },
]

const MAINLAND = `
  M 145 105
  Q 175 88 260 82
  Q 355 80 440 88
  Q 535 100 615 118
  Q 685 138 720 175
  L 755 210
  Q 805 240 855 268
  L 870 290
  Q 858 325 825 355
  Q 790 388 750 415
  Q 705 445 655 472
  Q 600 498 540 520
  Q 460 542 380 552
  Q 305 558 255 545
  Q 220 530 205 505
  Q 195 478 198 430
  Q 200 372 215 305
  Q 230 245 218 195
  Q 195 150 165 122
  Q 145 105 145 105 Z
`

const BALEARES = `
  M 905 322
  Q 925 318 942 326
  Q 950 334 942 344
  Q 925 348 905 342
  Q 898 332 905 322 Z
  M 968 305
  Q 980 302 988 308
  Q 992 316 985 322
  Q 974 324 965 318
  Q 962 310 968 305 Z
`

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
                <stop offset="0%"  stopColor="rgba(217,164,65,0.20)" />
                <stop offset="100%" stopColor="rgba(217,164,65,0.08)" />
              </linearGradient>
              <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%"  stopColor="rgba(217,164,65,0.6)" />
                <stop offset="100%" stopColor="rgba(217,164,65,0)" />
              </radialGradient>
            </defs>

            <path
              d={MAINLAND}
              fill="url(#mapFill)"
              stroke="rgba(168, 118, 20, 0.55)"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d={BALEARES}
              fill="url(#mapFill)"
              stroke="rgba(168, 118, 20, 0.55)"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />

            {PROJECTS.map((p) => (
              <g key={p.name}>
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
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="4"
                  fill="#D9A441"
                  style={{ filter: 'drop-shadow(0 0 6px rgba(217,164,65,0.7))' }}
                />
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
