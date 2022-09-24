import { useEffect } from 'react'
import { Grid } from '@mui/material'
import Box from 'components/Box'
import Typography from 'components/Typography'
import globalStore from 'store'
import Score from './components/ScoreIndicator'
import ScoreInformation from './components/ScoreInformation'
import UserThreatsAreas from './components/UserThreatsAreas'

export default function Dashboard() {
  const { fetchUserScore } = globalStore()

  useEffect(() => {
    fetchUserScore()
  }, [fetchUserScore])

  return (
    <Box mt={1}>
      <Typography variant="h4">Dashboard</Typography>
      <Grid mt={2} container spacing={2}>
        {/* SCORE GRAPH */}
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Score />
        </Grid>

        {/* SCORE INFORMATION */}
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <ScoreInformation />
        </Grid>
      </Grid>

      {/* // FIX LIST */}
      <Box mt={4}>
        <UserThreatsAreas />
      </Box>
    </Box>
  )
}
