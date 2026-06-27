import { useState, useRef, useEffect, useCallback } from 'react'
import yelpLogo from '../Logo/download.png'
import './Reviews.css'

const reviews = [
  {
    text: "I have used Crown whenever I have to fly out of LAX. All the drivers are very professional, courteous, experienced drivers. Keep in touch with you enroute to pickups. I heartedly recommend them.",
    name: "Ely Licht",
    title: null,
    stars: 5,
  },
  {
    text: "Crown is fantastic. They are easy to communicate with, have excellent drivers, and understand that your schedule may need last minute adjustments. I have been using them for 20+ years and cannot say enough about their professionalism and high quality of service.",
    name: "Natasha Roit",
    title: null,
    stars: 5,
  },
  {
    text: "Super easy to work with. Class act chauffeur and easy booking with great communication and beautiful, cushy Sprinter van for our corporate event. We will definitely use them again.",
    name: "Elena Mercer",
    title: "Dr. Martens – Americas | LA Office",
    stars: 5,
  },
  {
    text: "Crown Limousine was wonderful to work with. They were communicative, prompt, and flexible in a way that made planning a complicated trip extremely smooth. Our driver was kind and professional, and the entire team was helpful throughout the entire process from inquiry to end. Would recommend and will definitely use again!",
    name: "MaryKate Romagnoli",
    title: null,
    stars: 5,
  },
]

const Stars = ({ count }) => (
  <div className="review-stars" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ))}
  </div>
)

export default function Reviews() {
  const [active, setActive] = useState(0)
  const [cardWidth, setCardWidth] = useState(0)
  const trackRef = useRef(null)
  const firstCardRef = useRef(null)
  const startXRef = useRef(null)
  const isDraggingRef = useRef(false)

  const prev = useCallback(() => setActive(a => (a - 1 + reviews.length) % reviews.length), [])
  const next = useCallback(() => setActive(a => (a + 1) % reviews.length), [])

  useEffect(() => {
    const measure = () => {
      if (firstCardRef.current) {
        setCardWidth(firstCardRef.current.getBoundingClientRect().width)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const onTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX
    isDraggingRef.current = true
  }

  const onTouchEnd = (e) => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
    const diff = startXRef.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
  }

  const onMouseDown = (e) => {
    startXRef.current = e.clientX
    isDraggingRef.current = true
  }

  const onMouseUp = (e) => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
    const diff = startXRef.current - e.clientX
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
  }

  const translateX = cardWidth ? -(active * (cardWidth + 28)) : 0

  return (
    <section className="reviews-section" id="reviews" aria-labelledby="reviews-heading">
      <div className="container">
        <div className="reviews-header">
          <p className="section-label">Client Reviews</p>
          <div className="divider" />
          <h2 id="reviews-heading" className="section-title reveal">
            What Professionals Say About Crown
          </h2>
        </div>
      </div>

      <div
        className="reviews-carousel"
        ref={trackRef}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        role="region"
        aria-label="Customer reviews carousel"
        aria-live="polite"
      >
        <div className="reviews-track" style={{ transform: `translateX(${translateX}px)` }}>
          {reviews.map((r, i) => (
            <div
              key={i}
              ref={i === 0 ? firstCardRef : undefined}
              className={`review-card${i === active ? ' review-card--active' : ''}`}
              role="article"
              aria-hidden={i !== active}
            >
              <Stars count={r.stars} />
              <blockquote className="review-text">"{r.text}"</blockquote>
              <div className="review-author">
                <div className="review-author-avatar" aria-hidden="true">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="review-author-name">{r.name}</p>
                  {r.title && <p className="review-author-title">{r.title}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="reviews-controls">
          <button
            className="reviews-arrow"
            onClick={prev}
            aria-label="Previous review"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>

          <div className="reviews-dots" role="tablist" aria-label="Review navigation">
            {reviews.map((_, i) => (
              <button
                key={i}
                className={`reviews-dot${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
                role="tab"
                aria-selected={i === active}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>

          <button
            className="reviews-arrow"
            onClick={next}
            aria-label="Next review"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <div className="reviews-platforms">
            <a
              href="https://share.google/45bGCU7ezNMWlrIMo"
              className="reviews-platform-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read our reviews on Google"
            >
              <svg className="reviews-google-logo" viewBox="0 0 48 48" width="80" height="28" xmlns="http://www.w3.org/2000/svg">
                <path fill="#4285F4" d="M46.1 24.6c0-1.6-.1-3.1-.4-4.6H24v8.7h12.4c-.5 2.7-2.1 5-4.5 6.5v5.4h7.2c4.2-3.9 6.6-9.6 6.6-16z"/>
                <path fill="#34A853" d="M24 47c6.5 0 11.9-2.1 15.9-5.8l-7.2-5.4c-2.1 1.4-4.7 2.2-8.7 2.2-6.7 0-12.3-4.5-14.3-10.5H2.2v5.5C6.2 41.9 14.5 47 24 47z"/>
                <path fill="#FBBC05" d="M9.7 27.5c-.5-1.4-.8-3-.8-4.5s.3-3.1.8-4.5v-5.5H2.2C.8 16 0 19.9 0 24s.8 8 2.2 11l7.5-7.5z"/>
                <path fill="#EA4335" d="M24 9.5c3.7 0 7 1.3 9.6 3.8l7.2-7.2C36.9 2.1 31.5 0 24 0 14.5 0 6.2 5.1 2.2 13l7.5 5.5C11.7 14 17.3 9.5 24 9.5z"/>
              </svg>
              <span>Read Reviews</span>
            </a>
            <span className="reviews-platform-divider" aria-hidden="true" />
            <a
              href="https://www.yelp.com/biz/crown-limousine-la-los-angeles-3"
              className="reviews-platform-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read our reviews on Yelp"
            >
              <img src={yelpLogo} alt="Yelp" className="reviews-yelp-logo" loading="lazy" decoding="async" />
              <span>Read Reviews</span>
            </a>
          </div>
      </div>
    </section>
  )
}
