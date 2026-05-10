# Alma Nexus — Landing (React + Vite + Tailwind)

Landing de producción para Alma Nexus. Stack: **React 18 + Vite + Tailwind CSS**.

## Cómo arrancar

```bash
npm install
npm run dev
```

El dev server arranca en `http://localhost:5173`. Recarga automática al guardar.

Para una build de producción:

```bash
npm run build      # genera /dist
npm run preview    # sirve /dist localmente para revisar
```

## Estructura

```
alma-energies-react/
├── index.html              Fuentes (Google Fonts) + root de React
├── package.json
├── vite.config.js
├── tailwind.config.js      Tokens del proyecto (colores, fuentes, sombras)
├── postcss.config.js
└── src/
    ├── main.jsx            Entry point
    ├── App.jsx             Orquesta las 11 secciones de la spec
    ├── index.css           Tailwind + animaciones del sistema visual
    ├── components/
    │   ├── VisualLayer.jsx     Sol + panel + capa de rayos (fixed, fondo)
    │   ├── Sun.jsx             SVG line-art del sol
    │   ├── FvPanel.jsx         Panel fotovoltaico (zona media/inferior)
    │   ├── Header.jsx
    │   ├── Hero.jsx                    §3.1
    │   ├── WhoFor.jsx                  §3.2 — Identificación de usuario
    │   ├── Bot.jsx                     §3.3 — Núcleo (calculadora)
    │   ├── Economy.jsx                 §3.4 — Beneficio económico
    │   ├── HowItWorks.jsx              §3.5 — Cómo funciona
    │   ├── Solutions.jsx               §3.6 — Soluciones
    │   ├── Differentiation.jsx         §3.7 — Diferenciación
    │   ├── Proof.jsx                   §3.8 — Prueba social
    │   ├── Process.jsx                 §3.9 — Proceso
    │   ├── Partners.jsx                §3.10 — Partners
    │   ├── FinalCta.jsx                §3.11 — CTA final
    │   ├── Footer.jsx
    │   └── SectionHead.jsx     Encabezado reusable
    └── hooks/
        ├── useSunScroll.js     Movimiento del sol con scroll (§5)
        ├── useRayEmitter.js    Emisión de rayos + pulso + carga del panel (§6, §7, §9)
        └── useReveal.js        Reveal on scroll
```

## Cumplimiento de la spec

- **§3 Estructura**: las 11 secciones aparecen en el orden obligatorio (`App.jsx` lo refleja con comentarios).
- **§5 Comportamiento del sol**: rotación antihoraria + descenso + ligero desplazamiento a la izquierda + reducción progresiva de glow sin desaparecer (`useSunScroll.js`).
- **§6 Rayos**: 1–2 simultáneos, origen en puntas del sol, frecuencia 2–4s (`useRayEmitter.js`).
- **§7 Glow del sol**: pulso sincronizado de 0.85s con cada rayo (`@keyframes sunPulse` en `index.css`).
- **§8 Panel FV**: posicionado fixed en zona media/inferior (bottom-left), no en el hero (`FvPanel.jsx`).
- **§9 Transformación**: impacto, conversión dorado→azul, propagación con `ripple`, glow azul temporal (animaciones en `index.css`).
- **§10 Dirección**: base blanca (`#FCFCFA`), principal dorado, secundario azul eléctrico solo en panel y energía transformada.
- **§11 Restricciones**: NO hay iconografía evidente. Las soluciones usan etiquetas tipográficas (`FV`, `AE`, `SR`, `ACS`, `GT`) en serif italic dentro de un bloque sutil. No hay gota de agua, llama, montaña, etc.
- **Accesibilidad**: `prefers-reduced-motion` respetado en hooks y CSS.

## Cambios habituales

**Cambiar dorado** → `tailwind.config.js`, dentro de `theme.extend.colors.gold`. Y ajustar también los rgba(217,164,65,…) en `index.css` (animaciones).

**Cambiar tipografía display** → `index.html` (link de Google Fonts) + `tailwind.config.js` (`fontFamily.serif`).

**Frecuencia de los rayos** → `src/hooks/useRayEmitter.js`, línea `setTimeout(emitRay, 2000 + Math.random() * 2000)`.

**Trayectoria del sol al scroll** → `src/hooks/useSunScroll.js`, función `loop()`, las constantes `tx`, `ty`, `rot`, `sc`, `opacity`, etc.

**Posición del panel FV** → `src/components/FvPanel.jsx`, propiedades `left` y `bottom` del wrapper.
