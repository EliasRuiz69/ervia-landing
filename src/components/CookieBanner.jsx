import { useState, useEffect } from 'react'

const STORAGE_KEY = 'ervia_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  function reject() {
    localStorage.setItem(STORAGE_KEY, 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: 'var(--navy-900)',
        borderTop: '1px solid var(--border-subtle)',
        padding: '20px 24px',
      }}
    >
      <div
        style={{
          maxWidth: 1140,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: 24,
          flexWrap: 'wrap',
        }}
      >
        <p
          style={{
            flex: 1,
            minWidth: 240,
            fontSize: 14,
            lineHeight: 1.6,
            color: 'var(--text-muted)',
            margin: 0,
          }}
        >
          Usamos cookies propias y de terceros para analizar el tráfico y mejorar tu experiencia.
          Consulta nuestra{' '}
          <a
            href="/politica-de-cookies"
            style={{ color: 'var(--blue-400)', textDecoration: 'underline', textUnderlineOffset: 3 }}
          >
            Política de Cookies
          </a>
          .
        </p>

        <div
          style={{
            display: 'flex',
            gap: 12,
            flexShrink: 0,
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={reject}
            style={{
              padding: '10px 20px',
              fontSize: 14,
              fontWeight: 500,
              color: 'var(--text-muted)',
              background: 'transparent',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            Solo necesarias
          </button>
          <button
            onClick={accept}
            style={{
              padding: '10px 20px',
              fontSize: 14,
              fontWeight: 600,
              color: 'var(--navy-950)',
              background: 'var(--green-500)',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  )
}
