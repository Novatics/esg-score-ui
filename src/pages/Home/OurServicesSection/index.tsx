/* eslint-disable  */
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick'
import Consulting from 'assets/images/ConsultingIllustration.png'
import CyberSecurityScan from 'assets/images/CyberSecurityIllustration.png'
import Training from 'assets/images/TrainingIllustration.png'
import Box from 'components/Box'
import Container from 'components/Container'
import Typography from 'components/Typography'
import Card from './Card'

export default function OurServicesSection() {
  const navigate = useNavigate()
  const cards = [
    {
      key: '1',
      title: 'Consulting',
      description:
        'Strengthen cyber capabilities with strategic consulting, control testing and interactive tabletop exercises.',
      image: Consulting,
      buttonText: 'Get in touch',
      buttonAction: () => {
        navigate('/contact-us')
      },
    },

    {
      key: '2',
      title: 'Training',
      description:
        'Accelerate cyber confidence across your organization. Executives are targeted 12x more than employees. ',
      image: Training,
      buttonText: 'Get in touch',
      buttonAction: () => {
        navigate('/contact-us')
      },
    },
  ]

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Container sx={{ mb: 8 }}>
      <Box mb={3} sx={{ marginTop: { xs: 6, sm: 0 } }}>
        <Typography textAlign="center" variant="h5" color="primary.dark">
          Our Services
        </Typography>
        <Typography mt={1} textAlign="center" variant="body1" color="primary.medium">
          Helping you elevate digital security enterprise-wide
        </Typography>
      </Box>
      <Slider {...settings}>
        {cards.map(card => (
          <Card
            key={card.key}
            title={card.title}
            description={card.description}
            image={card.image}
            buttonText={card.buttonText}
            buttonAction={card.buttonAction}
            maxWidth={350}
          />
        ))}
      </Slider>
    </Container>
  )
}
