import Box from 'components/Box'
import Grid from 'components/Grid'
import Typography from 'components/Typography'
import { IWebDomainsLeak } from 'models/score.model'

interface IDomainLeak {
  breach: IWebDomainsLeak
}
const DomainLeak = ({ breach }: IDomainLeak) => {
  const virusTotalCategory = breach.webDomainBreaches.find(
    breachInfo => breachInfo.breach === 'virustotal'
  )
  const leakedInformation = breach.webDomainBreaches.filter(
    breachInfo => breachInfo.breach !== 'virustotal'
  )
  return (
    <>
      <Typography mb={1} color="primary.main" fontWeight={500}>
        {breach.webDomain}
      </Typography>
      <Grid direction="row" container>
        <Grid item lg={1.5}>
          <Box>
            <Typography fontSize="14px" fontWeight={500}>
              Category
            </Typography>
            <Typography fontSize="14px">
              {virusTotalCategory ? virusTotalCategory.value : 'Exposed information'}
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={5}>
          <Typography fontSize="14px" fontWeight={500}>
            What does this mean?
          </Typography>
          <Typography fontSize="14px" textAlign="left">
            {virusTotalCategory?.value === 'suspicious'
              ? 'Your attention is needed to make sure your personal information remains private because some unusual activity was discovered while examining your web domain.'
              : 'There is a high chance that sensitive or personal information about your domain registration has been leaked.'}
          </Typography>
          {leakedInformation.length !== 0 && (
            <Box mt={2}>
              <Typography fontWeight={500}>Leaked Information</Typography>
              {leakedInformation.map(information => (
                <Box key={information.breach} display="flex" gap={0.5}>
                  <Typography variant="body1" fontSize="14px">{`${
                    information.breach.charAt(0).toUpperCase() + information.breach.slice(1)
                  }:`}</Typography>
                  {information.breach === 'address' ? (
                    <>
                      <Typography
                        variant="body1"
                        fontSize="14px"
                      >{`${information.value.street}`}</Typography>{' '}
                      <Typography
                        variant="body1"
                        fontSize="14px"
                      >{`${information.value.number}`}</Typography>
                    </>
                  ) : (
                    <Typography
                      variant="body1"
                      fontSize="14px"
                    >{`${information.value}`}</Typography>
                  )}
                </Box>
              ))}
            </Box>
          )}
        </Grid>
        <Grid item sx={{ mt: { xs: 2, lg: 0 } }} lg={5.5}>
          <Typography variant="h6" color="primary.main">
            Recommend Action
          </Typography>
          <Typography fontSize="14px">
            Check out what&apos;s publicly available about your domain registration or if your
            domain has been compromised in any way. You may need to contact your provider.
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default DomainLeak
