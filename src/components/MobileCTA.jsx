import './MobileCTA.css'

const scrollToQuote = () => {
  document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
}

export default function MobileCTA({ menuOpen, setMenuOpen }) {
  return (
    <div className="app-bar" role="navigation" aria-label="Quick actions">
      <button
        className="app-bar-btn"
        onClick={() => setMenuOpen(o => !o)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        <div className={`app-bar-icon-circle${menuOpen ? ' app-bar-icon-circle--active' : ''}`}>
          {menuOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="3" y1="7" x2="21" y2="7"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="17" x2="21" y2="17"/>
            </svg>
          )}
        </div>
        <span className="app-bar-label">{menuOpen ? 'Close' : 'Menu'}</span>
      </button>

      <button
        className="app-bar-btn app-bar-btn--primary"
        onClick={() => {
          if (typeof fbq !== 'undefined') {
            fbq('track', 'InitiateCheckout')
          }
          scrollToQuote()
        }}
        aria-label="Get your quote"
        data-track="mobile-appbar-get-quote"
      >
        <div className="app-bar-icon-circle app-bar-icon-circle--primary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        </div>
        <span className="app-bar-label">Get Quote</span>
      </button>

      <a
        className="app-bar-btn"
        href="tel:+13109478898"
        aria-label="Call us"
      >
        <div className="app-bar-icon-circle">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </div>
        <span className="app-bar-label">Call</span>
      </a>
    </div>
  )
}
