import PartnerBarbados from 'assets/images/TrustedPartners/PartnerBarbados.svg'
import PartnerHxouse from 'assets/images/TrustedPartners/PartnerHxouse.svg'
import PartnerMars from 'assets/images/TrustedPartners/PartnerMars.svg'
import PartnerSdocca from 'assets/images/TrustedPartners/PartnerSdocca.svg'
import PartnerVentureLab from 'assets/images/TrustedPartners/PartnerVentureLab.svg'
import Box from 'components/Box'
import Container from 'components/Container'
import Grid from 'components/Grid'
import Typography from 'components/Typography'
import { PartnerLogo, BackgroundBox } from './styles'

export default function TrustedPartnersSection() {
  return (
    <BackgroundBox p={6}>
      <Container>
        <Box mb={4}>
          <Typography textAlign="center" variant="h5" color="primary.contrastText">
            Trusted Partners
          </Typography>
          <Typography textAlign="center" variant="body1" color="primary.contrastText">
            Partnerships in place to keep you secure and supported
          </Typography>
        </Box>
        <Grid container spacing={4} direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={4} sm={3} md={2}>
            <PartnerLogo className="grid-item" alt="mars" src={PartnerMars} />
          </Grid>
          <Grid item xs={4} sm={3} md={2}>
            <PartnerLogo className="grid-item" alt="canada" src={PartnerHxouse} />
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <PartnerLogo className="grid-item" alt="VentureLab" src={PartnerVentureLab} />
          </Grid>
          <Grid item xs={4} sm={4} md={2}>
            <PartnerLogo className="grid-item" alt="Barbados" src={PartnerSdocca} />
          </Grid>
          <Grid item>
            <PartnerLogo className="grid-item" alt="kpmg" src={PartnerBarbados} />
          </Grid>
        </Grid>
      </Container>
    </BackgroundBox>
  )
}
