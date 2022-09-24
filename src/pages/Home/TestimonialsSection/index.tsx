import { useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import SwipeableViews from 'react-swipeable-views'
import JaneAvatar from 'assets/images/TestimonialsAvatars/jane.png'
import MohamedAvatar from 'assets/images/TestimonialsAvatars/mohamed.png'
import SteveAvatar from 'assets/images/TestimonialsAvatars/steve.png'
import Box from 'components/Box'
import Button from 'components/Button'
import NavigationDots from 'components/NavigationDots'
import Typography from 'components/Typography'
import Slide from './Slide'
import { Container } from './styles'

const testimonialsData = [
  {
    name: 'Jane',
    subtitle: '',
    avatar: JaneAvatar,
    description:
      'We were shocked to learn that everyone on the team had private information for sale on the dark web. Protexxa helped us tighten up our security big time.',
  },
  {
    name: 'Steve',
    avatar: SteveAvatar,
    subtitle: '',
    description:
      'My company was hacked and we had 45 minutes to pay the ransom. I didn’t know who to call, so I paid. Now that we are Protexxa customers, we have playbooks and someone to call if it ever happens again… which I hope it won’t! ',
  },
  {
    name: 'Mohamed',
    avatar: MohamedAvatar,
    subtitle: '',
    description:
      'The cybersecurity training provided by Protexxa has changed the way we work at our company. Security is now embedded in all processes.',
  },
]
export default function TestimonialsSection() {
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = 3

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleStepChange = (step: number) => {
    setActiveStep(step)
  }

  return (
    <Container>
      <Typography textAlign="center" width="80%" maxWidth={425} variant="h5" color="primary.dark">
        What are people saying about us
      </Typography>
      <Typography
        textAlign="center"
        width="80%"
        maxWidth={425}
        variant="body1"
        color="primary.main"
      >
        A few words from our customers
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginTop: 5,
          width: '100%',
          maxWidth: 1216,
        }}
      >
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          <ArrowBackIosNewIcon />
        </Button>
        <SwipeableViews
          axis="x"
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          style={{ width: '100%' }}
        >
          {testimonialsData.map(({ avatar, description, name, subtitle }) => (
            <Slide
              key={name}
              name={name}
              avatar={avatar}
              description={description}
              subtitle={subtitle}
            />
          ))}
        </SwipeableViews>

        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
          <ArrowForwardIosIcon />
        </Button>
      </Box>
      <NavigationDots amount={3} activeStep={activeStep} handleSelect={handleStepChange} />
    </Container>
  )
}
