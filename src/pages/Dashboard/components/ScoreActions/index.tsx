import Box from 'components/Box'
import Grid from 'components/Grid'
import {
  categoryActions,
  categoryTypes,
  scoreResult,
  scoreCommonData,
  getScoreClassification,
} from 'util/categoryActions'

import ActionItem from './ActionCard'

const mockScoreResult = {
  [categoryTypes.energy]: 1.2,
  [categoryTypes.transport]: 2.2,
  [categoryTypes.tax]: 7.2,
  [categoryTypes.education]: 5.7,
  [categoryTypes.health]: 4.2,
};

const ScoreActions = () => {
  const resultsArray = Object.keys(mockScoreResult)

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
            const scoreRange = getScoreClassification(mockScoreResult[result])
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
