import { useMemo } from 'react'

/**
 * Ondas térmicas finas y elegantes en los laterales.
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
  { amp: 6,  freq: 0.024, offsetX: 18, opacity: 0.45, duration: 16, width: 1.0 },
  { amp: 9,  freq: 0.018, offsetX: 38, opacity: 0.32, duration: 22, width: 0.9 },
  { amp: 5,  freq: 0.030, offsetX: 58, opacity: 0.50, duration: 13, width: 1.2 },
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
      <svg
        viewBox={`0 0 ${STRIP_W} ${HEIGHT / 2}`}
        preserveAspectRatio="none"
        className="absolute left-0 w-full"
        style={{ height: '200%', top: 0, animation: 'heatRise 22s linear infinite' }}
      >
        {paths.map((d, i) => {
          const w = WAVES[i]
          return (
            <path
              key={i}
              d={d}
              stroke="#D9A441"
              strokeWidth={w.width}
              fill="none"
              opacity={w.opacity}
              strokeLinecap="round"
              style={{
                filter: 'drop-shadow(0 0 3px rgba(217,164,65,0.5))',
                animation: `heatRise ${w.duration}s linear infinite`,
              }}
            />
          )
        })}
      </svg>
    </div>
  )
}
