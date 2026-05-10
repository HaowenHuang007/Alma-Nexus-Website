/**
 * Diferenciación (spec §3.7):
 * Layout: texto izquierda, cuadrícula 2x2 de tarjetas derecha.
 * Mensajes clave: Sistema completo, Automatización, SAT especializado, Escalabilidad.
 */
const CARDS = [
  {
    num: '01',
    title: 'Sistema completo',
    desc: 'Producción, consumo, climatización, ACS, mantenimiento y seguimiento integrados.',
  },
  {
    num: '02',
    title: 'Automatización',
    desc: 'Bot, presupuestador, cualificación de leads y soporte inicial automatizado.',
  },
  {
    num: '03',
    title: 'SAT especializado',
    desc: 'Soporte por áreas: FV, aerotermia, componentes, instalación y mantenimiento.',
  },
  {
    num: '04',
    title: 'Escalabilidad',
    desc: 'Procesos diseñados para crecer con equipos técnicos y red de partners.',
  },
]

export default function Differentiation() {
  return (
    <section
      id="diferenciacion"
      className="relative bg-paper"
      style={{ paddingBlock: 'var(--section-y, 140px)' }}
    >
      <div className="container-x">
        <div
          className="grid items-start gap-10 md:gap-20"
          style={{ gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)' }}
        >
          {/* Texto izquierda */}
          <div>
            <span className="eyebrow reveal">Diferenciación</span>
            <h2 className="reveal mt-5" data-delay="1">
              Más que una <em>instaladora.</em>
            </h2>
            <p className="lead reveal mt-5" data-delay="2">
              Alma Energies es integradora de sistemas energéticos, automatización y soporte
              técnico. La diferencia está en combinar ejecución, gestión y seguimiento bajo un
              único responsable.
            </p>
          </div>

          {/* Cuadrícula 2×2 derecha */}
          <div className="grid grid-cols-2 gap-3.5">
            {CARDS.map((c, i) => (
              <article
                key={c.num}
                className="reveal card-elevate p-7 rounded-[18px]"
                data-delay={i + 1}
                style={{
                  background: 'rgba(255, 255, 255, 0.88)',
                  border: '1px solid rgba(21, 17, 11, 0.10)',
                  backdropFilter: 'blur(14px)',
                }}
              >
                <div
                  className="font-serif italic text-gold-deep mb-3"
                  style={{ fontSize: '0.92rem', fontVariationSettings: "'opsz' 36, 'SOFT' 100" }}
                >
                  {c.num}
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
