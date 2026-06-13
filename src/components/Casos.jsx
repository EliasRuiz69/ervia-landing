const CASES = [
  {
    sector: 'Gestión de consultas',
    title: '18 horas recuperadas. 72 % de consultas sin intervención humana.',
    quote: '«Gestionaban más de 60 consultas diarias a mano. Implementamos un asistente de IA que resuelve el 72 % de ellas sin que intervenga ninguna persona.»',
    metrics: [
      { value: '18 h',       label: 'semanales recuperadas por el equipo' },
      { value: '6 h → 3 min', label: 'tiempo de respuesta' },
      { value: '35',          label: 'leads calificados solos cada mes' },
    ],
  },
  {
    sector: 'Informes y operaciones',
    title: '12 horas manuales eliminadas. Informes automáticos cada lunes.',
    quote: '«Su equipo invertía 12 horas a la semana generando informes a mano. Ahora llegan solos al correo cada lunes a las 8:00.»',
    metrics: [
      { value: '12 h',  label: 'semanales liberadas desde el primer mes' },
      { value: '−90 %', label: 'de errores en los informes' },
      { value: '6 sem', label: 'hasta retorno positivo de la inversión' },
    ],
  },
  {
    sector: 'Captación de leads',
    title: 'De 14 horas de espera a 2 minutos de respuesta.',
    quote: '«El 64 % de sus leads llegaban fuera del horario laboral. Nadie respondía hasta el día siguiente. Ahora responden solos en menos de 2 minutos.»',
    metrics: [
      { value: '< 2 min', label: 'de primera respuesta (antes, 14 horas)' },
      { value: '+80 %',   label: 'de leads contactados en las primeras 24 h' },
      { value: '7',       label: 'contratos cerrados en el primer mes' },
    ],
  },
]

function MetricValue({ value, primary }) {
  return (
    <span style={{
      fontFamily: 'var(--font-display)', fontWeight: 700,
      fontSize: 44, lineHeight: 1,
      color: primary ? 'var(--green-500)' : 'var(--text-strong)',
    }}>
      {value}
    </span>
  )
}

export default function Casos() {
  return (
    <section id="casos" className="section-deep">
      <div className="section-inner">
        <span className="overline overline-green">Casos de éxito</span>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(30px, 3.6vw, 48px)',
          lineHeight: 1.15, letterSpacing: 'var(--tracking-tight)',
          color: 'var(--text-strong)', margin: '16px 0 0', maxWidth: 760,
        }}>
          Resultados, no promesas
        </h2>
        <p style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--text-body)', margin: '16px 0 0', maxWidth: 600 }}>
          Lo que pasa cuando un proceso deja de hacerse a mano.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 48 }}>
          {CASES.map(({ sector, title, quote, metrics }, i) => (
            <div
              key={sector}
              style={{
                background: 'var(--surface-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: 40,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 40,
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <span className="overline overline-muted">{sector}</span>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: 'clamp(24px, 2.6vw, 34px)',
                  lineHeight: 1.2, color: 'var(--text-strong)',
                }}>
                  {title}
                </h3>
                <p style={{
                  fontSize: 17, lineHeight: 1.6, fontStyle: 'italic',
                  color: 'var(--text-body)', margin: 0,
                  borderLeft: '2px solid var(--border-default)',
                  paddingLeft: 16,
                }}>
                  {quote}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, justifyContent: 'center' }}>
                {metrics.map(({ value, label }, mi) => (
                  <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <MetricValue value={value} primary={mi === 0} />
                    <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 13, color: 'var(--text-faint)', margin: '24px 0 0' }}>
          Cifras de ejemplo, pendientes de sustituir por datos reales de cliente antes de publicar.
        </p>
        <a href="#proceso" className="link-green" style={{ marginTop: 16 }}>
          Ver el proceso completo →
        </a>
      </div>
    </section>
  )
}
