import { ReactComponent as CriticalIcon } from 'assets/Icons/Areas/Critical.svg'
import { ReactComponent as ImportantIcon } from 'assets/Icons/Areas/Important.svg'
import { ReactComponent as StrengthIcon } from 'assets/Icons/Areas/Strength.svg'
import Box from 'components/Box'
import Grid from 'components/Grid'
import ActionItem from './ActionCard'

const recomendedText = 'Você tem um consumo energético acima da média, isso tem um impacto negativo para o mundo. Para melhorar seu score procure utilizar melhor a luz solar, tomar banhos mais frios ou mornos e reduza o consumo de energia.'


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
          recommendedAction={recomendedText}
          Icon={CriticalIcon}
          title={'Retardatário'}
          iconColor={'#F2CCD4'}
        />
        <ActionItem
          recommendedAction={recomendedText}
          Icon={ImportantIcon}
          title={'Retardatário'}
          iconColor={'#FFD600'}
        />
        <ActionItem
          recommendedAction={recomendedText}
          Icon={StrengthIcon}
          title={'Retardatário'}
          iconColor={'#009900'}
        />
        <ActionItem
          recommendedAction={recomendedText}
          Icon={CriticalIcon}
          title={'Retardatário'}
          iconColor={'#F2CCD4'}
        />
        <ActionItem
          recommendedAction={recomendedText}
          Icon={CriticalIcon}
          title={'Retardatário'}
          iconColor={'#F2CCD4'}
        />
      </Grid>
    </Box>
  )
}

export default ScoreActions
