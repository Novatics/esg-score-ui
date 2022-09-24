import useSWR from 'swr'
import Button from 'components/Button'
import MailTo from 'components/MailTo'
import Stack from 'components/Stack'
import Typography from 'components/Typography'
import services from 'services'
import { SWR_COMPANY } from 'services/swr.keys'

const CompanySeats = () => {
  const { data } = useSWR(SWR_COMPANY, () => services.Company.getCompany())
  return (
    <Stack spacing={2}>
      <Typography variant="body1" fontWeight="500" color="primary.dark">
        Number of Seats
      </Typography>
      <Typography variant="body1" color="neutral.low.medium">
        {data?.seatsRemaining} out of {data?.seats}
      </Typography>
      <Stack width={200}>
        <MailTo email="learn@protexxa.com" subject="Add more seats">
          <Button variant="outlined">Request more</Button>
        </MailTo>
      </Stack>
    </Stack>
  )
}

export default CompanySeats
