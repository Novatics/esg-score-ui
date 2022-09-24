import { ReactComponent as CriticalIcon } from 'assets/Icons/Areas/Critical.svg'
import Box from 'components/Box'
import { CardBordered } from 'components/Card'
import Divider from 'components/Divider'
import Grid from 'components/Grid'
import Skeleton from 'components/Skeleton'
import Typography from 'components/Typography'

const CriticalSkeleton = () => (
  <CardBordered sx={{ width: '100%', mt: 3 }}>
    <Box display="flex" justifyContent="space-between" mb={2}>
      <Box display="flex" alignItems="baseline">
        <CriticalIcon fill="#BE0027" />
        <Box ml={2}>
          <Typography variant="h5" color="#374151">
            Critical Areas
          </Typography>
          <Typography color="gray.dark">
            Your accounts are at risk! Check your fix list below.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          width: 'fit-content',
          px: 2,
          py: 1.5,
          alignItems: 'center',
          backgroundColor: '#FFF8F9',
          borderRadius: 1,
        }}
      >
        <Typography mr={1} variant="h5" color="#BE0027">
          <Skeleton width="15px" height="15px" />
        </Typography>

        <Typography color="#BE0027">threats identified</Typography>
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

export default CriticalSkeleton
