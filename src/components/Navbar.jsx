const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#casos',     label: 'Casos' },
  { href: '#proceso',   label: 'Proceso' },
  { href: '#precios',   label: 'Precios' },
  { href: '#faq',       label: 'FAQ' },
]

export default function Navbar() {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 40,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
      padding: '14px 32px',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'rgba(15, 23, 42, 0.78)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
    }}>
      <a href="#inicio" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
        <img
          src="/assets/ervia-logo-horizontal-transparent.png"
          alt="ERVIA"
          style={{ height: 32, display: 'block' }}
        />
      </a>

      <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="nav-link">{label}</a>
          ))}
        </div>
        <a href="#contacto" className="btn btn-outline btn-sm nav-cta" style={{ marginLeft: 8 }}>
          Diagnóstico gratuito
        </a>
      </div>
    </nav>
  )
}
