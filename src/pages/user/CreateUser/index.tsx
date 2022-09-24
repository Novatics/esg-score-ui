import { useState, useRef } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useTheme, useMediaQuery } from '@mui/material'
import { Form, Formik, FormikHelpers } from 'formik'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import invariant from 'tiny-invariant'
import Box from 'components/Box'
import Container from 'components/Container'
import Typography from 'components/Typography'
import { TSignUpForm } from 'models/user.model'
import Services from 'services'
import globalStore from 'store'
import { toastStyle } from 'util/toast'
import signUpFormSteps from './signUpFormSteps'
import * as S from './styles'
import 'react-toastify/dist/ReactToastify.css'

const UserForm = () => {
  const navigate = useNavigate()
  const [activeStep, setActiveStep] = useState(0)
  const currentValidationSchema = signUpFormSteps[activeStep].validation
  const isLastStep = activeStep === signUpFormSteps.length - 1
  const { user } = globalStore()
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formikRef = useRef<any>(null)

  const [fadeOut, setFadeOut] = useState(false)
  invariant(user, 'Expected value to be a user')

  const renderStepContent = (step: number) => {
    const { Title, Component } = signUpFormSteps[step]

    return (
      <>
        <Title
          sx={{ width: isSmallScreen ? 300 : '100%' }}
          fadeOut={fadeOut}
          setFadeOut={setFadeOut}
        />
        <Component fadeOut={fadeOut} setFadeOut={setFadeOut} />
      </>
    )
  }

  const StepsViewer = () => {
    return `${`0${activeStep + 1}`.slice(-2)} / ${signUpFormSteps.length}`
  }
  const handleSubmit = async (values: TSignUpForm, actions: FormikHelpers<TSignUpForm>) => {
    if (isLastStep) {
      try {
        if (user.companyId !== 'individualPlan') {
          await Services.Auth.register({ ...values, company: user.companyId })
        } else await Services.Auth.register(values)
        navigate('/loading-score')
      } catch (error) {
        toast.error(error.response.data.message, toastStyle)
      }
    } else {
      actions.setTouched({})
      actions.setSubmitting(false)
      setFadeOut(true)
      setTimeout(() => {
        setActiveStep(activeStep + 1)
        formikRef.current.validateForm()
      }, 300)
    }
  }

  return (
    <Container
      sx={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}
    >
      <Formik
        innerRef={formikRef}
        initialValues={
          {
            fullname: user.name,
            phoneNumber: user.phone,
            email: user.email,
            secondaryEmails: null,
            gender: '',
            image: null,
            birthDate: '',
            address: {
              street: '',
              number: '',
              postalCode: '',
              city: '',
              country: '',
            },
            webDomains: null,
            havePasswordManager: null,
            useMFA: null,
            haveResponsePlan: null,
            top10Apps: [],
            allSocialMediasInPrivate: null,
          } as TSignUpForm
        }
        onSubmit={handleSubmit}
        validationSchema={currentValidationSchema}
      >
        {({ dirty, isValid }) => (
          <Form>
            <S.Container>
              <Box>
                <S.StepDescriptionContainer>
                  {!isSmallScreen && <S.ProtexxaLogo />}
                  <Typography marginBottom={2} variant="h6">
                    Why is this information important?
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {signUpFormSteps[activeStep].description}
                  </Typography>
                </S.StepDescriptionContainer>
              </Box>
              <Box sx={{ marginLeft: isSmallScreen ? 0 : 30 }}>
                {renderStepContent(activeStep)}
                <S.StepControllerContainer>
                  {activeStep !== 0 && (
                    <S.BackButton
                      type="button"
                      onClick={() => setActiveStep(activeStep - 1)}
                      aria-label="back"
                      color="primary"
                    >
                      <ArrowBackIcon />
                      <Typography ml={1} variant="button">
                        Back
                      </Typography>
                    </S.BackButton>
                  )}
                  <Typography variant="h6" sx={{ color: 'neutral.high.dark' }}>
                    {StepsViewer()}
                  </Typography>
                  <S.FowardButton disabled={!(dirty && isValid)} type="submit" aria-label="foward">
                    <Typography mr={1} variant="button" data-testid="nextButton">
                      Next
                    </Typography>
                    <ArrowForwardIcon />
                  </S.FowardButton>
                </S.StepControllerContainer>
              </Box>
            </S.Container>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </Container>
  )
}

export default UserForm
