import aspirationalImg from '../HPImages/RelaxedEA.png'
import './Aspirational.css'

const scrollToQuote = () => {
  document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Aspirational() {
  return (
    <section className="aspirational" aria-labelledby="aspirational-heading">
      <div className="container">
        <div className="aspirational-header">
          <p className="section-label">The Experience</p>
          <div className="divider" />
          <h2 id="aspirational-heading" className="section-title reveal">
            When Transportation Is Completely Handled
          </h2>
        </div>

        <div className="aspirational-inner">
          <div className="aspirational-image-wrap reveal">
            <img src={aspirationalImg} alt="" className="aspirational-image" aria-hidden="true" loading="lazy" decoding="async" />
            <div className="aspirational-badge" aria-label="Serving Southern California Since 1994">
              <span className="aspirational-badge-year">1994</span>
              <span className="aspirational-badge-text">Serving SoCal</span>
            </div>
          </div>

          <div className="aspirational-text">
            <div className="aspirational-body">
              <p className="aspirational-pull reveal reveal-delay-1">
                The day moves exactly as it should.
              </p>
              <div className="aspirational-paragraphs reveal reveal-delay-2">
                <p>Your chauffeur is already there when you need them. Every pickup, every route, every detail has been handled before it reaches your attention.</p>
                <p>You have time to prepare for the next meeting, take an important call, or catch your breath before the day moves on.</p>
                <p>One meeting ends. The next destination is already handled. Your driver is waiting, your route is planned, and your day keeps moving without interruption.</p>
              </div>
              <div className="aspirational-close reveal reveal-delay-3">
                <p>You arrive on time. Prepared. Professional.</p>
                <p className="aspirational-close-strong">The way your day should feel when transportation is no longer something you have to manage.</p>
              </div>
            </div>

            <button className="btn-primary aspirational-cta reveal reveal-delay-3" onClick={scrollToQuote}>
              Get Your Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
