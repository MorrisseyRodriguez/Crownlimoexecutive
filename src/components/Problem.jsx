import problemImg from '../HPImages/EAstressed.png'
import './Problem.css'

const painPoints = [
  'An airport pickup that arrives late when timing matters most.',
  'A vehicle or driver that sends the wrong message to an important client.',
  'Coordinating executive travel across shifting schedules.',
  'Travel delays that turn productive hours into wasted time.',
]

export default function Problem() {
  return (
    <section className="problem" aria-labelledby="problem-heading">
      <div className="container">
        <div className="problem-header">
          <p className="section-label">The Problem</p>
          <div className="divider" />
          <h2 id="problem-heading" className="section-title reveal">
            Transportation Shouldn't Be Another Thing You Have To Worry About
          </h2>
        </div>

        <div className="problem-inner">
          <div className="problem-text">
            <p className="problem-lead reveal reveal-delay-1">
              You already have enough on your plate.
            </p>
            <ul className="problem-list" aria-label="Transportation pain points">
              {painPoints.map((p, i) => (
                <li key={i} className={`problem-list-item reveal reveal-delay-${i + 2}`}>
                  <span className="problem-dash" aria-hidden="true">—</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="problem-conclusion reveal reveal-delay-2">
              <p>
                Transportation creates more friction than it should, for executives, business owners, and the teams that support them.
              </p>
              <p>
                Professional transportation isn't just about luxury.<br />
                <strong>It's about removing the unnecessary friction from your day.</strong>
              </p>
            </div>
          </div>

          <div className="problem-image-wrap reveal reveal-delay-1">
            <img src={problemImg} alt="" className="problem-image" aria-hidden="true" loading="lazy" decoding="async" />
            <div className="problem-image-accent" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
