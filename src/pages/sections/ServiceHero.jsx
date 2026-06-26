import '../../components/Hero.css'
import './ServiceHero.css'

const scrollToQuote = () => {
  document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
}

export default function ServiceHero({ eyebrow, title, subtitle, trustItems }) {
  return (
    <section className="hero service-hero" aria-labelledby="hero-heading">
      <div className="container hero-content">
        <p className="hero-eyebrow">{eyebrow}</p>
        <h1 id="hero-heading" className="hero-title">
          {title}
        </h1>
        <p className="hero-subtitle">{subtitle}</p>
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
