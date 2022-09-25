import { useContext } from 'react'
import { Grid } from '@mui/material'
import Box from 'components/Box'
import Typography from 'components/Typography'
import { EsgScoreContext } from 'context'
import AppLoading from 'containers/App/AppLoading'

import Score from './components/ScoreIndicator'
import ScoreInformation from './components/ScoreInformation'
import ScoreActions from './components/ScoreActions'

export default function Dashboard() {
  const { scoreData } = useContext(EsgScoreContext)

  if (!scoreData) return <AppLoading />

  return (
    <Box mt={1}>
      <Typography variant="h4">Dashboard</Typography>
      <Grid mt={2} container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Score />
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <ScoreInformation />
        </Grid>
      </Grid>
      <Box mt={4}>
        <ScoreActions />
      </Box>
    </Box>
  )
}
