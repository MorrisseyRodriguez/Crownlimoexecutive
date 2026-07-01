import { useState } from 'react'
import './QuoteForm.css'

const serviceTypes = [
  'Corporate',
  'Point to Point',
  'Hourly (As Directed)',
  'Airport (To or From)',
]

const vehicleTypes = [
  'Cadillac Escalade',
  'Cadillac XT6',
  'Cadillac XTS',
  'Tesla Model S',
  'Mercedes Sprinter',
  'No Preference',
]

const defaultForm = {
  campaignType: 'Executive Transportation',
  name: '',
  phone: '',
  email: '',
  date: '',
  pickup: '',
  destination: '',
  passengers: '',
  serviceType: '',
  vehicleType: '',
  notes: '',
}

const encode = (data) =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')

export default function QuoteForm() {
  const [form, setForm] = useState(defaultForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await fetch(window.location.pathname, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'quote-request',
          campaignType: 'Executive Transportation',
          ...form,
        }),
      })
      console.log('Netlify submission success')
    } catch (netlifyError) {
      if (netlifyError?.status === 404 || (netlifyError instanceof Error && netlifyError.message.includes('404'))) {
        console.warn('Netlify Forms only work on deployed Netlify URLs, not local/Bolt preview.')
      } else {
        console.warn('Netlify submission failed:', netlifyError)
      }
    }

    try {
      if (!window.emailjs) {
        throw new Error('EmailJS is not loaded. Check the CDN script in index.html.')
      }

      const templateParams = {
        campaignType: 'Executive Transportation',
        name: form.name || 'Not provided',
        phone: form.phone || 'Not provided',
        email: form.email || 'Not provided',
        date: form.date || 'Not provided',
        serviceType: form.serviceType || 'Not provided',
        vehicleType: form.vehicleType || 'Not provided',
        passengers: form.passengers || 'Not provided',
        pickup: form.pickup || 'Not provided',
        destination: form.destination || 'Not provided',
        notes: form.notes || 'None',
      }

      await window.emailjs.send('service_3ft34fv', 'template_xpozite', templateParams)
      console.log('EmailJS submission complete')
      setSubmitted(true)
      setForm(defaultForm)
    } catch (emailError) {
      console.error('EmailJS submission failed:', emailError)
      alert(
        'Email submission failed: ' +
        (emailError?.text || emailError?.message || JSON.stringify(emailError))
      )
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <section className="quote-section" id="quote" aria-labelledby="quote-heading">
        <div className="container">
          <div className="quote-success">
            <div className="quote-success-icon" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h2 className="quote-success-title">Thank You</h2>
            <p className="quote-success-body">
              Your quote request has been received. A member of the Crown Limousine LA team will reach out to you shortly.
            </p>
            <button className="btn-outline" onClick={() => setSubmitted(false)}>
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="quote-section" id="quote" aria-labelledby="quote-heading">
      <div className="container">
        <div className="quote-inner">
          <div className="quote-text">
            <p className="section-label">Get Started</p>
            <div className="divider" />
            <h2 id="quote-heading" className="section-title">
              Get Your Executive Transportation Quote
            </h2>
            <p className="section-subtitle">
              Tell us about your transportation needs and a member of our team will reach out shortly.
            </p>

            <div className="quote-trust">
              {[
                'Serving SoCal Since 1994',
                'Professional Chauffeurs',
                '1,900+ Reviews',
                'Executive Fleet',
              ].map((t, i) => (
                <div key={i} className="quote-trust-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          <form
            className="quote-form"
            name="quote-request"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            noValidate
            aria-label="Executive transportation quote request"
          >
            <input type="hidden" name="form-name" value="quote-request" />
            <input type="hidden" name="campaignType" value="Executive Transportation" />
            <div className="form-grid form-grid-2">
              <div className="form-field">
                <label htmlFor="name" className="form-label">Full Name <span aria-hidden="true">*</span></label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                  autoComplete="name"
                />
              </div>
              <div className="form-field">
                <label htmlFor="phone" className="form-label">Phone <span aria-hidden="true">*</span></label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="form-input"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(310) 555-0100"
                  required
                  autoComplete="tel"
                />
              </div>
            </div>

            <div className="form-grid form-grid-2">
              <div className="form-field">
                <label htmlFor="email" className="form-label">Email <span aria-hidden="true">*</span></label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                  autoComplete="email"
                />
              </div>
              <div className="form-field">
                <label htmlFor="date" className="form-label">Date of Service</label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  className="form-input"
                  value={form.date}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="pickup" className="form-label">Pickup Location <span aria-hidden="true">*</span></label>
              <input
                id="pickup"
                name="pickup"
                type="text"
                className="form-input"
                value={form.pickup}
                onChange={handleChange}
                placeholder="Address, hotel, airport terminal…"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="destination" className="form-label">Destination</label>
              <input
                id="destination"
                name="destination"
                type="text"
                className="form-input"
                value={form.destination}
                onChange={handleChange}
                placeholder="Address, venue, airport terminal…"
              />
            </div>

            <div className="form-grid form-grid-2">
              <div className="form-field">
                <label htmlFor="serviceType" className="form-label">Service Type</label>
                <select
                  id="serviceType"
                  name="serviceType"
                  className="form-input form-select"
                  value={form.serviceType}
                  onChange={handleChange}
                >
                  <option value="">Select a service type</option>
                  {serviceTypes.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="vehicleType" className="form-label">Vehicle Preference</label>
                <select
                  id="vehicleType"
                  name="vehicleType"
                  className="form-input form-select"
                  value={form.vehicleType}
                  onChange={handleChange}
                >
                  <option value="">Select a vehicle</option>
                  {vehicleTypes.map(v => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="passengers" className="form-label">Passenger Count</label>
              <input
                id="passengers"
                name="passengers"
                type="number"
                className="form-input"
                value={form.passengers}
                onChange={handleChange}
                placeholder="1"
                min="1"
                max="50"
              />
            </div>

            <div className="form-field">
              <label htmlFor="notes" className="form-label">Additional Notes</label>
              <textarea
                id="notes"
                name="notes"
                className="form-input form-textarea"
                value={form.notes}
                onChange={handleChange}
                placeholder="Special requests, flight details, preferences…"
                rows={4}
              />
            </div>

            <button
              type="submit"
              className={`btn-primary form-submit${loading ? ' loading' : ''}`}
              disabled={loading}
              aria-label={loading ? 'Submitting your quote request' : 'Submit quote request'}
            >
              {loading ? (
                <>
                  <span className="form-spinner" aria-hidden="true" />
                  Sending…
                </>
              ) : (
                <>
                  Get My Quote
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
