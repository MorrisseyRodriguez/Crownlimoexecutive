import '../../components/Problem.css'

export default function ServiceProblem({ headline, lead, painPoints, conclusion, conclusionStrong }) {
  return (
    <section className="problem" aria-labelledby="problem-heading">
      <div className="container problem-inner problem-inner--text-only">
        <div className="problem-text">
          <p className="section-label">The Problem</p>
          <div className="divider" />
          <h2 id="problem-heading" className="section-title reveal">
            {headline}
          </h2>
          <p className="problem-lead reveal reveal-delay-1">{lead}</p>
          <ul className="problem-list" aria-label="Transportation pain points">
            {painPoints.slice(0, 4).map((p, i) => (
              <li key={i} className={`problem-list-item reveal reveal-delay-${(i % 4) + 2}`}>
                <span className="problem-dash" aria-hidden="true">—</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="problem-conclusion reveal reveal-delay-2">
            <p>{conclusion}</p>
            <p>
              <strong>{conclusionStrong}</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
