import Button from 'components/Button'
import Stack from 'components/Stack'
import Typography from 'components/Typography'

const DeleteMyProfile = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="body1" fontWeight="500" color="primary.dark">
        Delete my Profile
      </Typography>
      <Typography variant="body1" color="neutral.low.medium">
        You will receive an email to confirm your decision. This will not end your subscription or
        payments and you will continue to be charged. You can cancel your subscription, or switch
        payment methods to keep the team active.
      </Typography>

      <Typography variant="body1" color="neutral.low.medium">
        This can’t be reversed.
      </Typography>
      <Stack width={150}>
        <Button variant="outlined" color="error">
          Delete my Profile
        </Button>
      </Stack>
    </Stack>
  )
}

export default DeleteMyProfile
