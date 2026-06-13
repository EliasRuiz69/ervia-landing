import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

const MUX_SRC = 'https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8'

export default function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    let hls

    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: false })
      hls.loadSource(MUX_SRC)
      hls.attachMedia(v)
    } else if (v.canPlayType('application/vnd.apple.mpegurl')) {
      v.src = MUX_SRC
    }

    v.muted = true
    const p = v.play()
    if (p?.catch) p.catch(() => {})

    return () => { if (hls) hls.destroy() }
  }, [])

  return (
    <header
      id="inicio"
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: 'calc(100dvh - 61px)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background video */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        autoPlay
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', opacity: 0.4, pointerEvents: 'none',
        }}
      />

      {/* Diagonal overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(105deg, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.55) 55%, rgba(15,23,42,0.35) 100%)',
      }} />

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(to top, var(--navy-900) 0%, rgba(15,23,42,0) 38%)',
      }} />

      {/* Content */}
      <div
        className="hero-inner"
        style={{
          position: 'relative', width: '100%',
          maxWidth: 1140, margin: '0 auto',
          padding: '96px 32px 120px',
        }}
      >
        <span className="overline overline-green">Agencia de automatizaciones e IA</span>

        <h1
          className="hero-title"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(44px, 6.5vw, 86px)',
            lineHeight: 1.05,
            letterSpacing: 'var(--tracking-tight)',
            color: 'var(--text-strong)',
            margin: '20px 0 0',
            maxWidth: 880,
          }}
        >
          Deja de perder leads{' '}
          <span style={{ color: 'var(--green-500)' }}>por responder tarde.</span>
        </h1>

        <p style={{
          fontSize: 'clamp(17px, 1.6vw, 22px)',
          lineHeight: 1.6,
          color: 'var(--text-body)',
          margin: '28px 0 0',
          maxWidth: 560,
        }}>
          Tu equipo pierde horas respondiendo lo mismo.<br />
          Los leads que llegan fuera de horario, no los atiende nadie.<br />
          Lo automatizamos en menos de 4 semanas.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start', marginTop: 40 }}>
          <a href="#contacto" className="btn btn-primary btn-lg">
            Solicita tu diagnóstico gratuito
          </a>
          <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>
            15 minutos. Sin compromiso. Respuesta en menos de 24 h.
          </span>
        </div>
      </div>
    </header>
  )
}
