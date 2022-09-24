import Box from 'components/Box'
import ChangePassword from 'components/ChangePassword'
import Typography from 'components/Typography'

const ChangeUserPassword = () => {
  return (
    <Box>
      <Typography fontWeight="500" color="#1C2431">
        Password
      </Typography>
      <ChangePassword />
    </Box>
  )
}

export default ChangeUserPassword
