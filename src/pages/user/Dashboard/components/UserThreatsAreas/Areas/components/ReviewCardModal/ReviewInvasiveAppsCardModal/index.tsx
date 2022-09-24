import Box from 'components/Box'
import Typography from 'components/Typography'

interface IReviewInvasiveAppsCardModal {
  recommendedAction: string
}
const ReviewInvasiveAppsCardModal = ({ recommendedAction }: IReviewInvasiveAppsCardModal) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h6" color="#0056C0">
        Invasive Apps Permitions
      </Typography>
      <Typography fontSize="16px">
        You are using some apps that can be harmful for your security:
      </Typography>
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

export default ReviewInvasiveAppsCardModal
