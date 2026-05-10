import { forwardRef } from 'react'

const Sun = forwardRef(function Sun(_, ref) {
  return (
    <div
      ref={ref}
      data-sun-root
      className="absolute top-[-100px] right-[-120px] w-[880px] h-[880px] text-gold will-change-transform"
      style={{
        transformOrigin: 'center',
        filter: 'drop-shadow(0 0 60px rgba(217, 164, 65, 0.55))',
      }}
      aria-hidden="true"
    >
      {/* Halo dorado difuso (efecto sol cinematográfico) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, rgba(255, 230, 160, 0.55) 0%, rgba(217, 164, 65, 0.32) 22%, rgba(217, 164, 65, 0.10) 44%, transparent 65%)
          `,
        }}
      />
      <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeLinecap="round">
          <g strokeWidth="3.5">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <polygon key={`L-${deg}`} points="300,40 290,200 310,200" transform={`rotate(${deg} 300 300)`} />
            ))}
          </g>
          <g strokeWidth="3">
            {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((deg) => (
              <polygon key={`S-${deg}`} points="300,140 293,205 307,205" transform={`rotate(${deg} 300 300)`} />
            ))}
          </g>
          <circle cx="300" cy="300" r="88" strokeWidth="3.5" />
          <circle cx="300" cy="300" r="60" strokeWidth="3" />
          <circle cx="300" cy="300" r="32" strokeWidth="2.5" />
        </g>
        <circle cx="300" cy="300" r="14" fill="currentColor" />
      </svg>
    </div>
  )
})

export default Sun
