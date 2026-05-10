import SectionHead from './SectionHead'

const QUOTES = [
  {
    quote: 'Pasamos de 220 € de factura mensual a 45 € en seis meses. La instalación se amortiza sola y el equipo de Alma se encargó de absolutamente todo, incluida la subvención.',
    name: 'Marta Sánchez',
    role: 'Vivienda unifamiliar · Valencia',
    saving: '−79%',
    initial: 'M',
  },
  {
    quote: 'Nuestra nave consumía 18.000 € al año en electricidad. Con la solución de fotovoltaica + aerotermia hemos reducido el coste en un 64 % y monitorizamos todo en tiempo real.',
    name: 'Javier Ortiz',
    role: 'Director general · Logística Mediterráneo',
    saving: '−64%',
    initial: 'J',
  },
  {
    quote: 'El proceso fue transparente desde el primer día. La calculadora me dio una estimación realista, la propuesta llegó en 48h y la instalación se completó en una semana sin sorpresas.',
    name: 'Lucía Romero',
    role: 'Comunidad de vecinos · Madrid',
    saving: '−52%',
    initial: 'L',
  },
]

export default function Testimonials() {
  return (
    <section className="relative" style={{ paddingBlock: 'var(--section-y, 140px)' }}>
      <div className="container-x">
        <SectionHead
          num="08 — Voces"
          eyebrow="Testimonios"
          title={<>Quien lo vivió, <em>lo cuenta.</em></>}
          lead="Tres clientes, tres situaciones distintas, una misma sensación: control, ahorro y acompañamiento real."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {QUOTES.map((q, i) => (
            <article
              key={i}
              className="reveal card-elevate relative flex flex-col gap-7 p-8 rounded-[18px]"
              data-delay={i + 1}
              style={{
                background: 'rgba(255,255,255,0.92)',
                border: '1px solid rgba(21,17,11,0.10)',
                backdropFilter: 'blur(14px)',
              }}
            >
              {/* Comilla decorativa */}
              <div
                className="absolute top-5 right-7 font-serif italic text-gold opacity-30 select-none"
                style={{ fontSize: '4.5rem', lineHeight: 1, fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
                aria-hidden="true"
              >
                "
              </div>

              {/* Métrica de ahorro */}
              <div className="flex items-center gap-3">
                <span
                  className="font-serif font-medium text-gold-deep"
                  style={{ fontSize: '1.8rem', letterSpacing: '-0.03em', lineHeight: 1 }}
                >
                  {q.saving}
                </span>
                <span className="text-[0.78rem] uppercase tracking-[0.14em] text-muted font-semibold">
                  Reducción de factura
                </span>
              </div>

              <p className="text-[0.96rem] text-ink-soft leading-relaxed flex-1">
                "{q.quote}"
              </p>

              <div className="flex items-center gap-3.5 pt-5" style={{ borderTop: '1px solid rgba(21,17,11,0.08)' }}>
                <span
                  className="w-11 h-11 rounded-full grid place-items-center font-serif text-ink"
                  style={{
                    background: 'linear-gradient(135deg, #F4D177 0%, #D9A441 100%)',
                    fontSize: '1.15rem',
                    fontVariationSettings: "'opsz' 36, 'SOFT' 50",
                    boxShadow: '0 6px 16px rgba(217,164,65,0.32)',
                  }}
                >
                  {q.initial}
                </span>
                <div>
                  <div className="font-semibold text-[0.92rem] text-ink leading-tight">{q.name}</div>
                  <div className="text-[0.78rem] text-muted leading-tight">{q.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
