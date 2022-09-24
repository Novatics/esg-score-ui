import { CardBordered } from 'components/Card'
import Divider from 'components/Divider'
import Stack from 'components/Stack'
import BillingActions from './components/BillingActions'
import BillingDetails from './components/BillingDetails'
import CancelSubscription from './components/CancelSubscription'

function Billing() {
  const StyledDivider = () => (
    <Divider color="#c5c7cc" style={{ marginTop: 24, marginBottom: 24 }} />
  )

  return (
    <CardBordered elevation={2} sx={{ padding: 4 }}>
      <Stack>
        <BillingDetails />
        <StyledDivider />
        <BillingActions />
        <StyledDivider />
        <CancelSubscription />
      </Stack>
    </CardBordered>
  )
}

export default Billing
