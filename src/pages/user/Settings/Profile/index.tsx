import Box from 'components/Box'
import Grid from 'components/Grid'
import Typography from 'components/Typography'
import Address from './Address'
import PersonalInformation from './PersonalInformation'
import UploadPhoto from './UploadPhoto'

const Profile = () => {
  return (
    <Box pb={4}>
      <Typography fontWeight={500} color="#0056C0">
        Profile
      </Typography>
      <Grid container spacing={3}>
        <Grid item lg={2} md={12}>
          <UploadPhoto />
        </Grid>
        <Grid item lg={4} md={12}>
          <PersonalInformation />
        </Grid>
        <Grid item lg={6} md={12}>
          <Address />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Profile
