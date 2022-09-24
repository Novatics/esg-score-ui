import Footer from 'components/Footer'
import Header from './Header'
import OurServicesSection from './OurServicesSection'
import StatisticsSection from './StatisticsSection'
import StaySafeWithProtexxaSection from './StaySafeWithProtexxaSection'
import StepperSection from './StepperSection'
import TestimonialsSection from './TestimonialsSection'
import TrustedPartnersSection from './TrustedPartnersSection'
import UserInput from './UserInput'

const Home = () => {
  return (
    <>
      <Header />
      <StepperSection />
      <UserInput />
      <Footer /> 
      {/*
      <StatisticsSection />
      <OurServicesSection />
      <TrustedPartnersSection />
      <TestimonialsSection />
      <StaySafeWithProtexxaSection /> */}
    </>
  )
}

export default Home
