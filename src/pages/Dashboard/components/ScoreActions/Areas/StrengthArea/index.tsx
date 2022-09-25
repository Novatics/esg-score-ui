import { ReactComponent as StrengthIcon } from 'assets/Icons/Areas/Strength.svg'
import Box from 'components/Box'
import { CardBordered } from 'components/Card'
import Divider from 'components/Divider'
import Grid from 'components/Grid'
import Typography from 'components/Typography'
import StrengthCard from './strengthCard'

const StrengthArea = () => {
  return (
    <CardBordered sx={{ mt: 3 }}>
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
          <Typography color="#0056C0">areas identified</Typography>
        </Box>
      </Box>
      <Divider />
      <Grid mt={2} container spacing={2}>
        <Grid mt={2} key={1} item xs={12} sm={12} md={12} lg={6}>
          <StrengthCard
            reasonToBeImportant={'Lorem'}
            description={'Lorem'}
            title={'Lorem'}
          />
        </Grid>
      </Grid>
    </CardBordered>
  )
}

export default StrengthArea
