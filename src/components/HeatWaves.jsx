import { useMemo } from 'react'

/**
 * Ondas térmicas con luz de sol — finas, elegantes, con
 * gradiente de sol arriba y chispas brillantes flotando.
 */
function generateWave(amp, freq, height, offsetX, phase = 0) {
  let path = `M ${(offsetX + amp * Math.sin(phase)).toFixed(1)} 0`
  for (let y = 4; y <= height; y += 4) {
    const x = offsetX + amp * Math.sin(y * freq + phase)
    path += ` L ${x.toFixed(1)} ${y}`
  }
  return path
}

const HEIGHT = 2400
const STRIP_W = 80

const WAVES = [
  { amp: 6,  freq: 0.024, offsetX: 18, opacity: 0.55, duration: 16, width: 1.0 },
  { amp: 9,  freq: 0.018, offsetX: 38, opacity: 0.40, duration: 22, width: 0.9 },
  { amp: 5,  freq: 0.030, offsetX: 58, opacity: 0.60, duration: 13, width: 1.2 },
]

const SPARKS = [
  { offsetX: 22, delay: 0,   duration: 8 },
  { offsetX: 42, delay: 2.5, duration: 10 },
  { offsetX: 62, delay: 5,   duration: 7 },
  { offsetX: 30, delay: 7,   duration: 9 },
]

export default function HeatWaves() {
  const paths = useMemo(
    () => WAVES.map((w, i) => generateWave(w.amp, w.freq, HEIGHT, w.offsetX, i * 0.7)),
    [],
  )
  return (
    <>
      <Strip side="left"  paths={paths} />
      <Strip side="right" paths={paths} />
    </>
  )
}

function Strip({ side, paths }) {
  const gradId = `wgrad-${side}`
  return (
    <div
      className="fixed top-0 bottom-0 pointer-events-none overflow-hidden"
      style={{
        width: `${STRIP_W}px`,
        [side]: 0,
        zIndex: 0,
        transform: side === 'right' ? 'scaleX(-1)' : 'none',
        maskImage: 'linear-gradient(180deg, transparent 0, black 8%, black 92%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(180deg, transparent 0, black 8%, black 92%, transparent 100%)',
      }}
      aria-hidden="true"
    >
      {/* Halo de luz solar arriba */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: '40%',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(255,230,160,0.45) 0%, rgba(217,164,65,0.22) 30%, transparent 70%)',
        }}
      />

      <svg
        viewBox={`0 0 ${STRIP_W} ${HEIGHT / 2}`}
        preserveAspectRatio="none"
        className="absolute left-0 w-full"
        style={{ height: '200%', top: 0 }}
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="rgba(255,230,160,1)" />
            <stop offset="40%"  stopColor="rgba(255,210,120,1)" />
            <stop offset="70%"  stopColor="rgba(217,164,65,1)" />
            <stop offset="100%" stopColor="rgba(168,118,20,0.6)" />
          </linearGradient>
        </defs>

        {paths.map((d, i) => {
          const w = WAVES[i]
          return (
            <path
              key={i}
              d={d}
              stroke={`url(#${gradId})`}
              strokeWidth={w.width}
              fill="none"
              opacity={w.opacity}
              strokeLinecap="round"
              style={{
                filter: 'drop-shadow(0 0 4px rgba(255,220,140,0.7))',
                animation: `heatRise ${w.duration}s linear infinite`,
              }}
            />
          )
        })}

        {/* Chispas de sol subiendo */}
        {SPARKS.map((s, i) => (
          <circle
            key={`spark-${i}`}
            cx={s.offsetX}
            cy={HEIGHT / 2}
            r="1.6"
            fill="#fff"
            style={{
              filter: 'drop-shadow(0 0 4px rgba(255,230,160,1)) drop-shadow(0 0 9px rgba(217,164,65,0.7))',
              animation: `sparkRise ${s.duration}s linear ${s.delay}s infinite`,
            }}
          />
        ))}
      </svg>
    </div>
  )
}
