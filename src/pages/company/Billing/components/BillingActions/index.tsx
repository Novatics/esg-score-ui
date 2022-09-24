import { useState } from 'react'
import useSWR from 'swr'
import Button from 'components/Button'
import Stack from 'components/Stack'
import TextBold from 'components/TextBold'
import Typography from 'components/Typography'
import Services from 'services'
import BillingEmailModal from './BillingEmailModal'

const BillingActions = () => {
  const [isBillingModalOpened, setIsBillingModalOpened] = useState(false)
  const { data } = useSWR('SWR_COMPANY', () => Services.Company.getCompany())
  return (
    <Stack spacing={1}>
      <Typography variant="body1" fontWeight="500" color="primary.dark">
        Billing Actions
      </Typography>
      <Stack flexDirection="row" gap={2} alignItems="center">
        <Typography variant="body1">
          Billing emails are sent to: <TextBold>{data?.billingEmail}</TextBold>{' '}
        </Typography>
        <Button
          onClick={() => {
            setIsBillingModalOpened(true)
          }}
        >
          Change E-mail
        </Button>
        <BillingEmailModal
          isModalOpened={isBillingModalOpened}
          setIsModalOpened={setIsBillingModalOpened}
        />
      </Stack>
    </Stack>
  )
}

export default BillingActions
