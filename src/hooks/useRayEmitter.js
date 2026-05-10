import { useEffect } from 'react'

/**
 * Emite rayos desde el sol hacia el panel — spec §6, §7, §9:
 *   - 1 o 2 rayos simultáneos como máximo
 *   - Origen: una "punta" aleatoria del sol
 *   - Dirección: hacia el contenido (hacia abajo-izquierda)
 *   - Pulso del sol sincronizado con la emisión (0.6–1s)
 *   - Cuando aterriza: panel se carga (dorado → azul)
 *   - Frecuencia variable cada 2–4 segundos
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
      // Forzar reflow para reiniciar la animación
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

    const emitRay = () => {
      if (cancelled) return
      const sun = sunRef.current
      const stage = stageRef.current
      if (!sun || !stage) return

      // Posición actual del sol (con scroll y transformaciones aplicadas)
      const sunRect = sun.getBoundingClientRect()
      const sunCenterX = sunRect.left + sunRect.width / 2
      const sunCenterY = sunRect.top + sunRect.height / 2

      // Punta aleatoria del sol (sesgo hacia abajo-izquierda, donde está el panel)
      // Puntas en la mitad inferior-izquierda del sol
      const tipAngles = [120, 135, 150, 165, 180, 195, 210, 225]
      const tipDeg = tipAngles[Math.floor(Math.random() * tipAngles.length)]
      const tipRad = (tipDeg * Math.PI) / 180
      const tipDist = 280
      const startX = sunCenterX + Math.cos(tipRad) * tipDist
      const startY = sunCenterY + Math.sin(tipRad) * tipDist

      // Rayo hacia abajo-izquierda (panel crece desde abajo)
      const rayAngle = 135 + (Math.random() * 40 - 20)

      const ray = document.createElement('div')
      ray.className = 'ray'
      ray.style.left = `${startX}px`
      ray.style.top = `${startY}px`
      ray.style.setProperty('--ray-angle', `${rayAngle}deg`)
      ray.style.width = `${60 + Math.random() * 30}vw`
      stage.appendChild(ray)

      // Pulso del sol sincronizado (spec §7)
      pulseSun()

      // Carga del panel cuando el rayo aterriza (~70% de la animación 2.4s)
      const t1 = setTimeout(chargePanel, 1500)
      const t2 = setTimeout(() => ray.remove(), 2600)
      // Siguiente rayo en 1.2-2.8s (a veces se solapan → 1-2 rayos simultáneos)
      const t3 = setTimeout(emitRay, 1200 + Math.random() * 1600)

      pendingTimeouts.push(t1, t2, t3)
    }

    // Primer rayo tras un pequeño respiro
    const startId = setTimeout(emitRay, 1200)
    pendingTimeouts.push(startId)

    return () => {
      cancelled = true
      pendingTimeouts.forEach(clearTimeout)
      pendingTimeouts = []
    }
  }, [sunRef, panelRef, stageRef])
}
