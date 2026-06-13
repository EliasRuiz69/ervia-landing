const STEPS = [
  {
    n: '01',
    title: 'Diagnóstico',
    body: 'Una llamada de 15 minutos. Identificamos qué proceso te cuesta más tiempo y dinero ahora mismo.',
  },
  {
    n: '02',
    title: 'Diseño',
    body: 'Construimos la solución a medida. Sin plantillas, sin funciones que no vas a usar.',
  },
  {
    n: '03',
    title: 'Implementación',
    body: 'Lo desplegamos en tu entorno. Formamos a tu equipo para que funcione desde el primer día.',
  },
  {
    n: '04',
    title: 'Soporte continuo',
    body: 'No desaparecemos. Ajustamos y mejoramos contigo.',
  },
]

export default function Proceso() {
  return (
    <section id="proceso" className="section">
      <div className="section-inner">
        <span className="overline overline-green">Cómo trabajamos</span>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(30px, 3.6vw, 48px)',
          lineHeight: 1.15, letterSpacing: 'var(--tracking-tight)',
          color: 'var(--text-strong)', margin: '16px 0 0', maxWidth: 760,
        }}>
          4 pasos. Del diagnóstico al resultado.
        </h2>

        <div
          className="steps-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 40, marginTop: 56 }}
        >
          {STEPS.map(({ n, title, body }) => (
            <div key={n} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span
                className="gradient-text"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 88, lineHeight: 1 }}
              >
                {n}
              </span>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: 24, color: 'var(--text-strong)',
              }}>
                {title}
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>

        <a href="#contacto" className="link-green" style={{ marginTop: 56 }}>
          Empezar con el diagnóstico →
        </a>
      </div>
    </section>
  )
}
