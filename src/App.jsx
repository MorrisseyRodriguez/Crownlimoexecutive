import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}
import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Aspirational from './components/Aspirational'
import Benefits from './components/Benefits'
import Services from './components/Services'
import Fleet from './components/Fleet'
import Stats from './components/Stats'
import Reviews from './components/Reviews'
import HowItWorks from './components/HowItWorks'
import QuoteForm from './components/QuoteForm'
import Footer from './components/Footer'
import MobileCTA from './components/MobileCTA'
import ServicePage from './pages/ServicePage'
import { servicePages } from './pages/servicePageData'
import useScrollReveal from './hooks/useScrollReveal'

function HomePage() {
  useScrollReveal()
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <Problem />
        <Aspirational />
        <Benefits />
        <Services />
        <Fleet />
        <Stats />
        <Reviews />
        <HowItWorks />
        <QuoteForm />
      </main>
      <Footer />
      <MobileCTA menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<HomePage />} />
      {servicePages.map(page => (
        <Route
          key={page.slug}
          path={`/${page.slug}`}
          element={<ServicePage page={page} />}
        />
      ))}
      </Routes>
    </>
  )
}
