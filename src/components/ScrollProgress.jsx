import { useEffect, useState } from 'react'

/**
 * Barra fina dorada en el tope que avanza con el scroll.
 */
export default function ScrollProgress() {
  const [p, setP] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = Math.max(1, document.body.scrollHeight - window.innerHeight)
      setP(Math.min(1, window.scrollY / max))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 pointer-events-none"
      style={{ height: '2px', zIndex: 60 }}
      aria-hidden="true"
    >
      <div
        className="h-full"
        style={{
          width: `${p * 100}%`,
          background: 'linear-gradient(90deg, #D9A441 0%, #F4D177 50%, #D9A441 100%)',
          boxShadow: '0 0 10px rgba(217,164,65,0.6)',
          transition: 'width 0.1s linear',
        }}
      />
    </div>
  )
}
