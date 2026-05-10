import panelImg from '../assets/panel.jpg'

/**
 * Sección dedicada al panel solar — muestra la foto y simula
 * el impacto continuo de los rayos del sol con pulsos azules.
 */
const IMPACTS = [
  { top: '32%', left: '28%', delay: 0 },
  { top: '46%', left: '62%', delay: 1.2 },
  { top: '58%', left: '20%', delay: 2.4 },
  { top: '40%', left: '78%', delay: 3.6 },
  { top: '64%', left: '50%', delay: 4.8 },
]

export default function PanelShowcase() {
  return (
    <section className="relative bg-paper" style={{ paddingBlock: 'clamp(60px, 8vw, 100px)' }}>
      <div className="container-x">
        <div
          className="reveal grid items-center gap-8 md:gap-14"
          style={{ gridTemplateColumns: 'minmax(0, 0.85fr) minmax(0, 1.15fr)' }}
        >
          {/* Texto */}
          <div>
            <span className="eyebrow">Transformación</span>
            <h2 className="mt-5">
              De la luz al <em>kWh.</em>
            </h2>
            <p className="lead mt-5">
              Cada rayo que captamos se convierte en energía limpia. Nuestros paneles
              transforman el potencial del sol en autonomía real para tu hogar o negocio.
            </p>
            <ul className="mt-7 grid gap-3 list-none p-0">
              {[
                'Captación radial de energía solar',
                'Conversión inmediata en electricidad',
                'Distribución inteligente y monitorización',
              ].map((b) => (
                <li key={b} className="flex items-center gap-3 text-[0.96rem] text-ink-soft">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"
                    style={{ boxShadow: '0 0 10px rgba(217,164,65,0.6)' }}
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Panel con impactos animados */}
          <div
            className="relative rounded-[24px] overflow-hidden"
            style={{
              aspectRatio: '4 / 3',
              boxShadow: '0 40px 90px rgba(10,16,20,0.30)',
              border: '1px solid rgba(21,17,11,0.10)',
            }}
          >
            <img
              src={panelImg}
              alt="Paneles fotovoltaicos al atardecer"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Líneas eléctricas overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  repeating-linear-gradient(118deg, transparent 0 60px, rgba(14,168,255,0.42) 60px 61px, transparent 61px 122px),
                  repeating-linear-gradient(28deg, transparent 0 80px, rgba(14,168,255,0.26) 80px 81px, transparent 81px 160px)
                `,
                opacity: 0.35,
                mixBlendMode: 'screen',
                animation: 'panelPulseBg 6s ease-in-out infinite',
              }}
            />
            {/* Puntos de impacto en bucle */}
            {IMPACTS.map((p, i) => (
              <span
                key={i}
                className="absolute pointer-events-none"
                style={{
                  top: p.top,
                  left: p.left,
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: 'rgba(255, 240, 200, 0.95)',
                  boxShadow: '0 0 24px rgba(217,164,65,0.85), 0 0 48px rgba(14,168,255,0.55)',
                  animation: `panelImpact 6s ease-out infinite`,
                  animationDelay: `${p.delay}s`,
                  opacity: 0,
                }}
              />
            ))}
            {/* Onda de propagación tras impacto */}
            {IMPACTS.map((p, i) => (
              <span
                key={`r-${i}`}
                className="absolute pointer-events-none"
                style={{
                  top: p.top,
                  left: p.left,
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: '2px solid rgba(14,168,255,0.7)',
                  transform: 'translate(-50%, -50%)',
                  animation: `panelRipple 6s ease-out infinite`,
                  animationDelay: `${p.delay + 0.1}s`,
                  opacity: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
