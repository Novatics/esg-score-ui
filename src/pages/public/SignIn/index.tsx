/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback } from 'react'
import { useTheme, useMediaQuery } from '@mui/material'
import { Auth } from 'aws-amplify'
import { Formik, Form } from 'formik'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import Box from 'components/Box'
import Button from 'components/Button'
import CircularProgress from 'components/CircularProgress'
import InputField from 'components/InputField'
import PasswordInput from 'components/PasswordInput'
import Typography from 'components/Typography'
import VerificationCodeInput from 'components/VerificationCodeInput'
import AppLoading from 'containers/App/AppLoading'
import { EUserRole } from 'models/user.model'
import Services from 'services'
import globalStore from 'store'
import SignInValidationSchema from './validationSchema'
import 'react-toastify/dist/ReactToastify.css'

interface ISignInForm {
  userEmail: string
  password: string
}

const SignIn = () => {
  const [showMFAInput, setShowMFAInput] = useState(false)
  const { getUser, user } = globalStore()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(true)
  const [pwd, setPwd] = useState('')
  const [unconfirmedUser, setUnconfirmedUser] = useState<any>()
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  const [isWrongCode, setIsWrongCode] = useState(false)
  const [MFACode, setMFACode] = useState('')
  const navigate = useNavigate()

  const checkHasScore = useCallback(async () => {
    if (!user) await getUser()
    if (user) {
      Services.Score.get()
        .then(() => navigate('/dashboard'))
        .catch(err => {
          if (err.response.status === 404) {
            navigate('/welcome')
          }
        })
    }
  }, [getUser, navigate, user])

  const redirectLogged = useCallback(async () => {
    try {
      setLoading(true)
      if (user?.role === EUserRole.ADMIN) navigate('/company/dashboard')
      if (user?.role !== EUserRole.ADMIN) checkHasScore()
    } catch (err) {
      setLoading(false)
    }
  }, [checkHasScore, navigate, user])

  const handleConfirmSignIn = useCallback(
    async (code: string) => {
      await Auth.confirmSignIn(unconfirmedUser, code, 'SMS_MFA')
        .then(() => redirectLogged())
        .catch(() => setIsWrongCode(true))
    },
    [redirectLogged, unconfirmedUser]
  )

  const handleCodeChange = code => {
    if (code.length === 6) handleConfirmSignIn(code)
    setIsWrongCode(false)
    setMFACode(code)
  }

  const handleSignIn = async ({ userEmail, password }: ISignInForm) => {
    try {
      const tempUser = await Auth.signIn(userEmail, password)
      setEmail(userEmail)
      setPwd(password)
      setUnconfirmedUser(tempUser)
      setShowMFAInput(true)
    } catch (error) {
      toast.warn(error.message, {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  useEffect(() => {
    if (!user) {
      setLoading(false)
      getUser()
    }
    if (user) redirectLogged()
  }, [getUser, redirectLogged, user])

  if (loading) return <AppLoading />

  return (
    <Box>
      {showMFAInput ? (
        <VerificationCodeInput
          codeDestination={
            unconfirmedUser?.challengeParam?.CODE_DELIVERY_DESTINATION || '***** ******'
          }
          code={MFACode}
          isWrongCode={isWrongCode}
          onChange={handleCodeChange}
          onResend={() => handleSignIn({ userEmail: email, password: pwd })}
        />
      ) : (
        <Box
          sx={{
            padding: 4,
            boxShadow: 5,
            borderRadius: 1,
            backgroundColor: 'primary.contrastText',
          }}
        >
          <Typography mb={1} textAlign="center" color="primary.dark" variant="h5">
            Welcome back
          </Typography>
          <Typography
            mx={isSmallScreen ? 1 : 5}
            mb={4}
            textAlign="center"
            color="primary.medium"
            variant="body1"
          >
            It’s a pleasure to have you here again
          </Typography>
          <Formik
            initialValues={
              {
                userEmail: '',
                password: '',
              } as ISignInForm
            }
            onSubmit={handleSignIn}
            validationSchema={SignInValidationSchema}
          >
            {({ isSubmitting }) => (
              <Form>
                <InputField label="Email" name="userEmail" size="small" />
                <PasswordInput size="small" name="password" label="Password" />
                <Typography
                  sx={{ mb: 2.2, cursor: 'pointer' }}
                  textAlign="left"
                  color="primary.main"
                  variant="body1"
                  onClick={() => {
                    navigate('/forgotpassword')
                  }}
                >
                  Forgot password?
                </Typography>
                <Button
                  variant="contained"
                  data-testid="LoginButton"
                  type="submit"
                  sx={{
                    width: '100%',
                    py: 1.2,
                    mb: 1.5,
                  }}
                >
                  {isSubmitting ? (
                    <CircularProgress size="1.5rem" sx={{ color: 'neutral.high.pure' }} />
                  ) : (
                    'Login'
                  )}
                </Button>{' '}
              </Form>
            )}
          </Formik>
        </Box>
      )}
      <ToastContainer />
    </Box>
  )
}

export default SignIn
