import { useState } from 'react'

const FAQS = [
  {
    q: '¿Cuánto cuesta?',
    a: 'Depende del proceso y del alcance.\nPor eso hacemos el diagnóstico primero: no tiene sentido darte un precio antes de saber qué necesitas.\nEl diagnóstico es gratuito y sin compromiso.',
  },
  {
    q: '¿Cuánto tarda en estar listo?',
    a: 'Las primeras automatizaciones suelen estar operativas en 2–4 semanas.\nLos proyectos más complejos pueden llevar 6–8 semanas.\nTe lo confirmamos antes de empezar, no cuando ya hemos cobrado.',
  },
  {
    q: 'Mi negocio es muy específico. ¿Funcionará igualmente?',
    a: 'Sí. No aplicamos plantillas.\nCada implementación parte del análisis de tu proceso concreto.\nHemos trabajado con sectores muy distintos.',
  },
  {
    q: '¿Qué pasa si algo falla después de implementarlo?',
    a: 'Todos los proyectos incluyen soporte después de la implementación.\nSi algo no funciona como debería, lo resolvemos sin coste adicional.\nAdemás, formamos a tu equipo y te entregamos la documentación: no dependes de nosotros para el día a día.',
  },
  {
    q: '¿Qué resultados puedo esperar?',
    a: 'Depende de lo que automaticemos.\nEn atención al cliente: la primera respuesta pasa de horas a minutos. Cero leads que se enfrían por responder tarde.\nEn procesos internos: los equipos recuperan entre 10 y 20 horas semanales.\nTe damos estimaciones reales en el diagnóstico, no cifras inventadas.',
  },
  {
    q: '¿Funciona con las herramientas que ya uso?',
    a: 'En la mayoría de los casos, sí.\nTrabajamos con HubSpot, Salesforce, Notion, Google Workspace, Microsoft 365, Slack, WhatsApp Business y muchos más.\nSi tienes un sistema propio, lo analizamos en el diagnóstico. Tus datos no salen de tu entorno.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(-1)

  return (
    <section id="faq" className="section">
      <div className="section-inner-narrow">
        <span className="overline overline-green">FAQ</span>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(30px, 3.6vw, 48px)',
          lineHeight: 1.15, letterSpacing: 'var(--tracking-tight)',
          color: 'var(--text-strong)', margin: '16px 0 0', maxWidth: 760,
        }}>
          6 dudas que frenan la decisión
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 40, borderTop: '1px solid var(--border-subtle)' }}>
          {FAQS.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
              <button
                className="faq-btn"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <span style={{
                  fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 600,
                  color: 'var(--green-500)', lineHeight: 1, flexShrink: 0,
                  transition: 'transform var(--duration-base) var(--ease-out)',
                  display: 'inline-block',
                  transform: open === i ? 'rotate(0deg)' : 'rotate(0deg)',
                }}>
                  {open === i ? '−' : '+'}
                </span>
              </button>

              {open === i && (
                <p style={{
                  fontSize: 16, lineHeight: 1.65,
                  color: 'var(--text-body)', margin: 0,
                  padding: '0 4px 24px', whiteSpace: 'pre-line',
                  maxWidth: 660,
                }}>
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>

        <a href="#contacto" className="link-green" style={{ marginTop: 40 }}>
          ¿Tienes otra duda? Habla con nosotros →
        </a>
      </div>
    </section>
  )
}
