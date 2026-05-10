import { useEffect, useState } from 'react'

/**
 * Contador en tiempo real: simula la energía generada por la flota
 * de instalaciones desde que el usuario abrió la página.
 */
export default function LiveCounter() {
  const [start] = useState(() => Date.now())
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1000)
    return () => clearInterval(id)
  }, [])

  // Tasas por segundo (simuladas para 1.200 instalaciones activas)
  const seconds = (Date.now() - start) / 1000 + tick * 0
  const kwh = (seconds * 14.6).toFixed(1)        // kWh
  const eur = (seconds * 2.34).toFixed(2)        // € ahorrados
  const co2 = (seconds * 3.94).toFixed(1)        // kg CO₂ evitados

  return (
    <section
      className="relative"
      style={{
        paddingBlock: 'clamp(60px, 8vw, 100px)',
        background: 'linear-gradient(135deg, #0A1014 0%, #131A1F 100%)',
        color: '#FCFCFA',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(217,164,65,0.18), transparent 45%), radial-gradient(circle at 80% 80%, rgba(14,168,255,0.10), transparent 50%)',
        }}
      />
      <div className="container-x relative">
        <div className="text-center mb-12 max-w-[680px] mx-auto">
          <span className="eyebrow reveal" style={{ color: '#F4E0AB' }}>
            Producción en directo
          </span>
          <h2
            className="reveal mt-5 mb-4"
            data-delay="1"
            style={{ color: '#FCFCFA', fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            Mientras lees, <em style={{ color: '#F4E0AB' }}>generamos energía.</em>
          </h2>
          <p
            className="lead reveal mx-auto"
            data-delay="2"
            style={{ color: 'rgba(252,252,250,0.72)' }}
          >
            Suma estimada de la producción de nuestra flota de instalaciones desde que abriste esta página.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          <Card
            label="Energía generada"
            value={Number(kwh).toLocaleString('es', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
            unit="kWh"
            color="#F4D177"
          />
          <Card
            label="Ahorro económico"
            value={Number(eur).toLocaleString('es', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            unit="€"
            color="#F4D177"
          />
          <Card
            label="CO₂ evitado"
            value={Number(co2).toLocaleString('es', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
            unit="kg"
            color="#7DD3FC"
          />
        </div>
      </div>
    </section>
  )
}

function Card({ label, value, unit, color }) {
  return (
    <article
      className="reveal p-7 rounded-[18px]"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.10)',
        backdropFilter: 'blur(14px)',
      }}
    >
      <div className="flex items-center gap-2.5 mb-4">
        <span
          className="w-2 h-2 rounded-full animate-breathe"
          style={{ background: color, boxShadow: `0 0 12px ${color}` }}
        />
        <span className="text-[0.78rem] uppercase tracking-[0.14em] font-semibold" style={{ color: 'rgba(252,252,250,0.6)' }}>
          {label}
        </span>
      </div>
      <strong
        className="block font-serif font-medium"
        style={{
          fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
          letterSpacing: '-0.04em',
          lineHeight: 1,
          color,
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {value}
        <em className="italic" style={{ fontSize: '0.5em', marginLeft: '6px' }}>{unit}</em>
      </strong>
    </article>
  )
}
