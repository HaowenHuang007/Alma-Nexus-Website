import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [p, setP] = useState(0)

  useEffect(() => {
    let raf = null
    const update = () => {
      const max = Math.max(1, document.body.scrollHeight - window.innerHeight)
      setP(Math.min(1, window.scrollY / max))
      raf = null
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
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
        }}
      />
    </div>
  )
}
