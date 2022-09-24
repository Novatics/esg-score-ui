import { useState } from 'react'
import { Auth } from 'aws-amplify'
import { Formik, Form } from 'formik'
import { ToastContainer, toast } from 'react-toastify'
import Box from 'components/Box'
import Button from 'components/Button'
import Card from 'components/Card'
import CardContent from 'components/CardContent'
import CircularProgress from 'components/CircularProgress'
import PasswordInput from 'components/PasswordInput'
import Stack from 'components/Stack'
import Typography from 'components/Typography'
import { toastStyle } from 'util/toast'
import ChangePasswordSchema from './validationSchema'
import 'react-toastify/dist/ReactToastify.css'

interface IChangePasswordForm {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

const ChangePassword = () => {
  const [isUserChangingPWD, setIsUserChangingPWD] = useState(false)
  const [loading, setLoading] = useState(false)
  const handleSubmit = ({ currentPassword, newPassword }: IChangePasswordForm) => {
    setLoading(true)
    Auth.currentAuthenticatedUser()
      .then(user => {
        return Auth.changePassword(user, currentPassword, newPassword)
      })
      .then(data => {
        if (data === 'SUCCESS') {
          toast.success('Password Changed!', toastStyle)
          setLoading(false)
          setIsUserChangingPWD(false)
        }
      })
      .catch(err => {
        toast.error(err, toastStyle)
        setLoading(false)
      })
  }
  const ChangePasswordForm = () => (
    <Formik
      initialValues={
        {
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        } as IChangePasswordForm
      }
      onSubmit={handleSubmit}
      validationSchema={ChangePasswordSchema}
    >
      {() => (
        <Form>
          <PasswordInput size="small" name="currentPassword" label="Current password" />
          <PasswordInput size="small" name="newPassword" label="New password" />
          <PasswordInput size="small" name="confirmPassword" label="Confirm new Password" />
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
              alignItems: 'flex-start',
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
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                gap: 2,
                mb: 2,
              }}
            >
              <Button variant="contained" type="submit">
                {loading ? (
                  <CircularProgress size="1.5rem" sx={{ color: 'neutral.high.pure' }} />
                ) : (
                  'Change Password'
                )}
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  setIsUserChangingPWD(false)
                }}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  )
  return (
    <Stack alignItems="flex-start" spacing={2}>
      {isUserChangingPWD ? (
        <ChangePasswordForm />
      ) : (
        <Button
          onClick={() => {
            setIsUserChangingPWD(true)
          }}
          variant="outlined"
        >
          Change Password
        </Button>
      )}
      <ToastContainer />
    </Stack>
  )
}

export default ChangePassword
