import Box from 'components/Box'
import Typography from 'components/Typography'

interface IReviewPhoneCardModal {
  breaches: Array<string>
  recommendedAction: string
  value: number
}
const ReviewPhoneCardModal = ({ recommendedAction, breaches, value }: IReviewPhoneCardModal) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box display="flex" alignItems="baseline">
        <Typography mr={1} fontSize="20px" color="#0056C0" fontWeight={500}>
          {value}
        </Typography>
        <Typography fontSize="20px" mb={3} variant="h6" color="primary.dark">
          Address Leaked
        </Typography>
      </Box>
      <Typography mb={1}>Your phone number is registered in these sites:</Typography>
      {breaches.map(breach => (
        <Typography key={breach} color="#4B5563">
          {breach}
        </Typography>
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

export default ReviewPhoneCardModal
