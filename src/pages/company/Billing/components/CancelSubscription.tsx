import Button from 'components/Button'
import MailTo from 'components/MailTo'
import Stack from 'components/Stack'
import Typography from 'components/Typography'

const CancelSubscription = () => {
  return (
    <Stack spacing={1}>
      <Typography variant="body1" fontWeight="500" color="primary.dark">
        Cancel Subscription
      </Typography>
      <Stack flexDirection="row" gap={2} alignItems="center">
        <Typography variant="body1">
          Cancelling your subscription will halt all access for you and your employees to the
          Protexxa platform.
        </Typography>
      </Stack>
      <Stack pt={2}>
        <MailTo email="learn@protexxa.com" subject="Cancel subscription">
          <Button sx={{ width: 180 }} variant="outlined" size="large" color="error">
            Cancel Subscription
          </Button>
        </MailTo>
      </Stack>
    </Stack>
  )
}

export default CancelSubscription
