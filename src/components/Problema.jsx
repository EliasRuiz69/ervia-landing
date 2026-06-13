const STATEMENTS = [
  { text: 'Tu equipo responde las mismas preguntas cada día.', strong: false },
  { text: 'Los leads que llegan fuera de horario, nadie los atiende hasta el día siguiente.', strong: false },
  { text: 'Contratar más gente para crecer no sale a cuenta.', strong: false },
  { text: 'Y mientras tanto, la competencia responde más rápido.', strong: true },
]

export default function Problema() {
  return (
    <section className="section">
      <div className="section-inner">
        <span className="overline overline-blue">El problema</span>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(30px, 3.6vw, 48px)',
          lineHeight: 1.15, letterSpacing: 'var(--tracking-tight)',
          color: 'var(--text-strong)', margin: '16px 0 0', maxWidth: 760,
        }}>
          ¿Cuántas consultas llevan más de 24 horas sin respuesta?
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28, margin: '56px 0 0', maxWidth: 820 }}>
          {STATEMENTS.map(({ text, strong }, i) => (
            <p key={i} style={{
              fontSize: 'clamp(20px, 2.4vw, 32px)',
              lineHeight: 1.4,
              color: strong ? 'var(--text-strong)' : 'var(--text-body)',
              margin: 0,
            }}>
              {text}
            </p>
          ))}
        </div>

        <a href="#contacto" className="link-green" style={{ marginTop: 48 }}>
          Calcular cuánto me cuesta →
        </a>
      </div>
    </section>
  )
}
