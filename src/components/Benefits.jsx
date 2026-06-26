import './Benefits.css'

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Productivity',
    body: 'Use travel time to prepare for meetings, return calls, review notes, or simply reset.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Professional Representation',
    body: "You've built a reputation for being prepared, reliable, and professional. Your transportation should reflect the same standard. Every arrival reinforces the image you've worked hard to create.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Peace Of Mind',
    body: 'Know your transportation is already handled so you can focus on the things that actually deserve your attention.',
  },
]

export default function Benefits() {
  return (
    <section className="benefits" aria-labelledby="benefits-heading">
      <div className="container">
        <div className="benefits-header">
          <p className="section-label">Why It Matters</p>
          <div className="divider" />
          <h2 id="benefits-heading" className="section-title reveal">
            More Than A Ride From Point A To Point B
          </h2>
          <p className="section-subtitle reveal reveal-delay-1">
            When transportation is handled properly, the benefits extend far beyond getting from one place to another.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <div key={i} className={`benefit-card reveal reveal-delay-${i + 1}`} role="article">
              <div className="benefit-card-icon" aria-hidden="true">
                {b.icon}
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
