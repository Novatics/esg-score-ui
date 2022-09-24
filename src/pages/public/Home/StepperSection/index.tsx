/* eslint-disable max-lines */

import { useState, useEffect } from 'react'
import { useTheme, useMediaQuery, Hidden } from '@mui/material'
import image2 from 'assets/images/BannerHomepageBackground2.png'
import image3 from 'assets/images/BannerHomepageBackground3.png'
import Box from 'components/Box'
import Button from 'components/Button'
import Grid from 'components/Grid'
import Modal from 'components/Modal'
import Stack from 'components/Stack'
import Typography from 'components/Typography'
import { StyledContainer, StyledImg, StyledBackground } from './styles'

export default function StepperComponent() {
  const [activeStep, setActiveStep] = useState(0)
  const slideChangeDelayInSeconds = 10

  const [open, setOpen] = useState(false)
  const handleOpenVideoModal = () => setOpen(true)
  const handleCloseVideoModal = () => setOpen(false)

  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

  const steps = [
    {
      label: 'Select campaign settings',
      image: image3,
      backgroundColor: '#fdfdfd',
      title: (
        <Box>
          <Typography maxWidth={600} color="primary.dark" variant={isSmallScreen ? 'h3' : 'h2'}>
            Activate your greatest cybersecurity asset... <Box> people </Box>
          </Typography>
        </Box>
      ),
      description:
        '90% of cyber hacks are caused by human error, transform your digital protection today',
    },
    {
      label: 'Select campaign settings',
      image: image2,
      backgroundColor: '#97d2e5',
      title: (
        <Box>
          <Typography maxWidth={600} color="primary.dark" variant={isSmallScreen ? 'h3' : 'h2'}>
            Activate your greatest cybersecurity asset... <Box> people </Box>
          </Typography>
        </Box>
      ),
      description:
        '90% of cyber hacks are caused by human error, transform your digital protection today',
    },
  ]

  useEffect(() => {
    const lastStep = steps.length - 1

    const timeout = setTimeout(() => {
      if (activeStep === lastStep) {
        setActiveStep(0)
      } else {
        setActiveStep(prevStep => prevStep + 1)
      }
    }, slideChangeDelayInSeconds * 1000)

    return () => clearTimeout(timeout)
  }, [activeStep, steps.length])

  const GroupButton = () => (
    <Stack
      mt={-1}
      sx={{
        width: {
          xs: '100%',
          md: 'auto',
        },
        paddingX: {
          xs: 4,
          sm: 4,
          md: '0',
        },
        gap: {
          xs: 1,
          sm: 4,
        },
        flexDirection: {
          sx: 'column',
          sm: 'row',
        },
      }}
    >
      <Button
        variant="contained"
        sx={{
          height: 40,
          textTransform: 'none',
        }}
        target="_blank"
        href="https://calendly.com/protexxa"
      >
        Book a demo
      </Button>
      <Button
        onClick={handleOpenVideoModal}
        sx={{
          marginRight: 1,
          marginTop: {
            sx: 5,
            sm: 0,
          },
          height: 40,
          textDecoration: 'none',
          textTransform: 'none',
        }}
      >
        Watch the video
      </Button>
    </Stack>
  )

  return (
    <StyledBackground backgroundcolor={steps[activeStep].backgroundColor}>
      <StyledContainer>
        <Grid container>
          <Grid item xs={12} sm={8} md={8} lg={8}>
            <Box sx={{ p: { xs: 2, sm: 0, md: 0 } }}>
              {steps[activeStep].title}
              <Typography
                sx={{ marginTop: 3 }}
                maxWidth={600}
                variant={isSmallScreen ? 'body1' : 'h6'}
                color="primary.medium"
              >
                {steps[activeStep].description}
              </Typography>
              <Hidden smDown>
                <Box mt={5}>
                  <GroupButton />
                </Box>
              </Hidden>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            lg={4}
            flexDirection="column"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <StyledImg height="100%" src={steps[activeStep].image} alt="banner" />
            <Hidden smUp>
              <GroupButton />
            </Hidden>
          </Grid>
        </Grid>
      </StyledContainer>
      <Modal
        open={open}
        onClose={handleCloseVideoModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="iframe-container"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            [theme.breakpoints.down('md')]: {
              position: 'relative',
              width: '90%',
              paddingBottom: '56.25%',
              height: 0,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',

              iframe: {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              },
            },
          }}
        >
          <iframe
            width="768"
            height="432"
            src="https://www.youtube.com/embed/3wHB-aF6us0?rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>
      </Modal>
    </StyledBackground>
  )
}
