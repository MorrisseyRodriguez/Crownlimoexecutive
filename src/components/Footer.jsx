import crownLogo from '../Logo/photo.jpg'
import './Footer.css'

const scrollToQuote = () => {
  document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={crownLogo} alt="" className="footer-logo-img" aria-hidden="true" />
            <div>
              <p className="footer-brand-name">Crown Limousine LA</p>
              <p className="footer-brand-sub">Chauffeur Services</p>
            </div>
          </div>
          <p className="footer-tagline">
            Serving Los Angeles and Southern California with professional chauffeur services since 1994.
          </p>
        </div>

        <div className="footer-mid">
          <div className="footer-col">
            <p className="footer-col-title">Services</p>
            <ul className="footer-links">
              <li><a href="#services">Airport Transfers</a></li>
              <li><a href="#services">Business Meetings</a></li>
              <li><a href="#services">Client Transportation</a></li>
              <li><a href="#services">City-To-City Travel</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Fleet</p>
            <ul className="footer-links">
              <li><a href="#fleet">Cadillac Escalade</a></li>
              <li><a href="#fleet">Cadillac XT6</a></li>
              <li><a href="#fleet">Cadillac XTS</a></li>
              <li><a href="#fleet">Tesla Model S</a></li>
              <li><a href="#fleet">Mercedes Sprinter</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Contact</p>
            <ul className="footer-links footer-contact">
              <li>Los Angeles, CA</li>
              <li>Serving Southern California</li>
              <li>Available 24/7</li>
            </ul>
            <button className="btn-primary footer-cta" onClick={scrollToQuote}>
              Get Your Quote
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {year} Crown Limousine LA. All rights reserved.
          </p>
          <p className="footer-est">Established 1994</p>
        </div>
      </div>
    </footer>
  )
}
