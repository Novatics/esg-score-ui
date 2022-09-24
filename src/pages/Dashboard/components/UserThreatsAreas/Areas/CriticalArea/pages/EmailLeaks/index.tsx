import ArrowBack from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'
import Box from 'components/Box'
import Button from 'components/Button'
import Typography from 'components/Typography'

const EmailLeaks = () => {
  const navigate = useNavigate()
  return (
    <Box>
      <Button
        onClick={() => {
          navigate('/dashboard')
        }}
        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
      >
        <ArrowBack fontSize="small" />
        Back to Dashboard
      </Button>
      <Typography fontSize="20px" mb={3}>
        Password Leaked
      </Typography>
    </Box>
  )
}

export default EmailLeaks
