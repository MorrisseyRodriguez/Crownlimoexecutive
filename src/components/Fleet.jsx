import { useState, useEffect, useRef } from 'react'

import escaladeExt from '../Fleet/Cadillac Escalade/escalade.webp'
import escaladeInt from '../Fleet/Cadillac Escalade/escalade-int.webp'
import xt6Ext from '../Fleet/Cadillac XT6/xt6.webp'
import xt6Int from '../Fleet/Cadillac XT6/xt6-int.webp'
import xtsExt from '../Fleet/Cadillac XTS/xts.webp'
import xtsInt from '../Fleet/Cadillac XTS/xts-int.webp'
import teslaSExt from '../Fleet/Tesla Model S/tesla-s.webp'
import teslaSInt from '../Fleet/Tesla Model S/tesla-s-int.webp'
import sprinterExt from '../Fleet/Mercedes Sprinter/sprinter-van.webp'
import sprinterInt from '../Fleet/Mercedes Sprinter/sprinter-van-int.webp'

import './Fleet.css'

const vehicles = [
  {
    class: 'Cadillac Escalade',
    usage: 'Executive Travel',
    label: 'Most Popular',
    models: 'Full-size luxury SUV, or similar',
    images: [escaladeExt, escaladeInt],
    features: [
      'Fits up to 6 passengers',
      'Generous luggage capacity for every trip',
      'Available 24/7 throughout Southern California',
    ],
  },
  {
    class: 'Cadillac XT6',
    usage: 'Airport & Business Transfers',
    label: null,
    models: 'Mid-size luxury SUV, or similar',
    images: [xt6Ext, xt6Int],
    features: [
      'Fits up to 6 passengers',
      'Ideal for business and airport transfers',
      'Available 24/7 throughout Southern California',
    ],
  },
  {
    class: 'Cadillac XTS',
    usage: 'Executive Sedan',
    label: null,
    models: 'Executive sedan, or similar',
    images: [xtsExt, xtsInt],
    features: [
      'Fits up to 3 passengers',
      'Sleek professional executive arrival',
      'Available 24/7 throughout Southern California',
    ],
  },
  {
    class: 'Tesla Model S',
    usage: 'Electric Executive Travel',
    label: 'Electric',
    models: 'Electric executive sedan, or similar',
    images: [teslaSExt, teslaSInt],
    features: [
      'Fits up to 3 passengers',
      'Zero emissions, whisper-quiet cabin',
      'Cutting-edge technology throughout',
    ],
  },
  {
    class: 'Mercedes Sprinter',
    usage: 'Executive Teams & Group Transportation',
    label: null,
    models: 'Executive van, or similar',
    images: [sprinterExt, sprinterInt],
    features: [
      'Fits up to 12 passengers',
      'Perfect for group and corporate transfers',
      'Available for events throughout LA',
    ],
  },
]

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
            loading="lazy"
            decoding="async"
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

export default function Fleet() {
  const [page, setPage] = useState(0)
  const [cardsPerPage, setCardsPerPage] = useState(2)
  const touchStartRef = useRef(null)
  const mouseStartRef = useRef(null)
  const isDraggingRef = useRef(false)

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

  const totalPages = Math.ceil(vehicles.length / cardsPerPage)

  const goNext = () => setPage(p => Math.min(totalPages - 1, p + 1))
  const goPrev = () => setPage(p => Math.max(0, p - 1))

  const onTouchStart = (e) => { touchStartRef.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchStartRef.current === null) return
    const diff = touchStartRef.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? goNext() : goPrev()
    touchStartRef.current = null
  }
  const onMouseDown = (e) => { mouseStartRef.current = e.clientX; isDraggingRef.current = true }
  const onMouseUp = (e) => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
    const diff = mouseStartRef.current - e.clientX
    if (Math.abs(diff) > 40) diff > 0 ? goNext() : goPrev()
  }

  return (
    <section className="fleet" id="fleet" aria-labelledby="fleet-heading">
      <div className="container">
        <div className="fleet-header reveal">
          <h2 id="fleet-heading" className="fleet-heading">
            Discover our service classes
          </h2>
        </div>
      </div>

      <div
        className="fleet-carousel-outer"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        style={{ cursor: 'grab' }}
      >
        <div
          className="fleet-carousel-track"
          style={{
            transform: `translateX(calc(-1 * ${page * cardsPerPage} * (var(--fleet-card-w) + var(--fleet-gap))))`,
          }}
        >
          {vehicles.map((v, i) => (
            <FleetCard key={i} v={v} />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="fleet-pagination">
          <button
            className="fleet-page-arrow"
            onClick={goPrev}
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
            onClick={goNext}
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
