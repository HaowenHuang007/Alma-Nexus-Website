import { useRef } from 'react'
import Sun from './Sun'
import { useSunScroll } from '../hooks/useSunScroll'
import { useRayEmitter } from '../hooks/useRayEmitter'

export default function VisualLayer() {
  const sunRef = useRef(null)
  const stageRef = useRef(null)
  const noPanelRef = useRef(null)

  useSunScroll(sunRef)
  useRayEmitter({ sunRef, panelRef: noPanelRef, stageRef })

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <Sun ref={sunRef} />
      <svg
        ref={stageRef}
        className="absolute inset-0 w-full h-full"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="rayGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="rgba(217,164,65,0)" />
            <stop offset="15%"  stopColor="rgba(217,164,65,0.5)" />
            <stop offset="55%"  stopColor="rgba(255,230,160,1)" />
            <stop offset="78%"  stopColor="rgba(255,248,220,1)" />
            <stop offset="92%"  stopColor="rgba(255,255,255,0.9)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
