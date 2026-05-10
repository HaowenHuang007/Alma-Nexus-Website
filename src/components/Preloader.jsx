import { useEffect, useState } from 'react'

/**
 * Pantalla de bienvenida con sol pulsante + logotipo.
 * Se desvanece tras la primera carga (~1.6s).
 */
export default function Preloader() {
  const [hidden, setHidden] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setHidden(true), 1600)
    const t2 = setTimeout(() => setGone(true), 2400)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (gone) return null

  return (
    <div
      className="fixed inset-0 grid place-items-center"
      style={{
        zIndex: 200,
        background: '#FBF7EE',
        opacity: hidden ? 0 : 1,
        transform: hidden ? 'scale(1.05)' : 'scale(1)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
        pointerEvents: hidden ? 'none' : 'auto',
      }}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Sol que respira */}
        <div className="relative w-[120px] h-[120px]" style={{ animation: 'preloadSun 1.6s ease-out forwards' }}>
          <span
            className="absolute inset-[28px] rounded-full"
            style={{
              background: 'radial-gradient(circle, #D9A441 0 60%, #A87614 100%)',
              boxShadow: '0 0 40px rgba(217,164,65,0.7), 0 0 80px rgba(217,164,65,0.4)',
              animation: 'preloadCore 1.2s ease-in-out infinite',
            }}
          />
          <span
            className="absolute inset-0"
            style={{
              background:
                'repeating-conic-gradient(from 0deg, transparent 0deg 18deg, #D9A441 18deg 22deg, transparent 22deg 36deg)',
              mask: 'radial-gradient(circle, transparent 0 50%, #000 51% 100%)',
              WebkitMask: 'radial-gradient(circle, transparent 0 50%, #000 51% 100%)',
              animation: 'preloadSpin 8s linear infinite',
            }}
          />
        </div>

        {/* Logo */}
        <div
          className="text-center"
          style={{ animation: 'preloadFade 1s ease-out 0.4s forwards', opacity: 0 }}
        >
          <div
            className="font-serif"
            style={{ fontSize: '1.6rem', fontWeight: 600, letterSpacing: '0.22em', lineHeight: 1 }}
          >
            ALMA
          </div>
          <div
            style={{ fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.4em', color: '#A87614', marginTop: '6px' }}
          >
            NEXUS
          </div>
        </div>

        {/* Línea de carga */}
        <div className="w-[140px] h-[2px] rounded-full overflow-hidden" style={{ background: 'rgba(217,164,65,0.18)' }}>
          <div
            className="h-full"
            style={{
              background: 'linear-gradient(90deg, #D9A441, #F4D177)',
              animation: 'preloadBar 1.4s ease-out forwards',
              width: '0%',
            }}
          />
        </div>
      </div>
    </div>
  )
}
