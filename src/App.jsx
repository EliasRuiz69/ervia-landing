import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import Problema     from './components/Problema'
import Servicios    from './components/Servicios'
import Casos        from './components/Casos'
import Proceso      from './components/Proceso'
import Pricing      from './components/Pricing'
import FAQ          from './components/FAQ'
import ContactForm  from './components/ContactForm'
import Footer       from './components/Footer'
import CookieBanner from './components/CookieBanner'

export default function App() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', color: 'var(--text-body)', background: 'var(--navy-900)', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Problema />
      <Servicios />
      <Casos />
      <Proceso />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
      <CookieBanner />
    </div>
  )
}
