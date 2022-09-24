import { Auth } from 'aws-amplify'
import { Formik, Form } from 'formik'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import * as Yup from 'yup'
import Box from 'components/Box'
import Button from 'components/Button'
import Card, { CardBordered } from 'components/Card'
import CardContent from 'components/CardContent'
import CircularProgress from 'components/CircularProgress'
import PasswordInput from 'components/PasswordInput'
import Typography from 'components/Typography'
import { toastStyle } from 'util/toast'
import 'react-toastify/dist/ReactToastify.css'

interface IResetPassword {
  verificationCode: string
  email: string
}
interface IResetPasswordForm {
  newPassword: string
  confirmNewPassword: string
}

const changePasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required('Password is required')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      'Must Contain at least One Uppercase, One Lowercase, One Number and One Special Character'
    ),
  confirmNewPassword: Yup.string()
    .required('Confirm password is required')
    .when('newPassword', {
      is: val => !!(val && val.length > 0),
      then: Yup.string().oneOf([Yup.ref('newPassword')], 'Both passwords need to be the same'),
    }),
})

const NewPasswordInput = ({ verificationCode, email }: IResetPassword) => {
  const navigate = useNavigate()
  const onSubmit = ({ newPassword }: IResetPasswordForm) => {
    Auth.forgotPasswordSubmit(email, verificationCode, newPassword)
      .then(() => {
        navigate('/signin')
        toast.success('Password changed succesfully', toastStyle)
      })
      .catch(error => {
        toast.error(error.response.data.message, toastStyle)
      })
  }
  return (
    <Box
      sx={{
        margin: 3.5,
        maxWidth: '406px',
        mt: {
          xs: 15,
          sm: 10,
          md: 10,
        },
        boxShadow: 5,
        borderRadius: 1.5,
        backgroundColor: 'primary.contrastText',
      }}
    >
      <CardBordered>
        <Typography mb={1} textAlign="center" color="primary.dark" variant="h5">
          Reset Password
        </Typography>
        <Typography mb={3} color="#66A6F6" variant="body1" textAlign="center">
          Set a strong password to keep your account secure
        </Typography>
        <Formik
          onSubmit={onSubmit}
          initialValues={{
            newPassword: '',
            confirmNewPassword: '',
          }}
          validationSchema={changePasswordSchema}
        >
          {({ isSubmitting }) => (
            <Form>
              <PasswordInput size="small" name="newPassword" label="Password" />
              <PasswordInput size="small" name="confirmNewPassword" label="Confirm Password" />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2.5,
                }}
              >
                <Card
                  sx={{ marginTop: 1, marginBottom: 4, backgroundColor: 'background.lightBlue' }}
                >
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
                  'Reset Password'
                )}
              </Button>
              <Button
                sx={{ width: '100%', p: 1.5 }}
                type="submit"
                onClick={() => {
                  navigate('/signin')
                }}
              >
                cancel
              </Button>
            </Form>
          )}
        </Formik>
      </CardBordered>
      <ToastContainer />
    </Box>
  )
}

export default NewPasswordInput
