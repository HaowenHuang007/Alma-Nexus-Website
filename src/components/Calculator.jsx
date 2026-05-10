import { useEffect, useState, useMemo } from 'react'

const TIPOS = [
  { id: 'vivienda', label: 'Vivienda', desc: 'Unifamiliar, piso o casa de campo', icon: 'V' },
  { id: 'empresa',  label: 'Empresa',  desc: 'Nave, local, hotel, oficina',     icon: 'E' },
  { id: 'comunidad',label: 'Comunidad',desc: 'Edificio, parking, comunidad energética', icon: 'C' },
]

const SOLUCIONES = [
  { id: 'fv',       label: 'Solo fotovoltaica',         desc: 'Autoconsumo eléctrico básico',   mult: 1.0,  ahorro: 0.45 },
  { id: 'fv-aero',  label: 'Fotovoltaica + Aerotermia', desc: 'Producción + climatización',     mult: 1.6,  ahorro: 0.62 },
  { id: 'completo', label: 'Sistema completo',          desc: 'FV + aerotermia + ACS + gestión', mult: 2.1, ahorro: 0.75 },
]

function calculate({ tipo, factura, solucion }) {
  if (!tipo || !solucion) return null
  const base = { vivienda: 36, empresa: 24, comunidad: 30 }[tipo] || 36
  const sol = SOLUCIONES.find((s) => s.id === solucion)
  const inversion  = Math.round((factura * base * sol.mult) / 100) * 100
  const ahorroMes  = Math.round(factura * sol.ahorro)
  const ahorroAnual = ahorroMes * 12
  const retorno    = +(inversion / ahorroAnual).toFixed(1)
  const produccion = Math.round(factura * 12 * 0.85 / 0.18)
  const co2 = Math.round(produccion * 0.27)
  return { inversion, ahorroMes, ahorroAnual, retorno, produccion, co2 }
}

export default function Calculator() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(0)
  const [data, setData] = useState({ tipo: null, factura: 180, solucion: null, email: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const onOpen = (e) => {
      setOpen(true)
      setSent(false)
      const tipo = e?.detail?.tipo
      if (tipo) {
        setData((d) => ({ ...d, tipo }))
        setStep(1) // saltamos al paso de factura
      } else {
        setStep(0)
      }
    }
    window.addEventListener('open-calculator', onOpen)
    return () => window.removeEventListener('open-calculator', onOpen)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const results = useMemo(() => calculate(data), [data])
  const totalSteps = 4

  const close = () => setOpen(false)
  const next = () => setStep((s) => Math.min(totalSteps - 1, s + 1))
  const prev = () => setStep((s) => Math.max(0, s - 1))

  const canNext =
    (step === 0 && !!data.tipo) ||
    (step === 1 && data.factura > 0) ||
    (step === 2 && !!data.solucion) ||
    step === 3

  if (!open) return null

  return (
    <div
      className="fixed inset-0 grid place-items-center"
      style={{ zIndex: 100 }}
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        onClick={close}
        style={{ background: 'rgba(10,16,20,0.55)', backdropFilter: 'blur(12px)' }}
      />

      {/* Modal */}
      <div
        className="relative w-[min(960px,92vw)] max-h-[90vh] overflow-hidden flex flex-col"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.96) 0%, rgba(244,224,171,0.18) 100%)',
          border: '1px solid rgba(217,164,65,0.35)',
          borderRadius: '24px',
          boxShadow: '0 60px 120px rgba(10,16,20,0.45)',
          backdropFilter: 'blur(18px)',
          animation: 'modalIn 0.4s cubic-bezier(0.2,0.7,0.3,1)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-7 py-5" style={{ borderBottom: '1px solid rgba(21,17,11,0.10)' }}>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-gold animate-breathe" style={{ boxShadow: '0 0 10px rgba(217,164,65,0.6)' }} />
            <span className="text-[0.85rem] font-semibold tracking-[0.08em] text-ink-soft">
              Calculadora · Paso {Math.min(step + 1, totalSteps)} de {totalSteps}
            </span>
          </div>
          <button onClick={close} aria-label="Cerrar" className="w-9 h-9 grid place-items-center rounded-full transition-colors hover:bg-paper-deep">
            <svg viewBox="0 0 14 14" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M2 2l10 10M12 2L2 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Progress */}
        <div className="h-[2px] bg-paper-deep relative">
          <div
            className="absolute top-0 left-0 h-full transition-all duration-500"
            style={{
              width: `${((step + 1) / totalSteps) * 100}%`,
              background: 'linear-gradient(90deg, #D9A441, #F4D177)',
              boxShadow: '0 0 10px rgba(217,164,65,0.6)',
            }}
          />
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-7 md:px-12 py-10">
          {step === 0 && <StepTipo data={data} setData={setData} />}
          {step === 1 && <StepFactura data={data} setData={setData} />}
          {step === 2 && <StepSolucion data={data} setData={setData} />}
          {step === 3 && (
            <StepResultados
              data={data}
              setData={setData}
              results={results}
              sent={sent}
              setSent={setSent}
            />
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-3 px-7 py-5" style={{ borderTop: '1px solid rgba(21,17,11,0.10)' }}>
          <button
            onClick={prev}
            disabled={step === 0}
            className="btn btn-small"
            style={{ opacity: step === 0 ? 0.35 : 1, pointerEvents: step === 0 ? 'none' : 'auto' }}
          >
            ← Atrás
          </button>
          {step < totalSteps - 1 ? (
            <button
              onClick={next}
              disabled={!canNext}
              className="btn btn-gold"
              style={{ opacity: canNext ? 1 : 0.4, pointerEvents: canNext ? 'auto' : 'none' }}
            >
              Continuar
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          ) : (
            <button onClick={close} className="btn btn-small">Cerrar</button>
          )}
        </div>
      </div>
    </div>
  )
}

function StepTipo({ data, setData }) {
  return (
    <div>
      <span className="eyebrow">01 — Tipo</span>
      <h2 className="mt-4 mb-3" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)' }}>
        ¿Para qué quieres <em>calcular?</em>
      </h2>
      <p className="text-ink-soft mb-8 max-w-[60ch]">
        Selecciona el tipo de instalación. La calculadora se adapta a cada caso.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {TIPOS.map((t) => {
          const sel = data.tipo === t.id
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setData({ ...data, tipo: t.id })}
              className="text-left p-6 rounded-[14px] transition-all"
              style={{
                background: sel ? 'linear-gradient(135deg, rgba(244,224,171,0.55), rgba(217,164,65,0.18))' : 'rgba(255,255,255,0.85)',
                border: sel ? '1.5px solid #D9A441' : '1px solid rgba(21,17,11,0.10)',
                boxShadow: sel ? '0 14px 30px rgba(217,164,65,0.22)' : 'none',
              }}
            >
              <span
                className="inline-grid place-items-center w-10 h-10 rounded-[10px] font-serif italic mb-4"
                style={{
                  background: sel ? '#D9A441' : 'rgba(217,164,65,0.12)',
                  color: sel ? '#15110B' : '#A87614',
                  fontSize: '1.1rem',
                  fontVariationSettings: "'opsz' 36, 'SOFT' 100",
                }}
              >
                {t.icon}
              </span>
              <h3 className="text-[1.1rem] mb-1.5">{t.label}</h3>
              <p className="text-[0.85rem] text-muted leading-snug">{t.desc}</p>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function StepFactura({ data, setData }) {
  return (
    <div>
      <span className="eyebrow">02 — Consumo</span>
      <h2 className="mt-4 mb-3" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)' }}>
        ¿Cuál es tu factura <em>mensual?</em>
      </h2>
      <p className="text-ink-soft mb-10 max-w-[60ch]">
        Aproximadamente, ¿cuánto pagas al mes en electricidad? No necesitamos el dato exacto.
      </p>
      <div className="text-center mb-10">
        <strong
          className="block font-serif font-medium text-gold-deep"
          style={{ fontSize: 'clamp(3.4rem, 7vw, 5rem)', letterSpacing: '-0.04em', lineHeight: 1 }}
        >
          {data.factura}<em className="italic">€</em>
        </strong>
        <span className="text-[0.88rem] text-muted">al mes</span>
      </div>
      <input
        type="range"
        min="50"
        max="2000"
        step="10"
        value={data.factura}
        onChange={(e) => setData({ ...data, factura: +e.target.value })}
        className="w-full"
        style={{
          accentColor: '#D9A441',
          height: '4px',
        }}
      />
      <div className="flex justify-between mt-3 text-[0.78rem] text-muted">
        <span>50 €</span>
        <span>500 €</span>
        <span>1.000 €</span>
        <span>2.000 €</span>
      </div>
    </div>
  )
}

function StepSolucion({ data, setData }) {
  return (
    <div>
      <span className="eyebrow">03 — Solución</span>
      <h2 className="mt-4 mb-3" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)' }}>
        ¿Qué solución te <em>encaja?</em>
      </h2>
      <p className="text-ink-soft mb-8 max-w-[60ch]">
        Si no lo tienes claro, elige la que más se acerque. La propuesta final puede combinarse.
      </p>
      <div className="grid gap-3.5">
        {SOLUCIONES.map((s) => {
          const sel = data.solucion === s.id
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setData({ ...data, solucion: s.id })}
              className="flex items-center justify-between gap-5 p-5 rounded-[14px] text-left transition-all"
              style={{
                background: sel ? 'linear-gradient(135deg, rgba(244,224,171,0.55), rgba(217,164,65,0.18))' : 'rgba(255,255,255,0.85)',
                border: sel ? '1.5px solid #D9A441' : '1px solid rgba(21,17,11,0.10)',
                boxShadow: sel ? '0 14px 30px rgba(217,164,65,0.22)' : 'none',
              }}
            >
              <div>
                <h3 className="text-[1.1rem] mb-1">{s.label}</h3>
                <p className="text-[0.88rem] text-muted">{s.desc}</p>
              </div>
              <span
                className="flex-shrink-0 w-7 h-7 rounded-full grid place-items-center transition-all"
                style={{
                  background: sel ? '#D9A441' : 'transparent',
                  border: sel ? 'none' : '1.5px solid rgba(21,17,11,0.20)',
                }}
              >
                {sel && (
                  <svg viewBox="0 0 14 14" width="12" height="12" fill="none" stroke="#15110B" strokeWidth="2.4">
                    <path d="M3 7l3 3 5-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function StepResultados({ data, setData, results, sent, setSent }) {
  if (sent) {
    return (
      <div className="text-center py-8">
        <span
          className="inline-grid place-items-center w-16 h-16 rounded-full mb-6"
          style={{ background: 'linear-gradient(135deg, #D9A441, #F4D177)', boxShadow: '0 16px 40px rgba(217,164,65,0.4)' }}
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#15110B" strokeWidth="2.5">
            <path d="M5 12l5 5 9-12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h2 className="mb-3" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)' }}>
          Propuesta <em>en camino.</em>
        </h2>
        <p className="lead mx-auto max-w-[48ch]">
          Te enviaremos el detalle a <strong className="text-ink">{data.email}</strong> en menos
          de 24 horas. Un técnico revisará tu caso y te contactará para refinar la propuesta.
        </p>
      </div>
    )
  }

  if (!results) return null

  return (
    <div>
      <span className="eyebrow">04 — Estimación</span>
      <h2 className="mt-4 mb-3" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)' }}>
        Tu ahorro <em>estimado.</em>
      </h2>
      <p className="text-ink-soft mb-8">
        Basado en tu consumo y solución elegida. Cifras orientativas — la propuesta final se ajusta a la visita técnica.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-9">
        <ResCard label="Inversión" value={results.inversion.toLocaleString('es')} suffix="€" highlight />
        <ResCard label="Ahorro/mes" value={results.ahorroMes} suffix="€" />
        <ResCard label="Retorno" value={results.retorno} suffix="a" />
        <ResCard label="CO₂ evitado/año" value={results.co2.toLocaleString('es')} suffix="kg" />
      </div>

      <div
        className="p-5 rounded-[14px] mb-7"
        style={{ background: 'rgba(244,224,171,0.32)', border: '1px solid rgba(217,164,65,0.30)' }}
      >
        <div className="text-[0.86rem] text-ink-soft">
          Producción estimada: <strong className="text-ink">{results.produccion.toLocaleString('es')} kWh</strong> al año ·
          Ahorro acumulado a 25 años: <strong className="text-ink">{(results.ahorroAnual * 25).toLocaleString('es')} €</strong>
        </div>
      </div>

      <form
        className="flex flex-col md:flex-row gap-2.5"
        onSubmit={(e) => { e.preventDefault(); setSent(true) }}
      >
        <input
          type="email"
          required
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          placeholder="tu@email.com"
          className="flex-1 px-5 py-3.5 rounded-full text-[0.95rem] outline-none"
          style={{
            background: 'rgba(255,255,255,0.95)',
            border: '1px solid rgba(21,17,11,0.12)',
            color: '#15110B',
          }}
        />
        <button type="submit" className="btn btn-gold flex-shrink-0">
          Recibir propuesta detallada
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </form>
    </div>
  )
}

function ResCard({ label, value, suffix, highlight }) {
  return (
    <div
      className="p-5 rounded-[14px]"
      style={{
        background: highlight
          ? 'linear-gradient(135deg, #15110B 0%, #2a2218 100%)'
          : 'rgba(255,255,255,0.85)',
        border: highlight ? 'none' : '1px solid rgba(21,17,11,0.10)',
        color: highlight ? '#FCFCFA' : '#15110B',
      }}
    >
      <div
        className="text-[0.74rem] uppercase tracking-[0.14em] font-semibold mb-2.5"
        style={{ color: highlight ? '#F4D177' : '#A87614' }}
      >
        {label}
      </div>
      <strong
        className="block font-serif font-medium"
        style={{
          fontSize: 'clamp(1.6rem, 2.6vw, 2.1rem)',
          letterSpacing: '-0.03em',
          lineHeight: 1,
          color: highlight ? '#F4D177' : '#A87614',
        }}
      >
        {value}<em className="italic" style={{ fontSize: '0.65em', marginLeft: '2px' }}>{suffix}</em>
      </strong>
    </div>
  )
}
