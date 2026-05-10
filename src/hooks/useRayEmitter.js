import { useEffect } from 'react'

/**
 * Rayos curvos (path SVG con bezier) que emanan de las 16 puntas del sol.
 * Animación lenta y suave.
 */
export function useRayEmitter({ sunRef, panelRef, stageRef }) {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let cancelled = false
    let pendingTimeouts = []

    const pulseSun = () => {
      const sun = sunRef.current
      if (!sun) return
      sun.classList.remove('sun-pulse')
      void sun.offsetWidth
      sun.classList.add('sun-pulse')
    }

    const chargePanel = () => {
      const panel = panelRef.current
      if (!panel) return
      panel.classList.remove('panel-charged')
      void panel.offsetWidth
      panel.classList.add('panel-charged')
    }

    const SPIKES = []
    for (let i = 0; i < 8; i++) {
      SPIKES.push({ svgRot: i * 45, long: true })
      SPIKES.push({ svgRot: i * 45 + 22.5, long: false })
    }

    const SVG_NS = 'http://www.w3.org/2000/svg'

    const emitRay = () => {
      if (cancelled) return
      const sun = sunRef.current
      const stage = stageRef.current
      if (!sun || !stage) return

      const sunRect = sun.getBoundingClientRect()
      const sunCenterX = sunRect.left + sunRect.width / 2
      const sunCenterY = sunRect.top + sunRect.height / 2

      const spike = SPIKES[Math.floor(Math.random() * SPIKES.length)]
      const screenAngleDeg = spike.svgRot - 90 + (Math.random() * 6 - 3)
      const screenAngleRad = (screenAngleDeg * Math.PI) / 180

      const sizeFactor = sunRect.width / 880
      const tipDist = (spike.long ? 380 : 290) * sizeFactor

      const startX = sunCenterX + Math.cos(screenAngleRad) * tipDist
      const startY = sunCenterY + Math.sin(screenAngleRad) * tipDist

      // Longitud del rayo en píxeles (50-85vw)
      const length = (50 + Math.random() * 35) * window.innerWidth / 100
      const endX = startX + Math.cos(screenAngleRad) * length
      const endY = startY + Math.sin(screenAngleRad) * length

      // Punto de control para curva — perpendicular a la dirección
      const midX = (startX + endX) / 2
      const midY = (startY + endY) / 2
      const perpX = -Math.sin(screenAngleRad)
      const perpY = Math.cos(screenAngleRad)
      const curvature = (Math.random() - 0.5) * length * 0.28
      const ctrlX = midX + perpX * curvature
      const ctrlY = midY + perpY * curvature

      const d = `M ${startX} ${startY} Q ${ctrlX} ${ctrlY} ${endX} ${endY}`
      const baseW = 1.5 + Math.random() * 1.2

      // Halo brumoso (ancho, blureado)
      const halo = document.createElementNS(SVG_NS, 'path')
      halo.setAttribute('d', d)
      halo.setAttribute('class', 'ray-halo')
      halo.style.strokeWidth = `${baseW * 3.5}`
      stage.appendChild(halo)

      // Núcleo brillante (fino, blanco)
      const core = document.createElementNS(SVG_NS, 'path')
      core.setAttribute('d', d)
      core.setAttribute('class', 'ray-core')
      core.style.strokeWidth = `${baseW * 0.55}`
      stage.appendChild(core)

      pulseSun()

      const towardPanel = screenAngleDeg > 80 && screenAngleDeg < 230
      const t1 = towardPanel ? setTimeout(chargePanel, 2800) : null
      const t2 = setTimeout(() => { halo.remove(); core.remove() }, 5200)
      // Frecuencia más alta: 500-1500ms (4-6 rayos solapados)
      const t3 = setTimeout(emitRay, 500 + Math.random() * 1000)

      if (t1) pendingTimeouts.push(t1)
      pendingTimeouts.push(t2, t3)
    }

    const startId = setTimeout(emitRay, 600)
    pendingTimeouts.push(startId)

    return () => {
      cancelled = true
      pendingTimeouts.forEach((t) => t && clearTimeout(t))
      pendingTimeouts = []
    }
  }, [sunRef, panelRef, stageRef])
}
