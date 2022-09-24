import ChangePassword from 'components/ChangePassword'
import Stack from 'components/Stack'
import Typography from 'components/Typography'
import globalStore from 'store'

const SecurityInformation = () => {
  const { user } = globalStore()

  return (
    <Stack spacing={2}>
      <Typography variant="body1" fontWeight="500" color="primary.dark">
        Security Information
      </Typography>
      <Stack gap={1} flexDirection="row">
        <Typography variant="body1">Email:</Typography>
        <Typography variant="body1" fontWeight="500">
          {user?.email}
        </Typography>
      </Stack>
      <Stack gap={1} flexDirection="row">
        <Typography variant="body1">Password:</Typography>
        <Typography variant="body1" fontWeight="500">
          ****
        </Typography>
      </Stack>
      <Stack>
        <ChangePassword />
      </Stack>
    </Stack>
  )
}

export default SecurityInformation
