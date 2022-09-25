import { useContext } from 'react'
import Box from 'components/Box'
import Grid from 'components/Grid'
import {
  categoryActions,
  scoreCommonData,
  getScoreClassification,
} from 'util/categoryActions'
import { EsgScoreContext } from 'context'

import ActionItem from './ActionCard'

const ScoreActions = () => {
  const { scoreData } = useContext(EsgScoreContext)
  const resultsArray = Object.keys(scoreData)

  return (
    <Box sx={{ m: 3 }}>
      <Grid sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        }} item xs={12} sm={12} md={12} lg={6}>
          {resultsArray.map(result => {
            const scoreRange = getScoreClassification(scoreData[result])
            return (
              <ActionItem
                recommendedAction={categoryActions[result]?.scoreResult[scoreRange]?.actionDescription}
                Icon={scoreCommonData[scoreRange]?.iconType}
                title={scoreCommonData[scoreRange]?.actionTitle}
                iconColor={scoreCommonData[scoreRange]?.iconColor}
                textColor={scoreCommonData[scoreRange]?.textColor}
                actionTitle={categoryActions[result]?.actionTitle}
              />
            )
          })}
      </Grid>
    </Box>
  )
}

export default ScoreActions
