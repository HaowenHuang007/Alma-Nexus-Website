import { useEffect, useState } from 'react'

const TIPOS = [
  { id: 'instalador',   label: 'Instalador'   },
  { id: 'ingenieria',   label: 'Ingeniería'   },
  { id: 'distribuidor', label: 'Distribuidor' },
  { id: 'otro',         label: 'Otro'         },
]

const VOLUMENES = [
  { id: 'pequeno',  label: '< 10 proyectos/año' },
  { id: 'medio',    label: '10–50 proyectos/año' },
  { id: 'grande',   label: '50–200 proyectos/año' },
  { id: 'enorme',   label: '+200 proyectos/año'  },
]

export default function PartnerModal() {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [data, setData] = useState({
    empresa: '', tipo: '', provincia: '', volumen: '',
    email: '', telefono: '', mensaje: '',
  })

  useEffect(() => {
    const onOpen = () => { setOpen(true); setSent(false) }
    window.addEventListener('open-partner', onOpen)
    return () => window.removeEventListener('open-partner', onOpen)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  const close = () => setOpen(false)
  const set = (k, v) => setData((d) => ({ ...d, [k]: v }))
  const valid = data.empresa && data.tipo && data.email && data.volumen

  const submit = (e) => {
    e.preventDefault()
    if (!valid) return
    setSent(true)
  }

  return (
    <div
      className="fixed inset-0 grid place-items-center"
      style={{ zIndex: 100 }}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0"
        onClick={close}
        style={{ background: 'rgba(10,16,20,0.55)', backdropFilter: 'blur(12px)' }}
      />

      <div
        className="relative w-[min(880px,92vw)] max-h-[92vh] overflow-hidden flex flex-col"
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
              Programa Partner
            </span>
          </div>
          <button onClick={close} aria-label="Cerrar" className="w-9 h-9 grid place-items-center rounded-full transition-colors hover:bg-paper-deep">
            <svg viewBox="0 0 14 14" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M2 2l10 10M12 2L2 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-7 md:px-12 py-9">
          {sent ? (
            <Success email={data.email} />
          ) : (
            <form id="partner-form" onSubmit={submit} className="grid gap-7">
              <div>
                <span className="eyebrow">Solicitud</span>
                <h2 className="mt-3 mb-3" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)' }}>
                  Cuéntanos sobre tu <em>empresa.</em>
                </h2>
                <p className="text-ink-soft max-w-[60ch]">
                  Te contactaremos en menos de 48h para conocer tu volumen de proyectos y proponerte
                  el modelo de colaboración que mejor encaje.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Nombre de la empresa *">
                  <input
                    type="text"
                    required
                    value={data.empresa}
                    onChange={(e) => set('empresa', e.target.value)}
                    placeholder="Ej. Solar Levante S.L."
                    className="form-input"
                  />
                </Field>
                <Field label="Provincia">
                  <input
                    type="text"
                    value={data.provincia}
                    onChange={(e) => set('provincia', e.target.value)}
                    placeholder="Ej. Valencia"
                    className="form-input"
                  />
                </Field>
              </div>

              <div>
                <Label>Tipo de empresa *</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {TIPOS.map((t) => (
                    <Pill key={t.id} active={data.tipo === t.id} onClick={() => set('tipo', t.id)}>
                      {t.label}
                    </Pill>
                  ))}
                </div>
              </div>

              <div>
                <Label>Volumen anual de proyectos *</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {VOLUMENES.map((v) => (
                    <Pill key={v.id} active={data.volumen === v.id} onClick={() => set('volumen', v.id)}>
                      {v.label}
                    </Pill>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Email de contacto *">
                  <input
                    type="email"
                    required
                    value={data.email}
                    onChange={(e) => set('email', e.target.value)}
                    placeholder="tu@empresa.com"
                    className="form-input"
                  />
                </Field>
                <Field label="Teléfono">
                  <input
                    type="tel"
                    value={data.telefono}
                    onChange={(e) => set('telefono', e.target.value)}
                    placeholder="+34 600 00 00 00"
                    className="form-input"
                  />
                </Field>
              </div>

              <Field label="Mensaje (opcional)">
                <textarea
                  rows={4}
                  value={data.mensaje}
                  onChange={(e) => set('mensaje', e.target.value)}
                  placeholder="Cuéntanos brevemente qué tipo de colaboración buscas."
                  className="form-input"
                  style={{ resize: 'vertical', minHeight: '100px', borderRadius: '14px' }}
                />
              </Field>
            </form>
          )}
        </div>

        {/* Footer */}
        {!sent && (
          <div className="flex items-center justify-between gap-3 px-7 py-5" style={{ borderTop: '1px solid rgba(21,17,11,0.10)' }}>
            <span className="text-[0.78rem] text-muted">* Campos obligatorios</span>
            <button
              type="submit"
              form="partner-form"
              disabled={!valid}
              className="btn btn-gold"
              style={{ opacity: valid ? 1 : 0.4, pointerEvents: valid ? 'auto' : 'none' }}
            >
              Enviar solicitud
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-2">
      <Label>{label}</Label>
      {children}
    </label>
  )
}

function Label({ children }) {
  return (
    <span className="text-[0.78rem] uppercase tracking-[0.14em] font-bold text-gold-deep mb-1">{children}</span>
  )
}

function Pill({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-4 py-3 rounded-[12px] text-[0.92rem] text-left transition-all"
      style={{
        background: active ? 'linear-gradient(135deg, rgba(244,224,171,0.55), rgba(217,164,65,0.18))' : 'rgba(255,255,255,0.85)',
        border: active ? '1.5px solid #D9A441' : '1px solid rgba(21,17,11,0.10)',
        color: '#15110B',
        fontWeight: active ? 600 : 500,
        boxShadow: active ? '0 8px 18px rgba(217,164,65,0.18)' : 'none',
      }}
    >
      {children}
    </button>
  )
}

function Success({ email }) {
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
        Solicitud <em>recibida.</em>
      </h2>
      <p className="lead mx-auto max-w-[52ch]">
        Hemos recibido tu solicitud. En menos de 48h te contactaremos en
        {' '}<strong className="text-ink">{email}</strong> para hablar de tu encaje en el programa partner.
      </p>
    </div>
  )
}
