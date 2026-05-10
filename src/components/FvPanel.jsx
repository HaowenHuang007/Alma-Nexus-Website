import { forwardRef, useEffect, useState } from 'react'
import panelImg from '../assets/panel.jpg'

/**
 * Panel fotovoltaico — fotografía real de paneles al atardecer.
 * Crece desde abajo según el scroll y recibe los rayos del sol.
 */
const FvPanel = forwardRef(function FvPanel(_, ref) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight
      const y = window.scrollY
      let p
      if (y < vh) p = y / vh
      else if (y < vh * 1.2) p = 1
      else if (y < vh * 1.6) p = 1 - (y - vh * 1.2) / (vh * 0.4)
      else p = 0
      setProgress(Math.max(0, Math.min(1, p)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const heightVh = progress * 55
  const opacity = progress < 0.05 ? 0 : progress

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: 0,
        right: 0,
        bottom: 0,
        height: `${heightVh}vh`,
        opacity,
        transition: 'opacity 0.3s ease',
        zIndex: 2,
      }}
      aria-hidden="true"
    >
      <div
        ref={ref}
        className="relative w-full h-full overflow-hidden"
        style={{
          backgroundImage: `url(${panelImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          boxShadow: '0 -40px 80px rgba(10,16,20,0.40)',
          transition: 'filter 0.6s ease',
        }}
      >
        {/* Líneas eléctricas azul (overlay sutil sobre la foto) */}
        <div
          className="panel-electric absolute inset-0 transition-opacity duration-500"
          style={{
            background: `
              repeating-linear-gradient(118deg, transparent 0 60px, rgba(14,168,255,0.5) 60px 61px, transparent 61px 122px),
              repeating-linear-gradient(28deg, transparent 0 80px, rgba(14,168,255,0.3) 80px 81px, transparent 81px 160px)
            `,
            opacity: 0.18,
            mixBlendMode: 'screen',
          }}
        />
        {/* Punto de impacto */}
        <span
          className="impact-point absolute w-3.5 h-3.5 rounded-full bg-white opacity-0"
          style={{ top: '20%', right: '30%', boxShadow: '0 0 0 2px rgba(255,255,255,0.4), 0 0 32px rgba(217,164,65,0.55)' }}
        />
        <span
          className="ripple absolute rounded-full opacity-0 pointer-events-none"
          style={{ top: '20%', right: '30%', width: '14px', height: '14px', border: '2px solid rgba(14,168,255,0.7)', transform: 'translate(50%, -50%)' }}
        />
      </div>
    </div>
  )
})

export default FvPanel
