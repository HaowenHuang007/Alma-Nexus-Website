import { useRef } from 'react'
import Sun from './Sun'
import FvPanel from './FvPanel'
import { useSunScroll } from '../hooks/useSunScroll'
import { useRayEmitter } from '../hooks/useRayEmitter'

export default function VisualLayer() {
  const sunRef = useRef(null)
  const panelRef = useRef(null)
  const stageRef = useRef(null)

  useSunScroll(sunRef)
  useRayEmitter({ sunRef, panelRef, stageRef })

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <Sun ref={sunRef} />
      <FvPanel ref={panelRef} />
      <div ref={stageRef} className="absolute inset-0" />
    </div>
  )
}
