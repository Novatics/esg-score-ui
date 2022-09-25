import Box from 'components/Box'
import Typography from 'components/Typography'

interface IEmailBreaches {
  email: string
  emailBreaches: Array<string>
}
interface IReviewCardModal {
  breaches: Array<IEmailBreaches>
  recommendedAction: string
}
const ReviewEmailCardModal = ({ recommendedAction, breaches }: IReviewCardModal) => {
  const emailsBreached = breaches.filter(email => email.emailBreaches.length !== 0)
  const emailsNotBreached = breaches.filter(email => email.emailBreaches.length === 0)
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box display="flex" alignItems="baseline">
        <Typography fontSize="20px" mb={3} variant="h6" color="primary.dark">
          Email Address Leaked
        </Typography>
      </Box>
      {emailsBreached.map(breach => (
        <Box sx={{ width: '100%' }} key={breach.email} mb={2}>
          <Typography mb={1}>
            Your email <span style={{ fontWeight: 500 }}>{breach.email}</span> was leaked in these
            sites:
          </Typography>
          {breach.emailBreaches.map(site => (
            <Typography key={site} color="#4B5563">
              {site}
            </Typography>
          ))}
        </Box>
      ))}
      <Typography mb={1}>Safe emails:</Typography>
      {emailsNotBreached.map(breach => (
        <Box sx={{ width: '100%' }} key={breach.email} mb={2}>
          <span style={{ fontWeight: 500 }}>{breach.email}</span>
        </Box>
      ))}

      <Typography mt={3} mb={2} variant="h6" color="primary.main">
        Recommended Action:
      </Typography>
      <Box maxWidth="400px">
        <Typography textAlign="center" fontWeight={400} fontSize={16} color="neutral.low.dark">
          {recommendedAction}
        </Typography>
      </Box>
    </Box>
  )
}

export default ReviewEmailCardModal
