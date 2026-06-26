import { useState, useEffect } from 'react'
import { vehicles } from '../../data/vehicles'
import '../../components/Fleet.css'

function FleetCard({ v }) {
  const [imgIndex, setImgIndex] = useState(0)

  const prev = () => setImgIndex(i => (i - 1 + v.images.length) % v.images.length)
  const next = () => setImgIndex(i => (i + 1) % v.images.length)

  return (
    <div className="fleet-card">
      <div className="fleet-card-img">
        {v.images.map((src, si) => (
          <img
            key={si}
            src={src}
            alt={si === 0 ? `${v.class} exterior` : `${v.class} interior`}
            className={`fleet-card-photo${imgIndex === si ? ' fleet-card-photo--active' : ''}`}
          />
        ))}
        {v.label && <span className="fleet-card-badge">{v.label}</span>}
        <button className="fleet-img-arrow fleet-img-arrow--left" onClick={prev} aria-label="Previous photo">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button className="fleet-img-arrow fleet-img-arrow--right" onClick={next} aria-label="Next photo">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
        <div className="fleet-img-dots">
          {v.images.map((_, di) => (
            <button
              key={di}
              className={`fleet-img-dot${imgIndex === di ? ' fleet-img-dot--active' : ''}`}
              onClick={() => setImgIndex(di)}
              aria-label={di === 0 ? 'Exterior photo' : 'Interior photo'}
            />
          ))}
        </div>
      </div>

      <div className="fleet-card-body">
        <h3 className="fleet-card-name">{v.class}</h3>
        <p className="fleet-card-usage">{v.usage}</p>
        <p className="fleet-card-models">{v.models}</p>
        <div className="fleet-card-divider" />
        <ul className="fleet-card-features">
          {v.features.map((f, fi) => (
            <li key={fi} className="fleet-card-feature">
              <svg
                className="fleet-check"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function ServiceFleet({ vehicleKeys }) {
  const filtered = vehicles.filter(v => vehicleKeys.includes(v.class))
  const [page, setPage] = useState(0)
  const [cardsPerPage, setCardsPerPage] = useState(2)

  useEffect(() => {
    const update = () => {
      const cpp = window.innerWidth <= 640 ? 1 : 2
      setCardsPerPage(cpp)
      setPage(0)
    }
    update()
    window.addEventListener('resize', update, { passive: true })
    return () => window.removeEventListener('resize', update)
  }, [])

  const totalPages = Math.ceil(filtered.length / cardsPerPage)

  return (
    <section className="fleet" id="fleet" aria-labelledby="fleet-heading">
      <div className="container">
        <div className="fleet-header reveal">
          <h2 id="fleet-heading" className="fleet-heading">
            Vehicles For This Service
          </h2>
        </div>
      </div>

      <div className="fleet-carousel-outer">
        <div
          className="fleet-carousel-track"
          style={{
            transform: `translateX(calc(-1 * ${page * cardsPerPage} * (var(--fleet-card-w) + var(--fleet-gap))))`,
          }}
        >
          {filtered.map((v, i) => (
            <FleetCard key={i} v={v} />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="fleet-pagination">
          <button
            className="fleet-page-arrow"
            onClick={() => setPage(p => Math.max(0, p - 1))}
            disabled={page === 0}
            aria-label="Previous page"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`fleet-page-num${page === i ? ' fleet-page-num--active' : ''}`}
              onClick={() => setPage(i)}
              aria-label={`Page ${i + 1}`}
              aria-current={page === i ? 'page' : undefined}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="fleet-page-arrow"
            onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            aria-label="Next page"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
