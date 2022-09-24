/* eslint-disable max-lines */
import { Formik, Form } from 'formik'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Box from 'components/Box'
import Button from 'components/Button'
import Card from 'components/Card'
import CardContent from 'components/CardContent'
import CircularProgress from 'components/CircularProgress'
import InputField from 'components/InputField'
import PasswordInput from 'components/PasswordInput'
import Typography from 'components/Typography'
import AutoCompleteCountrySelect from '../AutoCompleteCountrySelect/index'
import { StyledLink } from './styles'
import RegisterUserSchema from './validationSchema'
import 'react-toastify/dist/ReactToastify.css'

export interface IRegisterForm {
  fullname: string
  email: string
  phone: string
  password: string
  confirmPassword: string
}
interface IRegisterUserForm {
  onSubmit: ({ fullname, email, phone, password }: IRegisterForm) => Promise<void>
}

const RegisterUserForm = ({ onSubmit }: IRegisterUserForm) => {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        maxWidth: '406px',
        margin: 3.5,
        mt: {
          xs: 20,
          sm: 10,
          md: 10,
          lg: 10,
          xl: 10,
        },
        padding: 4,
        boxShadow: 5,
        borderRadius: 1.5,
        backgroundColor: 'primary.contrastText',
      }}
    >
      <Box>
        <Typography textAlign="center" mb={1} variant="h5" color="primary.dark">
          Create a new account
        </Typography>
        <Typography
          textAlign="center"
          mb={3}
          variant="subtitle2"
          fontWeight={400}
          color="primary.medium"
        >
          It’s a pleasure to have you here, let’s get started
        </Typography>
      </Box>
      <Formik
        initialValues={
          {
            fullname: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
          } as IRegisterForm
        }
        onSubmit={onSubmit}
        validationSchema={RegisterUserSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              label="Full name"
              name="fullname"
              size="small"
              placeholder="Insert your full name"
            />
            <InputField label="Email" name="email" size="small" placeholder="Insert your e-mail" />
            <AutoCompleteCountrySelect name="phone" label="Phone Number" />
            <PasswordInput size="small" name="password" label="Password" />
            <PasswordInput size="small" name="confirmPassword" label="Confirm Password" />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: {
                  sg: '264px',
                  md: '342px',
                },
                position: 'relative',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundSize: '',
              }}
            >
              <Card sx={{ marginTop: 1, marginBottom: 4, background: '#F4F9FF' }}>
                <CardContent>
                  <Typography sx={{ fontSize: 16 }} color="primary.dark">
                    <b>Password requirements:</b>
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14, marginTop: 1, marginBottom: 1 }}
                    color="primary.dark"
                  >
                    Minimum 8 characters;
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="primary.dark">
                    At least one number;
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14, marginTop: 1, marginBottom: 1 }}
                    color="primary.dark"
                  >
                    At least one uppercase letter;
                  </Typography>
                  <Typography sx={{ fontSize: 14, marginTop: 1 }} color="primary.dark">
                    Contains at least 1 special character
                    {'(^ $ * . [ ] { } ( ) ? -  ! @ # % & /  , > < : ; | _ ~ + =)'}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Typography mb={2.5} variant="body1" color="neutral.low.medium">
              By signing up you are agreeing with out <StyledLink> Terms of Use </StyledLink> and{' '}
              <StyledLink>Privacy Policy</StyledLink>
            </Typography>
            <Button
              data-testid="CreateAccountButton"
              type="submit"
              sx={{
                width: '100%',
                py: 1.2,
                mb: 1.5,
              }}
              variant="contained"
            >
              {isSubmitting ? (
                <CircularProgress size="1.5rem" sx={{ color: 'neutral.high.pure' }} />
              ) : (
                'Create Account'
              )}
            </Button>
            <Typography variant="body1" textAlign="center" color="neutral.low.medium">
              Already have an account?
              <StyledLink
                onClick={() => {
                  navigate('/signin')
                }}
              >
                {' '}
                Login
              </StyledLink>
            </Typography>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </Box>
  )
}

export default RegisterUserForm
