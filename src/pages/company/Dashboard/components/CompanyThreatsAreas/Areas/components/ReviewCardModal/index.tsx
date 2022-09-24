import Box from 'components/Box'
import Typography from 'components/Typography'

interface IReviewCardModal {
  title: string
  value?: number
  area: 'critical' | 'important' | 'strength'
  recommendedAction: string
}
const TYPE_COLOR = {
  critical: '#BE0027',
  strength: '#3389F3',
  important: '#665600',
}
const ReviewCardModal = ({ area, title, value, recommendedAction }: IReviewCardModal) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '574px',
      }}
    >
      <Box textAlign="center" display="flex" alignItems="baseline">
        <Typography display="inline" fontSize="20px" mb={3} variant="h6" color="primary.dark">
          <Typography display="inline" fontSize="20px" color={TYPE_COLOR[area]} fontWeight={500}>
            {value}&nbsp;
          </Typography>
          {title}
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" width="100%" justifyContent="flex-start">
        <Typography mt={3} mb={2} variant="h6" color="primary.main">
          Recommended Action:
        </Typography>
        <Typography fontWeight={400} fontSize={16} color="neutral.low.dark">
          {recommendedAction}
        </Typography>
      </Box>
    </Box>
  )
}

export default ReviewCardModal
