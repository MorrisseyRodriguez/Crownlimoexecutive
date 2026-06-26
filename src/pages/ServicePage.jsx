import useScrollReveal from '../hooks/useScrollReveal'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MobileCTA from '../components/MobileCTA'
import Stats from '../components/Stats'
import HowItWorks from '../components/HowItWorks'
import QuoteForm from '../components/QuoteForm'
import ServiceHero from './sections/ServiceHero'
import ServiceHeroImage from './sections/ServiceHeroImage'
import ServiceProblem from './sections/ServiceProblem'
import ServiceDream from './sections/ServiceDream'
import ServiceBenefits from './sections/ServiceBenefits'
import ServiceServices from './sections/ServiceServices'
import ServiceFleet from './sections/ServiceFleet'
import ServiceReviews from './sections/ServiceReviews'

export default function ServicePage({ page }) {
  useScrollReveal()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <ServiceHero
          eyebrow={page.eyebrow}
          title={page.heroTitle}
          subtitle={page.heroSubtitle}
          trustItems={page.trustItems}
        />
        <ServiceHeroImage src={page.image} alt={page.eyebrow} />
        <ServiceProblem
          headline={page.problemHeadline}
          lead={page.problemLead}
          painPoints={page.painPoints}
          conclusion={page.problemConclusion}
          conclusionStrong={page.problemConclusionStrong}
        />
        <ServiceDream
          title={page.dreamTitle}
          pull={page.dreamPull}
          body={page.dreamBody}
          close={page.dreamClose}
          closeStrong={page.dreamCloseStrong}
        />
        <ServiceBenefits
          title={page.benefitsTitle}
          benefits={page.benefits}
        />
        <ServiceServices
          title={page.servicesTitle}
          services={page.services}
        />
        <ServiceFleet vehicleKeys={page.fleetVehicles} />
        <Stats />
        <ServiceReviews reviews={page.reviews} />
        <HowItWorks />
        <QuoteForm />
      </main>
      <Footer />
      <MobileCTA menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  )
}
