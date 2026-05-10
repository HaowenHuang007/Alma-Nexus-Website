import { useMemo } from 'react'

/**
 * Decoración ambiental del fondo: partículas doradas flotando,
 * orbes difuminados y micro-estrellas titilando.
 */
const PARTICLE_COUNT = 10
const STAR_COUNT = 6

export default function BackgroundDecor() {
  const particles = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: 60 + Math.random() * 60,        // empiezan abajo y suben
      size: 2 + Math.random() * 3,
      duration: 14 + Math.random() * 18,
      delay: Math.random() * 14,
      drift: (Math.random() - 0.5) * 60,    // desplazamiento horizontal
      opacity: 0.4 + Math.random() * 0.5,
    }))
  }, [])

  const stars = useMemo(() => {
    return Array.from({ length: STAR_COUNT }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 1.5 + Math.random() * 1.5,
      duration: 2.5 + Math.random() * 3,
      delay: Math.random() * 5,
    }))
  }, [])

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Orbes ambientales — luz difusa */}
      <div
        className="absolute"
        style={{
          top: '30%',
          left: '8%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(217,164,65,0.18), rgba(217,164,65,0.06) 40%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'orbDrift 18s ease-in-out infinite',
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: '15%',
          right: '5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(244,209,119,0.14), rgba(217,164,65,0.04) 45%, transparent 70%)',
          filter: 'blur(50px)',
          animation: 'orbDrift 22s ease-in-out infinite reverse',
        }}
      />
      <div
        className="absolute"
        style={{
          top: '60%',
          left: '40%',
          width: '380px',
          height: '380px',
          background: 'radial-gradient(circle, rgba(217,164,65,0.10), transparent 65%)',
          filter: 'blur(50px)',
          animation: 'orbDrift 26s ease-in-out infinite',
        }}
      />

      {/* Partículas doradas (polvo solar) */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: '#D9A441',
            boxShadow: '0 0 8px rgba(217,164,65,0.6)',
            opacity: 0,
            '--drift': `${p.drift}px`,
            animation: `particleFloat ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* Micro-estrellas titilando */}
      {stars.map((s) => (
        <span
          key={`s-${s.id}`}
          className="absolute"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: '#fff',
            borderRadius: '50%',
            boxShadow: '0 0 4px rgba(255,255,255,0.8), 0 0 8px rgba(255,230,160,0.6)',
            opacity: 0,
            animation: `starTwinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
