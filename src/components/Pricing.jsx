const PLANS = [
  {
    overline: 'Diagnóstico',
    price: 'Gratuito',
    priceSuffix: null,
    features: [
      'Llamada de 15 minutos con un especialista',
      'Análisis de tu proceso más crítico',
      'Recomendaciones concretas y hoja de ruta inicial',
      'Sin compromiso de contratación',
    ],
    cta: 'Reserva tu diagnóstico',
    variant: 'outline',
    featured: false,
  },
  {
    overline: 'Automatización esencial',
    price: '490 €',
    priceSuffix: '/mes, desde',
    features: [
      '1 proceso automatizado a medida',
      'Integración con tus herramientas actuales',
      '30 días de ajustes incluidos',
      'Soporte por email',
    ],
    cta: 'Ver qué automatizo primero',
    variant: 'secondary',
    featured: false,
  },
  {
    overline: 'Implementación completa',
    price: '4.900 €',
    priceSuffix: ' desde',
    features: [
      'Análisis completo de procesos',
      'Hasta 3 automatizaciones simultáneas',
      'Asistente de IA personalizado para atención al cliente',
      'Soporte prioritario durante 3 meses',
      'Formación del equipo incluida',
    ],
    cta: 'Quiero la implementación completa',
    variant: 'primary',
    featured: true,
  },
]

export default function Pricing() {
  return (
    <section id="precios" className="section">
      <div className="section-inner">
        <span className="overline overline-green">Precios</span>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(30px, 3.6vw, 48px)',
          lineHeight: 1.15, letterSpacing: 'var(--tracking-tight)',
          color: 'var(--text-strong)', margin: '16px 0 0', maxWidth: 760,
        }}>
          Sin sorpresas. Empiezas gratis.
        </h2>
        <p style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--text-body)', margin: '16px 0 0', maxWidth: 600 }}>
          El tiempo que pierdes cada semana tiene un precio. Estas son las tres formas de recuperarlo.
        </p>

        <div
          className="pricing-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 24, marginTop: 48, alignItems: 'stretch' }}
        >
          {PLANS.map(({ overline, price, priceSuffix, features, cta, variant, featured }) => (
            <div
              key={overline}
              style={{
                position: 'relative',
                background: featured ? 'var(--surface-deep)' : 'var(--surface-card)',
                border: `1px solid ${featured ? 'var(--border-green)' : 'var(--border-subtle)'}`,
                borderRadius: 'var(--radius-lg)',
                padding: '36px 32px',
                display: 'flex', flexDirection: 'column', gap: 24,
                ...(featured ? { boxShadow: '0 0 32px rgba(7, 249, 145, 0.12)' } : {}),
              }}
            >
              {featured && (
                <span style={{
                  position: 'absolute', top: -12, left: 32,
                  fontSize: 12, fontWeight: 600,
                  letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase',
                  color: 'var(--text-on-green)', background: 'var(--green-500)',
                  borderRadius: 'var(--radius-pill)', padding: '4px 12px',
                }}>
                  Recomendado
                </span>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span
                  className="overline"
                  style={{ color: featured ? 'var(--green-500)' : 'var(--text-muted)' }}
                >
                  {overline}
                </span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 44, lineHeight: 1, color: 'var(--text-strong)' }}>
                  {price}
                  {priceSuffix && (
                    <span style={{ fontSize: 18, fontWeight: 600, color: 'var(--text-muted)' }}>{priceSuffix}</span>
                  )}
                </span>
              </div>

              <ul style={{
                listStyle: 'none', padding: 0, margin: 0,
                display: 'flex', flexDirection: 'column', gap: 12,
                fontSize: 15, lineHeight: 1.5, color: 'var(--text-body)', flex: 1,
              }}>
                {features.map((f, i) => (
                  <li
                    key={f}
                    style={{
                      borderBottom: i < features.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                      paddingBottom: i < features.length - 1 ? 12 : 0,
                    }}
                  >
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#contacto" className={`btn btn-${variant} btn-md`} style={{ width: '100%', justifyContent: 'center' }}>
                {cta}
              </a>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 13, color: 'var(--text-faint)', margin: '24px 0 0' }}>
          Precios orientativos de ejemplo. Tus datos no salen de tu entorno: trabajamos sobre tus herramientas, con tus permisos.
        </p>
      </div>
    </section>
  )
}
