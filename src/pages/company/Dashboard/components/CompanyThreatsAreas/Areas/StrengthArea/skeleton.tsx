import { ReactComponent as StrengthIcon } from 'assets/Icons/Areas/Strength.svg'
import Box from 'components/Box'
import { CardBordered } from 'components/Card'
import Divider from 'components/Divider'
import Grid from 'components/Grid'
import Skeleton from 'components/Skeleton'
import Typography from 'components/Typography'

const StrengthSkeleton = () => (
  <CardBordered sx={{ width: '100%', mt: 3 }}>
    <Box display="flex" justifyContent="space-between" mb={2}>
      <Box display="flex" alignItems="baseline">
        <StrengthIcon fill="#006BF0" />
        <Box ml={2}>
          <Typography variant="h5" color="#374151">
            Areas of Strength
          </Typography>
          <Typography color="gray.dark">These items help keep your company safe.</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          width: 'fit-content',
          px: 2,
          py: 1.5,
          alignItems: 'center',
          backgroundColor: '#F2F8FF',
          borderRadius: 1,
        }}
      >
        <Typography mr={1} variant="h5" color="#0056C0">
          <Skeleton width="15px" height="15px" />
        </Typography>
        <Typography color="#0056C0">areas identified</Typography>
      </Box>
    </Box>
    <Divider />
    <Grid mt={2} container spacing={1}>
      <Grid item lg={6} sm={12}>
        <Skeleton height="150px" />
      </Grid>
      <Grid item lg={6} sm={12}>
        <Skeleton height="150px" />
      </Grid>
      <Grid item lg={6} sm={12}>
        <Skeleton height="150px" />
      </Grid>
    </Grid>
  </CardBordered>
)

export default StrengthSkeleton
