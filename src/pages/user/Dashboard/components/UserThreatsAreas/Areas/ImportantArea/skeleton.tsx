import { ReactComponent as ImportantIcon } from 'assets/Icons/Areas/Important.svg'
import Box from 'components/Box'
import { CardBordered } from 'components/Card'
import Divider from 'components/Divider'
import Grid from 'components/Grid'
import Skeleton from 'components/Skeleton'
import Typography from 'components/Typography'

const ImportantSkeleton = () => {
  return (
    <CardBordered sx={{ mt: 3 }}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Box display="flex" alignItems="baseline">
          <ImportantIcon fill="#FFD600" />
          <Box ml={2}>
            <Typography variant="h5" color="#374151">
              Important Areas
            </Typography>
            <Typography color="gray.dark">
              Fixing these issues could have a major impact for your safety online.
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
            backgroundColor: '#FFF7CC66',
            borderRadius: 1,
          }}
        >
          <Typography mr={1} variant="h5" color="#665600">
            <Skeleton width="15px" height="15px" />
          </Typography>
          <Typography color="#665600">threats identified</Typography>
        </Box>
      </Box>
      <Divider />
      <Grid mt={4} container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Skeleton height="150px" />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Skeleton height="150px" />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Skeleton height="150px" />
        </Grid>
      </Grid>
    </CardBordered>
  )
}

export default ImportantSkeleton
