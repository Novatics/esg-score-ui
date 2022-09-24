/* eslint-disable no-nested-ternary */
import { Skeleton } from '@mui/material'
import Box from 'components/Box'
import Card from 'components/Card'
import Typography from 'components/Typography'

export default function ScoreIndicatorSkeleton() {
  return (
    <Card sx={{ height: '362px' }}>
      <Box p={4} display="flex" justifyContent="space-between" flexDirection="row">
        <Typography variant="h5" color="primary.dark">
          Score
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Skeleton variant="circular" width="150px" height="150px" />
        <Box mt={2}>
          <Skeleton variant="rectangular" width="100px" height="40px" />
        </Box>
        <Box mt={1}>
          <Skeleton variant="rectangular" width="100px" height="20px" />
        </Box>
      </Box>
    </Card>
  )
}
