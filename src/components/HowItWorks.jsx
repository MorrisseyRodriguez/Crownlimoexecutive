import './HowItWorks.css'

const steps = [
  {
    number: '01',
    title: 'Request Quote',
    body: 'Share your transportation needs through our simple quote form.',
  },
  {
    number: '02',
    title: 'Receive Customized Transportation Plan',
    body: 'A member of our team reaches out with a tailored plan that fits your schedule.',
  },
  {
    number: '03',
    title: 'Professional Chauffeur Assigned',
    body: 'Your dedicated, vetted chauffeur is confirmed and briefed on every detail.',
  },
  {
    number: '04',
    title: 'Arrive On Time & Prepared',
    body: 'Your driver handles everything. You focus on what matters.',
  },
]

const scrollToQuote = () => {
  document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
}

export default function HowItWorks() {
  return (
    <section className="how" aria-labelledby="how-heading">
      <div className="container">
        <div className="how-header">
          <p className="section-label">The Process</p>
          <div className="divider" />
          <h2 id="how-heading" className="section-title reveal">
            Transportation Handled In Four Simple Steps
          </h2>
        </div>

        <div className="how-steps" role="list">
          {steps.map((s, i) => (
            <div key={i} className={`how-step reveal reveal-delay-${i + 1}`} role="listitem">
              <div className="how-step-left">
                <div className="how-step-num" aria-hidden="true">{s.number}</div>
                {i < steps.length - 1 && <div className="how-step-line" aria-hidden="true" />}
              </div>
              <div className="how-step-content">
                <h3 className="how-step-title">{s.title}</h3>
                <p className="how-step-body">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="how-cta reveal">
          <button className="btn-primary how-cta-btn" onClick={scrollToQuote}>
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
