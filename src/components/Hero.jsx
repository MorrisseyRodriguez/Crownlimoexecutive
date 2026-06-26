import heroImg from '../HPImages/Executivelookingoutwindohero.png'
import './Hero.css'

const scrollToQuote = () => {
  document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
}

const trustItems = [
  'Serving Southern California Since 1994',
  '1,900+ Combined Reviews Across Major Platforms',
  '15+ Industry Awards',
  'Professional Chauffeurs & Executive Fleet',
]

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-bg">
        <img src={heroImg} alt="" className="hero-image" aria-hidden="true" />
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

        <div className="hero-trust" role="list" aria-label="Trust indicators">
          {trustItems.map((item, i) => (
            <div key={i} className="hero-trust-item" role="listitem">
              <svg className="hero-trust-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
