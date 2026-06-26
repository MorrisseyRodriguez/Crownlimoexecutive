import { useEffect, useRef, useState } from 'react'
import './Stats.css'

const stats = [
  { value: 1900, suffix: '+', label: 'Combined Reviews', size: 200 },
  { value: 15, suffix: '+', label: 'Industry Awards', size: 160 },
  { value: 24, suffix: '/7', label: '365 Support', size: 150 },
]

function AnimatedDial({ value, suffix, label, size, triggered }) {
  const [current, setCurrent] = useState(0)
  const rafRef = useRef(null)
  const startRef = useRef(null)
  const DURATION = 1800

  useEffect(() => {
    if (!triggered) return
    const start = performance.now()
    startRef.current = start

    const tick = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / DURATION, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(Math.round(eased * value))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [triggered, value])

  const radius = size / 2 - 12
  const circumference = 2 * Math.PI * radius
  const progress = triggered ? current / value : 0
  const dashOffset = circumference * (1 - progress)

  return (
    <div className="stat-dial" role="img" aria-label={`${value}${suffix} ${label}`}>
      <div className="stat-dial-svg-wrap" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="var(--blue-tint-2)"
            strokeWidth="6"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="var(--blue)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            style={{ transition: 'stroke-dashoffset 0.05s linear' }}
          />
        </svg>
        <div className="stat-dial-value" aria-hidden="true">
          <span className="stat-dial-number">{current}{suffix}</span>
        </div>
      </div>
      <p className="stat-dial-label">{label}</p>
    </div>
  )
}

const trustPoints = [
  'Every chauffeur is professionally trained, background-checked, and uniformed.',
  'Real-time flight tracking ensures we\'re ready regardless of schedule changes.',
  'Executive & Corporate Transportation, handling your most important rides since 1994.',
  'Airport, Client & Event Transportation Solutions, fully managed, fully reliable.',
]

export default function Stats() {
  const [triggered, setTriggered] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (triggered) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true) },
      { threshold: 0.25 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [triggered])

  return (
    <section className="stats-section" id="about" aria-labelledby="stats-heading">
      <div className="container">
        <div className="stats-header">
          <p className="section-label">Our Track Record</p>
          <div className="divider" />
          <h2 id="stats-heading" className="section-title reveal">
            Why Professionals Have Trusted Crown Since 1994
          </h2>
        </div>

        <div className="stats-dials" ref={ref} role="list">
          {stats.map((s, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1}`} role="listitem">
              <AnimatedDial {...s} triggered={triggered} />
            </div>
          ))}
        </div>

        <div className="stats-trust">
          {trustPoints.map((p, i) => (
            <div key={i} className={`stats-trust-item reveal reveal-delay-${i + 1}`}>
              <div className="stats-trust-dot" aria-hidden="true" />
              <p>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
