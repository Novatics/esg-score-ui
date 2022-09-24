import { useTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Button from 'components/Button'
import Grid from 'components/Grid'
import Typography from 'components/Typography'
import { Container, BackgroundBox } from './styles'

export default function StaySafeWithProtexxaSection() {
  const theme = useTheme()
  const navigate = useNavigate()
  const buttonStyle = {
    textTransform: 'none',
    gap: 20,
    height: 40,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.contrastText,
    maxWidth: 400,
    ':hover': {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.contrastText,
    },
  }

  return (
    <BackgroundBox>
      <Container>
        <Typography textAlign="center" variant="h4" color="primary.contrastText">
          Stay safe with Protexxa
        </Typography>

        <Grid
          container
          mt={2}
          spacing={2}
          display="flex"
          flexDirection="row"
          justifyContent="center"
        >
          <Grid item xs={12} sm={4} display="flex" flexDirection="row" justifyContent="center">
            <Button
              disableElevation
              fullWidth
              sx={buttonStyle}
              type="button"
              disabled
              variant="contained"
              onClick={() => navigate('/signup')}
            >
              For Individuals - Comming soon
            </Button>
          </Grid>
          <Grid item xs={12} sm={4} display="flex" flexDirection="row" justifyContent="center">
            <Button
              disableElevation
              fullWidth
              sx={buttonStyle}
              type="button"
              variant="contained"
              onClick={() => {
                navigate('/contact-us')
              }}
            >
              For Business
            </Button>
          </Grid>
        </Grid>
      </Container>
    </BackgroundBox>
  )
}
