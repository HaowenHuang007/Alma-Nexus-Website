import { useEffect, useRef, useState } from 'react'

/**
 * Anima un número desde 0 hasta `target` cuando el elemento entra en viewport.
 * decimals: número de decimales a mostrar.
 */
export function useCountUp(target, { duration = 1400, decimals = 0 } = {}) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!ref.current) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true
            const t0 = performance.now()
            const tick = (t) => {
              const p = Math.min(1, (t - t0) / duration)
              const eased = 1 - Math.pow(1 - p, 3)
              setValue(target * eased)
              if (p < 1) requestAnimationFrame(tick)
              else setValue(target)
            }
            requestAnimationFrame(tick)
            io.disconnect()
          }
        })
      },
      { threshold: 0.4 },
    )
    io.observe(ref.current)
    return () => io.disconnect()
  }, [target, duration])

  return [ref, value.toFixed(decimals)]
}
