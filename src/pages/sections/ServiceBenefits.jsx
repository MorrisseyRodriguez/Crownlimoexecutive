import '../../components/Benefits.css'

export default function ServiceBenefits({ title, benefits }) {
  return (
    <section className="benefits" aria-labelledby="benefits-heading">
      <div className="container">
        <div className="benefits-header">
          <p className="section-label">Why It Matters</p>
          <div className="divider" />
          <h2 id="benefits-heading" className="section-title reveal">
            {title}
          </h2>
          <p className="section-subtitle reveal reveal-delay-1">
            When transportation is handled properly, the benefits extend far beyond getting from one place to another.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <div key={i} className={`benefit-card reveal reveal-delay-${i + 1}`} role="article">
              <div className="benefit-card-icon" aria-hidden="true">
                {b.icon || (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                )}
              </div>
              <h3 className="benefit-card-title">{b.title}</h3>
              <p className="benefit-card-body">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
