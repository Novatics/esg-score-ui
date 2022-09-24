import { useTheme, useMediaQuery } from '@mui/material'
import { Auth } from 'aws-amplify'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import Box from 'components/Box'
import Button from 'components/Button'
import TextField from 'components/TextField'
import Typography from 'components/Typography'
import 'react-toastify/dist/ReactToastify.css'
import { toastStyle } from 'util/toast'

interface IEmailInput {
  email: string
  setEmail: (value: string) => void
  setForgotPasswordStatus: (value: string) => void
}
const EmailInput = ({ email, setEmail, setForgotPasswordStatus }: IEmailInput) => {
  const theme = useTheme()
  const navigate = useNavigate()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  const handleSendForgotPasswordCode = () => {
    Auth.forgotPassword(email)
      .then(() => {
        setForgotPasswordStatus('codeInput')
      })
      .catch(error => {
        toast.error(error.response.data.message, toastStyle)
      })
  }
  return (
    <Box
      sx={{
        padding: 4,
        boxShadow: 5,
        borderRadius: 1,
        backgroundColor: 'primary.contrastText',
        maxWidth: '506px',
      }}
    >
      <Typography mb={1} textAlign="center" color="primary.dark" variant="h5">
        Forgot Password
      </Typography>
      <Typography
        mx={isSmallScreen ? 1 : 5}
        mb={4}
        textAlign="center"
        color="primary.medium"
        variant="body1"
      >
        Please enter the email address associated with your account and we will send a verification
        code to reset your password.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Typography mb={1} variant="body1">
          E-mail
        </Typography>
        <TextField
          sx={{ width: '100%', mb: 1.5 }}
          size="small"
          value={email}
          onChange={e => {
            setEmail(e.target.value)
          }}
        />
        <Button
          sx={{ width: '100%', p: 1.5 }}
          variant="contained"
          onClick={() => {
            handleSendForgotPasswordCode()
          }}
        >
          Send code
        </Button>
        <Button
          sx={{ width: '100%', p: 1.5 }}
          onClick={() => {
            navigate('/signin')
          }}
        >
          cancel
        </Button>
      </Box>
      <ToastContainer />
    </Box>
  )
}

export default EmailInput
