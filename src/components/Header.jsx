import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import crownLogo from '../Logo/photo.jpg'
import './Header.css'

const CrownLogo = () => (
  <div className="header-logo-lockup" aria-label="Crown Limousine LA">
    <img src={crownLogo} alt="" className="header-logo-img" aria-hidden="true" />
    <div className="header-logo-text">
      <span className="header-logo-name">CROWN</span>
      <span className="header-logo-sub">LIMOUSINE LA</span>
    </div>
  </div>
)

const scrollToQuote = () => {
  document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
}

const serviceLinks = [
  { label: 'Airport Transfers', to: '/airport-transfers' },
  { label: 'Business Meetings', to: '/business-meetings' },
  { label: 'Client Transportation', to: '/client-transportation' },
  { label: 'City-To-City Travel', to: '/city-to-city' },
  { label: 'Corporate Events', to: '/corporate-events' },
  { label: 'Executive Team', to: '/executive-team' },
]

function ServicesDropdown({ onClose }) {
  return (
    <div className="services-dropdown" role="menu" aria-label="Service pages">
      <div className="services-dropdown-label">Service Pages</div>
      {serviceLinks.map(l => (
        <Link
          key={l.to}
          to={l.to}
          className="services-dropdown-link"
          role="menuitem"
          onClick={onClose}
          data-track={`header-dropdown-${l.to.replace('/', '')}`}
        >
          {l.label}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      ))}
      <div className="services-dropdown-divider" />
      <a href="/#services" className="services-dropdown-all" role="menuitem" onClick={onClose} data-track="header-dropdown-view-all">
        View All Services
      </a>
    </div>
  )
}

export default function Header({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setDropdownOpen(false)
    setMobileServicesOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    if (dropdownOpen) document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [dropdownOpen])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const anchorLinks = [
    { label: 'Fleet', href: '#fleet' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
  ]

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header-inner container">
        <Link to="/" className="header-logo" aria-label="Crown Limousine LA – Home">
          <CrownLogo />
        </Link>

        <nav className="header-nav" aria-label="Main navigation">
          <div className="header-nav-dropdown" ref={dropdownRef}>
            <button
              className={`header-nav-link header-nav-services-btn${dropdownOpen ? ' active' : ''}`}
              onClick={() => setDropdownOpen(o => !o)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              data-track="header-services-dropdown"
            >
              Services
              <svg
                className={`header-nav-chevron${dropdownOpen ? ' rotated' : ''}`}
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            {dropdownOpen && (
              <ServicesDropdown onClose={() => setDropdownOpen(false)} />
            )}
          </div>

          {anchorLinks.map(l => (
            <a key={l.label} href={l.href} className="header-nav-link" data-track={`header-nav-${l.label.toLowerCase()}`}>{l.label}</a>
          ))}
        </nav>

        <button
          className={`header-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          data-track="header-hamburger"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`} role="dialog" aria-modal="true">
        <nav className="mobile-menu-nav">
          <button
            className="mobile-menu-link mobile-menu-services-toggle"
            onClick={() => setMobileServicesOpen(o => !o)}
            aria-expanded={mobileServicesOpen}
            data-track="mobile-services-toggle"
          >
            Services
            <svg
              className={`mobile-menu-chevron${mobileServicesOpen ? ' rotated' : ''}`}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>

          {mobileServicesOpen && (
            <div className="mobile-services-list">
              {serviceLinks.map(l => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="mobile-services-link"
                  onClick={() => setMenuOpen(false)}
                  data-track={`mobile-service-${l.to.replace('/', '')}`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          )}

          <a href="#fleet" className="mobile-menu-link" onClick={() => setMenuOpen(false)} data-track="mobile-nav-fleet">Fleet</a>
          <a href="#about" className="mobile-menu-link" onClick={() => setMenuOpen(false)} data-track="mobile-nav-about">About</a>
          <a href="#reviews" className="mobile-menu-link" onClick={() => setMenuOpen(false)} data-track="mobile-nav-reviews">Reviews</a>

          <button className="btn-primary mobile-menu-cta" onClick={() => { setMenuOpen(false); scrollToQuote() }} data-track="mobile-cta-get-quote">
            Get Your Quote
          </button>
        </nav>
      </div>
    </header>
  )
}
