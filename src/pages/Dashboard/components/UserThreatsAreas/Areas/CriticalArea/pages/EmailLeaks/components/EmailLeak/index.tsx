/* eslint-disable react/no-danger */
import { ReactComponent as LinkIcon } from 'assets/Icons/Link.svg'
import Box from 'components/Box'
import Button from 'components/Button'
import { CardBordered } from 'components/Card'
import Divider from 'components/Divider'
import Grid from 'components/Grid'
import Typography from 'components/Typography'

interface IEmailLeak {
  breach: any
}
const EmailLeak = ({ breach }: IEmailLeak) => {
  return (
    <CardBordered>
      <Typography>
        Your email
        <Typography display="inline" variant="subtitle1" color="primary.main">
          {' '}
          {breach.email}{' '}
        </Typography>
        was leaked in these sites:
      </Typography>
      {breach.emailBreaches.map((emailBreach, index) => (
        <>
          <Grid key={emailBreach.name} direction="row" container>
            <Grid item lg={1.5}>
              <Button
                onClick={() => {
                  if (emailBreach.domain) window.open(`https://${emailBreach.domain}`, '_blank')
                }}
                sx={{ pl: 0 }}
              >
                {emailBreach.name} <LinkIcon />
              </Button>
              <Box>
                <Typography fontSize="14px" fontWeight={500}>
                  Date of the leak
                </Typography>
                <Typography fontSize="14px">{emailBreach.date}</Typography>
              </Box>
            </Grid>
            <Grid item lg={6} sx={{ mt: 4 }}>
              <Typography fontWeight={500}>Details</Typography>
              <p
                style={{ fontFamily: 'Geomanist', fontSize: '14px' }}
                dangerouslySetInnerHTML={{
                  __html: emailBreach.description.replace(/&lt;/g, '<').replace(/&gt;/g, '>'),
                }}
              />
            </Grid>
            <Grid item sx={{ mt: { xs: 2 } }} lg={4.5}>
              <Typography variant="h6" color="primary.main">
                Recommend Action
              </Typography>
              <Typography fontSize="14px">
                Log into your account and change your password immediately.
              </Typography>
            </Grid>
          </Grid>
          {index < breach.emailBreaches.length - 1 ? <Divider sx={{ my: 2 }} /> : null}
        </>
      ))}
    </CardBordered>
  )
}

export default EmailLeak
