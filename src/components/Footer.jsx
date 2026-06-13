const EMAIL_DISPLAY = ['info', 'ervia.tech'].join('@')
const EMAIL_HREF    = 'mailto:' + EMAIL_DISPLAY

const SOCIAL = [
  {
    label: 'LinkedIn', href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4"/><rect x="2" y="9" width="4" height="12" rx="1"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'X', href: '#',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram', href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'YouTube', href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook', href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
]

const LEGAL = [
  { label: 'Aviso Legal',                  href: '#' },
  { label: 'Política de Privacidad',       href: '/politica-de-privacidad' },
  { label: 'Política de Cookies',          href: '/politica-de-cookies' },
  { label: 'Condiciones de Contratación',  href: '#' },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--navy-950)' }}>
      <div
        className="section-inner footer-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 56,
          paddingBottom: 0,
          paddingTop: 72,
        }}
      >
        {/* Contacto */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
          <span className="overline overline-blue">Contacto</span>
          <img
            src="/assets/ervia-logo-horizontal-transparent.png"
            alt="ERVIA"
            style={{ height: 30, display: 'block' }}
          />
          <a href={EMAIL_HREF} className="footer-link">{EMAIL_DISPLAY}</a>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'var(--text-muted)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            Mérida (México)
          </span>
        </div>

        {/* Enlaces sociales */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
          <span className="overline overline-blue">Enlaces</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, maxWidth: 280 }}>
            {SOCIAL.map(({ label, href, icon }) => (
              <a key={label} href={href} aria-label={label} className="social-icon">
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
          <span className="overline overline-blue">Legal</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {LEGAL.map(({ label, href }) => (
              <a key={label} href={href} className="footer-link">{label}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div
        className="footer-bottom"
        style={{
          maxWidth: 1140, margin: '56px auto 0',
          padding: '24px 32px',
          borderTop: '1px solid var(--border-subtle)',
        }}
      >
        <span style={{ fontSize: 13, color: 'var(--text-faint)' }}>
          © 2026{' '}
          <a href="https://www.ervia.tech" style={{ color: 'var(--blue-400)', textDecoration: 'none' }}>
            ERVIA
          </a>
          . Todos los derechos reservados.
        </span>
      </div>
    </footer>
  )
}
