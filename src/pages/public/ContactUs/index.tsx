import Box from 'components/Box'
import { CardBordered } from 'components/Card'
import Typography from 'components/Typography'
import HubspotContactForm from './components/HubspotContactForm'

const ContactUs = () => {
  return (
    <CardBordered
      sx={{ display: 'flex', flexDirection: 'column', mt: { lg: 3, xs: 15 }, height: 'auto' }}
    >
      <Box mb={2}>
        <Typography textAlign="center" color="primary.main" variant="h6">
          Thanks for reaching out
        </Typography>
        <Typography textAlign="center" color="primary.main" variant="h6">
          We are here to help, let&apos;s talk
        </Typography>
      </Box>
      <HubspotContactForm />
    </CardBordered>
  )
}

export default ContactUs
