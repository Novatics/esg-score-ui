/* eslint-disable max-lines */
/* eslint-disable complexity */
import { ReactComponent as ImportantIcon } from 'assets/Icons/Areas/Important.svg'
import Box from 'components/Box'
import { CardBordered } from 'components/Card'
import Divider from 'components/Divider'
import Grid from 'components/Grid'
import Typography from 'components/Typography'
import { userThreats as threatsMap } from 'util/threatsInfo'
import ReviewInvasiveAppsCardModal from '../components/ReviewCardModal/ReviewInvasiveAppsCardModal'
import ImportantCard from './components/ImportantCard'

const ImportantArea = () => {
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
          <Typography color="#665600">threats identified</Typography>
        </Box>
      </Box>
      <Divider />
      <Grid mt={4} container spacing={2}>
         <Grid item xs={12} sm={12} md={12} lg={6}>
            <ImportantCard
              recommendedAction={threatsMap.top10Apps.recommendedAction}
              description={threatsMap.top10Apps.description}
              Icon={threatsMap.top10Apps.icon}
              title={threatsMap.top10Apps.title}
              reviewComponent={
                <ReviewInvasiveAppsCardModal
                  recommendedAction={threatsMap.top10Apps.recommendedAction}
                />
              }
            />
          </Grid>
      </Grid>
    </CardBordered>
  )
}

export default ImportantArea
