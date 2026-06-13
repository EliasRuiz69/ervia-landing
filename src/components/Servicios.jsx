const SERVICES = [
  {
    overline: 'Automatización de procesos',
    title: 'Lo que hoy tarda 4 horas, mañana tarda 0.',
    bullets: [
      'Flujos automáticos para gestión de datos, documentos y comunicaciones internas',
      'Integración con las herramientas que ya usas (CRM, ERP, email, hojas de cálculo)',
      'Informes automáticos sin intervención manual',
    ],
    cta: { label: 'Ver cómo funciona →', href: '#proceso' },
  },
  {
    overline: 'Atención al cliente automatizada',
    title: 'Primeras respuestas en menos de 2 minutos. A cualquier hora.',
    bullets: [
      'Asistente de IA entrenado con tu información, tus precios y tu tono de marca',
      'Derivación a una persona cuando la consulta lo requiere',
      'Seguimiento automático de leads y presupuestos sin acción manual',
    ],
    cta: { label: 'Calcular mi ahorro →', href: '#contacto' },
  },
  {
    overline: 'Consultoría de IA',
    title: 'En 15 minutos sabemos cuánto puedes recuperar.',
    bullets: [
      'Mapa de procesos que puedes automatizar, con priorización',
      'Hoja de ruta con estimación de ahorro por proceso',
      'De la primera reunión al último ajuste, sin desaparecer',
    ],
    cta: { label: 'Hablar 15 min →', href: '#contacto' },
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="section">
      <div className="section-inner">
        <span className="overline overline-green">Servicios</span>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(30px, 3.6vw, 48px)',
          lineHeight: 1.15, letterSpacing: 'var(--tracking-tight)',
          color: 'var(--text-strong)', margin: '16px 0 0', maxWidth: 760,
        }}>
          Lo que automatizamos
        </h2>
        <p style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--text-body)', margin: '16px 0 0', maxWidth: 600 }}>
          Tres frentes, un objetivo: recuperar tu tiempo y tus leads.
        </p>

        <div
          className="services-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 24, marginTop: 48 }}
        >
          {SERVICES.map(({ overline, title, bullets, cta }) => (
            <div key={overline} className="card">
              <span className="overline overline-muted">{overline}</span>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: 26, lineHeight: 1.2,
                color: 'var(--text-strong)',
              }}>
                {title}
              </h3>
              <ul style={{
                listStyle: 'none', padding: 0, margin: 0,
                display: 'flex', flexDirection: 'column', gap: 12,
                fontSize: 15, lineHeight: 1.55, color: 'var(--text-body)',
                flex: 1,
              }}>
                {bullets.map((b) => (
                  <li key={b} style={{ display: 'flex', gap: 10 }}>
                    <span style={{ color: 'var(--green-500)', flexShrink: 0 }}>—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a href={cta.href} className="link-blue" style={{ marginTop: 'auto', fontSize: 15 }}>
                {cta.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
