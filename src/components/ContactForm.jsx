import { useState } from 'react'

const EMAIL_DISPLAY = ['info', 'ervia.tech'].join('@')
const EMAIL_HREF    = 'mailto:' + EMAIL_DISPLAY

function Input({ label, type = 'text', placeholder, value, onChange, error, hint, multiline, rows }) {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      {multiline ? (
        <textarea
          className={`form-input${error ? ' has-error' : ''}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows || 4}
          style={{ minHeight: 96 }}
        />
      ) : (
        <input
          type={type}
          className={`form-input${error ? ' has-error' : ''}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
      {error && <p className="form-error">{error}</p>}
      {hint  && <p className="form-hint">{hint}</p>}
    </div>
  )
}

export default function ContactForm() {
  const [nombre,       setNombre]       = useState('')
  const [email,        setEmail]        = useState('')
  const [mensaje,      setMensaje]      = useState('')
  const [nombreError,  setNombreError]  = useState('')
  const [emailError,   setEmailError]   = useState('')
  const [sent,         setSent]         = useState(false)
  const [nombreEnviado, setNombreEnviado] = useState('')
  const [emailEnviado,  setEmailEnviado]  = useState('')

  function handleSubmit() {
    let nErr = ''
    let eErr = ''
    if (!nombre.trim()) nErr = 'Dinos cómo te llamas.'
    if (!email.trim()) {
      eErr = 'Necesitamos un correo para responderte.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      eErr = 'Ese correo no parece válido. Revísalo.'
    }
    if (nErr || eErr) { setNombreError(nErr); setEmailError(eErr); return }

    setNombreEnviado(nombre.trim().split(' ')[0])
    setEmailEnviado(email.trim())
    setSent(true)
  }

  return (
    <section id="contacto" className="section-deep">
      <div
        className="section-inner cta-grid"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 64, alignItems: 'start' }}
      >
        {/* Left: text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(36px, 4.4vw, 60px)',
            lineHeight: 1.1, letterSpacing: 'var(--tracking-tight)',
            color: 'var(--text-strong)',
          }}>
            15 minutos para saber{' '}
            <span style={{ color: 'var(--green-500)' }}>cuánto recuperas.</span>
          </h2>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--text-body)', margin: 0, maxWidth: 460 }}>
            La primera llamada es gratuita.<br />
            En 15 minutos sabemos cuántas horas pierdes y si podemos recuperarlas.
          </p>
          <p style={{ fontSize: 15, color: 'var(--text-muted)', margin: 0 }}>
            Hoy si quieres. Sin compromiso.<br />
            También por correo:{' '}
            <a href={EMAIL_HREF} style={{ color: 'var(--blue-400)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
              {EMAIL_DISPLAY}
            </a>
          </p>
        </div>

        {/* Right: form card */}
        <div style={{
          background: 'var(--surface-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          padding: 36,
        }}>
          {!sent ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <Input
                label="Nombre"
                placeholder="Tu nombre"
                value={nombre}
                onChange={e => { setNombre(e.target.value); setNombreError('') }}
                error={nombreError}
              />
              <Input
                label="Correo de empresa"
                type="email"
                placeholder="tu@empresa.com"
                value={email}
                onChange={e => { setEmail(e.target.value); setEmailError('') }}
                error={emailError}
                hint="Te respondemos en menos de 24 h."
              />
              <Input
                label="¿Qué proceso te quita más tiempo?"
                multiline
                rows={4}
                placeholder="Cuéntanos en una frase. Con eso preparamos el diagnóstico."
                value={mensaje}
                onChange={e => setMensaje(e.target.value)}
              />
              <button className="btn btn-primary btn-lg" onClick={handleSubmit} style={{ width: '100%' }}>
                Reserva tu diagnóstico gratuito
              </button>
              <p style={{ fontSize: 13, color: 'var(--text-faint)', margin: 0, textAlign: 'center' }}>
                Tus datos no salen de aquí: solo los usamos para preparar tu diagnóstico.
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start', padding: '12px 0' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 48, height: 48, borderRadius: 'var(--radius-pill)',
                background: 'var(--surface-green-tint)',
                border: '1px solid var(--border-green)',
                fontSize: 24, color: 'var(--green-500)',
              }}>
                ✓
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, color: 'var(--text-strong)' }}>
                Recibido, {nombreEnviado}.
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>
                Te escribimos a{' '}
                <span style={{ color: 'var(--text-strong)', fontWeight: 600 }}>{emailEnviado}</span>{' '}
                en menos de 24 h para agendar tus 15 minutos.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
