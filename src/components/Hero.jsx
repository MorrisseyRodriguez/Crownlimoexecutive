import heroImg from '../HPImages/Executivelookingoutwindohero.png'
import './Hero.css'

const scrollToQuote = () => {
  document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-bg">
        <img src={heroImg} alt="" className="hero-image" aria-hidden="true" loading="eager" fetchpriority="high" />
        <div className="hero-overlay" />
      </div>

      <div className="container hero-content">
        <p className="hero-eyebrow">Executive Transportation</p>
        <h1 id="hero-heading" className="hero-title">
          Luxury Transportation For Professionals Who Value Their Time
        </h1>
        <p className="hero-subtitle">
          Since 1994, Crown Limousine LA has helped attorneys, executives, consultants, business owners, and corporate teams arrive on time, prepared, and professionally represented throughout Los Angeles and nearby cities.
        </p>
        <div className="hero-actions">
          <button className="btn-primary hero-btn" onClick={scrollToQuote}>
            Get Your Quote
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
