import { ReactComponent as CriticalIcon } from 'assets/Icons/Areas/Critical.svg'
import { ReactComponent as ImportantIcon } from 'assets/Icons/Areas/Important.svg'
import { ReactComponent as StrengthIcon } from 'assets/Icons/Areas/Strength.svg'
import Box from 'components/Box'
import Grid from 'components/Grid'
import {
  categoryActions,
  categoryTypes,
  scoreResult,
  scoreCommonData,
} from 'util/categoryActions'

import ActionItem from './ActionCard'

const ScoreActions = () => {
  return (
    <Box sx={{ m: 3 }}>
      <Grid sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        }} item xs={12} sm={12} md={12} lg={6}>
        <ActionItem
          recommendedAction={categoryActions[categoryTypes.energy].scoreResult[scoreResult.low].actionDescription}
          Icon={CriticalIcon}
          title={scoreCommonData[scoreResult.low].actionTitle}
          iconColor={scoreCommonData[scoreResult.low].iconColor}
          textColor={scoreCommonData[scoreResult.low].textColor}
          actionTitle={categoryActions[categoryTypes.energy].actionTitle}
        />
        <ActionItem
          recommendedAction={categoryActions[categoryTypes.transport].scoreResult[scoreResult.medium].actionDescription}
          Icon={ImportantIcon}
          title={scoreCommonData[scoreResult.medium].actionTitle}
          iconColor={scoreCommonData[scoreResult.medium].iconColor}
          textColor={scoreCommonData[scoreResult.medium].textColor}
          actionTitle={categoryActions[categoryTypes.transport].actionTitle}
        />
        <ActionItem
         recommendedAction={categoryActions[categoryTypes.tax].scoreResult[scoreResult.high].actionDescription}
          Icon={StrengthIcon}
          title={scoreCommonData[scoreResult.high].actionTitle}
          iconColor={scoreCommonData[scoreResult.high].iconColor}
          textColor={scoreCommonData[scoreResult.high].textColor}
          actionTitle={categoryActions[categoryTypes.tax].actionTitle}
        />
        <ActionItem
          recommendedAction={categoryActions[categoryTypes.education].scoreResult[scoreResult.low].actionDescription}
          Icon={CriticalIcon}
          title={scoreCommonData[scoreResult.low].actionTitle}
          iconColor={scoreCommonData[scoreResult.low].iconColor}
          textColor={scoreCommonData[scoreResult.low].textColor}
          actionTitle={categoryActions[categoryTypes.education].actionTitle}
        />
        <ActionItem
          recommendedAction={categoryActions[categoryTypes.health].scoreResult[scoreResult.low].actionDescription}
          Icon={CriticalIcon}
          title={scoreCommonData[scoreResult.low].actionTitle}
          iconColor={scoreCommonData[scoreResult.low].iconColor}
          textColor={scoreCommonData[scoreResult.low].textColor}
          actionTitle={categoryActions[categoryTypes.health].actionTitle}
        />
      </Grid>
    </Box>
  )
}

export default ScoreActions
