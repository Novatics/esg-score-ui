import Box from 'components/Box'
import Link from 'components/Link'
import Typography from 'components/Typography'

interface IReviewImageCardModal {
  breaches: Array<string>
  recommendedAction: string
  value: number
}
const ReviewImageCardModal = ({ recommendedAction, breaches, value }: IReviewImageCardModal) => {
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
          Personal Image in Use
        </Typography>
      </Box>
      <Typography mb={1}>Your personal image was found in these sites:</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
        {breaches.map(breach => (
          <Link href={breach} key={breach} color="#4B5563">
            {breach}
          </Link>
        ))}
      </Box>
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

export default ReviewImageCardModal
