import ArrowBack from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import invariant from 'tiny-invariant'
import Box from 'components/Box'
import Button from 'components/Button'
import { CardBordered } from 'components/Card'
import Typography from 'components/Typography'
import Services from 'services'
import { SWR_USER_SCORE } from 'services/swr.keys'
import globalStore from 'store'
import EmailLeak from './components/EmailLeak'

const EmailLeaks = () => {
  const navigate = useNavigate()
  const { user } = globalStore()
  invariant(user, 'Expected value to be a user')
  const { data } = useSWR(SWR_USER_SCORE, () => Services.Score.get())
  if (!data || !data.scoreHistory[data.scoreHistory.length - 1].fixList.critical.email) {
    return <p>loading...</p>
  }

  const emailsLeaked = data.scoreHistory[
    data.scoreHistory.length - 1
  ].fixList.critical.email?.breaches.filter(emailLeak => emailLeak.emailBreaches.length !== 0)
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
      <CardBordered sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {(emailsLeaked || []).map(emailBreach => (
          <EmailLeak key={emailBreach.email} breach={emailBreach} />
        ))}
      </CardBordered>
    </Box>
  )
}

export default EmailLeaks
