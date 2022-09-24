import useSWR from 'swr'
import Button from 'components/Button'
import MailTo from 'components/MailTo'
import Stack from 'components/Stack'
import TextBold from 'components/TextBold'
import Typography from 'components/Typography'
import services from 'services'
import { SWR_COMPANY } from 'services/swr.keys'

const BillingDetails = () => {
  const { data } = useSWR(SWR_COMPANY, () => services.Company.getCompany())
  return (
    <Stack spacing={2}>
      <Typography variant="body1" fontWeight="500" color="primary.dark">
        Billing Details
      </Typography>
      <Stack flexDirection="row" gap={1}>
        <Typography variant="body1">Number of Seats: </Typography>
        <Typography variant="body1" fontWeight="500">
          {data?.seats}
        </Typography>
      </Stack>
      <Stack flexDirection="row" gap={1}>
        <Typography variant="body1">Remaining seats: </Typography>
        <Typography variant="body1" fontWeight="500">
          {data?.seatsRemaining}
        </Typography>
      </Stack>
      <Stack width={100}>
        <MailTo email="learn@protexxa.com" subject="Add more seats">
          <Button variant="outlined">Add More</Button>
        </MailTo>
      </Stack>

      <Stack>
        <Typography variant="body1">
          Your plan will <TextBold>renew</TextBold> on Jul 10, 2022, <TextBold>charging</TextBold>{' '}
          you $2,500
        </Typography>
      </Stack>
    </Stack>
  )
}

export default BillingDetails
