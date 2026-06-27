import './ServiceHeroImage.css'

export default function ServiceHeroImage({ src, alt }) {
  return (
    <div className="service-hero-image">
      <img src={src} alt={alt || ''} loading="eager" fetchpriority="high" decoding="async" />
    </div>
  )
}
