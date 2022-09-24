import Footer from 'components/Footer'
import Header from './Header'
import OurServicesSection from './OurServicesSection'
import StatisticsSection from './StatisticsSection'
import StepperSection from './StepperSection'
import TestimonialsSection from './TestimonialsSection'
import TrustedPartnersSection from './TrustedPartnersSection'

const Home = () => {
  return (
    <>
      <Header />
      <StepperSection />
      <StatisticsSection />
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
