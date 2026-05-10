import { useState } from 'react'
import SectionHead from './SectionHead'

const ITEMS = [
  {
    q: '¿Cuánto cuesta una instalación fotovoltaica?',
    a: 'El coste depende del consumo, ubicación y tipo de cliente. Nuestra calculadora estima inversión y retorno en minutos sin compromiso.',
  },
  {
    q: '¿En cuánto tiempo recupero la inversión?',
    a: 'El retorno medio se sitúa entre 4 y 7 años para vivienda y entre 3 y 6 años para empresa, dependiendo del consumo y de los incentivos locales.',
  },
  {
    q: '¿Qué subvenciones puedo obtener?',
    a: 'Trabajamos con todos los programas autonómicos vigentes (Next Generation, IDAE, deducciones IRPF). Te asesoramos durante toda la tramitación.',
  },
  {
    q: '¿Necesito mantenimiento periódico?',
    a: 'Sí, pero mínimo. Incluimos monitorización 24/7 y revisiones anuales. Los paneles tienen 25+ años de vida útil y la aerotermia 20+.',
  },
  {
    q: '¿Funciona si vivo en una comunidad de vecinos?',
    a: 'Sí. Diseñamos soluciones de autoconsumo compartido y comunidades energéticas con gestión centralizada y reparto justo de la producción.',
  },
  {
    q: '¿Quién hace la instalación y los trámites?',
    a: 'Todo Alma Nexus. Un único responsable: diseño, instalación, legalización, conexión a red y mantenimiento posterior.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="relative" style={{ paddingBlock: 'var(--section-y, 140px)' }}>
      <div className="container-x">
        <SectionHead
          num="07 — FAQ"
          eyebrow="Preguntas frecuentes"
          title={<>Lo que necesitas <em>saber.</em></>}
          lead="Respuestas claras a las dudas más habituales antes de tomar la decisión."
        />
        <div className="max-w-[860px] mx-auto">
          {ITEMS.map((it, i) => (
            <Item key={i} {...it} idx={i + 1} isOpen={open === i} onClick={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Item({ q, a, idx, isOpen, onClick }) {
  return (
    <article
      className="reveal py-6 transition-colors"
      style={{ borderTop: '1px solid rgba(21,17,11,0.10)' }}
    >
      <button
        type="button"
        onClick={onClick}
        className="w-full flex items-center gap-6 text-left group"
      >
        <span
          className="font-serif italic text-gold-deep flex-shrink-0"
          style={{ fontSize: '0.92rem', fontVariationSettings: "'opsz' 36, 'SOFT' 100", minWidth: '36px' }}
        >
          {String(idx).padStart(2, '0')}
        </span>
        <h3 className="flex-1 text-[1.15rem] md:text-[1.3rem] transition-colors group-hover:text-gold-deep">
          {q}
        </h3>
        <span
          className="flex-shrink-0 w-9 h-9 rounded-full grid place-items-center transition-all"
          style={{
            border: '1px solid rgba(217,164,65,0.4)',
            background: isOpen ? '#D9A441' : 'transparent',
            color: isOpen ? '#15110B' : '#A87614',
          }}
        >
          <svg viewBox="0 0 14 14" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M7 2v10M2 7h10" style={{
              transition: 'transform 0.3s ease',
              transformOrigin: 'center',
              transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            }} />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-500"
        style={{
          maxHeight: isOpen ? '300px' : '0',
          opacity: isOpen ? 1 : 0,
          marginTop: isOpen ? '14px' : '0',
        }}
      >
        <p className="lead pl-[60px] pr-[52px] text-[1rem]">{a}</p>
      </div>
    </article>
  )
}
