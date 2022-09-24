import ArrowBack from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import invariant from 'tiny-invariant'
import Box from 'components/Box'
import Button from 'components/Button'
import { CardBordered } from 'components/Card'
import Divider from 'components/Divider'
import Typography from 'components/Typography'
import Services from 'services'
import { SWR_USER_SCORE } from 'services/swr.keys'
import globalStore from 'store'
import SiteLeak from './components/DomainLeak'

const WebDomainsLeaks = () => {
  const navigate = useNavigate()
  const { user } = globalStore()
  invariant(user, 'Expected value to be a user')
  const { data } = useSWR(SWR_USER_SCORE, () => Services.Score.get())
  if (!data) {
    return <p>loading...</p>
  }
  const webDomainsleak = data.scoreHistory[
    data.scoreHistory.length - 1
  ].fixList.critical.webDomains?.breaches.filter(
    webDomain => webDomain.webDomainBreaches.length !== 0
  )
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
          <span style={{ fontWeight: 500 }}>{webDomainsleak?.length}</span> of your web domains
          might have been compromised
        </Typography>
        {webDomainsleak?.map((breach, index) => (
          <>
            <SiteLeak key={breach.webDomain} breach={breach} />
            {index < webDomainsleak.length - 1 ? <Divider /> : null}
          </>
        ))}
      </CardBordered>
    </Box>
  )
}

export default WebDomainsLeaks
