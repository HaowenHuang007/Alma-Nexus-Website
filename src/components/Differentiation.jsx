const ICONS = {
  sistema: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="3" />
      <circle cx="6" cy="6" r="2" /><circle cx="26" cy="6" r="2" />
      <circle cx="6" cy="26" r="2" /><circle cx="26" cy="26" r="2" />
      <path d="M16 13L7 7M16 13l9-6M16 19l-9 6M16 19l9 6" />
    </svg>
  ),
  auto: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4v6M16 22v6M4 16h6M22 16h6M7.5 7.5l4 4M20.5 20.5l4 4M7.5 24.5l4-4M20.5 11.5l4-4" />
      <circle cx="16" cy="16" r="4" />
    </svg>
  ),
  sat: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4l3 5h-6z" />
      <path d="M6 16l-2 3 5 3" />
      <path d="M26 16l2 3-5 3" />
      <circle cx="16" cy="20" r="6" />
      <path d="M14 20h4M16 18v4" />
    </svg>
  ),
  escala: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 28l6-8 5 5 9-13 4 7" />
      <path d="M22 12h6v6" />
      <path d="M4 28h24" />
    </svg>
  ),
}

const CARDS = [
  { id: 'sistema', num: '01', title: 'Sistema completo',  desc: 'Producción, consumo, climatización, ACS, mantenimiento y seguimiento integrados.' },
  { id: 'auto',    num: '02', title: 'Automatización',    desc: 'Bot, presupuestador, cualificación de leads y soporte inicial automatizado.' },
  { id: 'sat',     num: '03', title: 'SAT especializado', desc: 'Soporte por áreas: FV, aerotermia, componentes, instalación y mantenimiento.' },
  { id: 'escala',  num: '04', title: 'Escalabilidad',     desc: 'Procesos diseñados para crecer con equipos técnicos y red de partners.' },
]

export default function Differentiation() {
  return (
    <section id="diferenciacion" className="relative" style={{ paddingBlock: 'var(--section-y, 140px)' }}>
      <div className="container-x">
        <div
          className="grid items-start gap-10 md:gap-20"
          style={{ gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)' }}
        >
          <div>
            <span className="eyebrow reveal">Diferenciación</span>
            <h2 className="reveal mt-5" data-delay="1">
              Más que una <em>instaladora.</em>
            </h2>
            <p className="lead reveal mt-5" data-delay="2">
              Alma Nexus es integradora de sistemas energéticos, automatización y soporte
              técnico. La diferencia está en combinar ejecución, gestión y seguimiento bajo un
              único responsable.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3.5">
            {CARDS.map((c, i) => (
              <article
                key={c.id}
                className="reveal card-elevate tilt p-7 rounded-[18px] relative overflow-hidden"
                data-delay={i + 1}
                style={{
                  background: 'rgba(255, 255, 255, 0.88)',
                  border: '1px solid rgba(21, 17, 11, 0.10)',
                  backdropFilter: 'blur(14px)',
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-11 h-11 rounded-[10px] grid place-items-center text-gold-deep"
                    style={{
                      background: 'linear-gradient(135deg, rgba(217,164,65,0.16), rgba(217,164,65,0.04))',
                      border: '1px solid rgba(217,164,65,0.32)',
                    }}
                  >
                    {ICONS[c.id]}
                  </div>
                  <div
                    className="font-serif italic text-gold-deep"
                    style={{ fontSize: '0.95rem', fontVariationSettings: "'opsz' 36, 'SOFT' 100" }}
                  >
                    {c.num}
                  </div>
                </div>
                <h3 className="mb-2.5">{c.title}</h3>
                <p className="text-[0.92rem]">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
