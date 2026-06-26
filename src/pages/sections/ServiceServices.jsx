import './ServiceServices.css'

export default function ServiceServices({ title, services }) {
  return (
    <section className="service-breakdown" id="services" aria-labelledby="services-breakdown-heading">
      <div className="container">
        <div className="service-breakdown-header">
          <p className="section-label">What We Handle</p>
          <div className="divider" />
          <h2 id="services-breakdown-heading" className="section-title reveal">
            {title}
          </h2>
        </div>

        <div className="service-breakdown-grid">
          {services.map((s, i) => (
            <div key={i} className={`service-breakdown-item reveal reveal-delay-${(i % 3) + 1}`} role="article">
              <div className="service-breakdown-num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="service-breakdown-title">{s.title}</h3>
              <p className="service-breakdown-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
