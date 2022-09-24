import ArrowBack from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'
import Box from 'components/Box'
import Button from 'components/Button'
import { CardBordered } from 'components/Card'
import Typography from 'components/Typography'

const WebDomainsLeaks = () => {
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
        Web Domains Compromised
      </Typography>
      <CardBordered>
        <Typography mb={2}>
          <span style={{ fontWeight: 500 }}>2</span> of your web domains
          might have been compromised
        </Typography>
      </CardBordered>
    </Box>
  )
}

export default WebDomainsLeaks
