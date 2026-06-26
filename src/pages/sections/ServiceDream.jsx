import '../../components/Aspirational.css'
import './ServiceDream.css'

const scrollToQuote = () => {
  document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
}

export default function ServiceDream({ title, pull, body, close, closeStrong }) {
  return (
    <section className="aspirational" aria-labelledby="dream-heading">
      <div className="container service-dream-inner">
        <div className="aspirational-text service-dream-text">
          <p className="section-label">The Experience</p>
          <div className="divider" />
          <h2 id="dream-heading" className="section-title reveal">
            {title}
          </h2>

          <div className="aspirational-body">
            <p className="aspirational-pull reveal reveal-delay-1">{pull}</p>
            <div className="aspirational-paragraphs reveal reveal-delay-2">
              {body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="aspirational-close reveal reveal-delay-3">
              <p>{close}</p>
              <p className="aspirational-close-strong">{closeStrong}</p>
            </div>
          </div>

          <button className="btn-primary aspirational-cta reveal reveal-delay-3" onClick={scrollToQuote}>
            Get Your Quote
          </button>
        </div>
      </div>
    </section>
  )
}
