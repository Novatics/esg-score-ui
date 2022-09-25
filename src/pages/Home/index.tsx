import Footer from 'components/Footer'
import Header from './Header'
import StatisticsSection from './StatisticsSection'
import StepperSection from './StepperSection'
import InfoSection from './InfoSection'
import OurServicesSection from './OurServicesSection'
import TestimonialsSection from './TestimonialsSection'
import TrustedPartnersSection from './TrustedPartnersSection'

const Home = () => {
  return (
    <>
      <Header />
      <StepperSection />
      <StatisticsSection />
      <InfoSection />
      <Footer />
      {/*
      <StatisticsSection />
      <OurServicesSection />
      <TrustedPartnersSection />
      <TestimonialsSection /> */}
    </>
  )
}

export default Home
