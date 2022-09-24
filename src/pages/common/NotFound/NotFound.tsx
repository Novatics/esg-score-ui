/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from 'react-router-dom'
import Box from 'components/Box'
import Button from 'components/Button'
import Typography from 'components/Typography'

const NotFound = () => {
  const navigate = useNavigate()

  const handleGoHome = (): void => navigate('/')

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2} justifyContent="center">
      <Typography color="primary.main" variant="h3">
        Page not found
      </Typography>
      <Typography color="primary.dark" variant="h5">
        We couldn't find a route to this page
      </Typography>
      <Button variant="outlined" type="button" onClick={handleGoHome}>
        Go to Home Page
      </Button>
    </Box>
  )
}

export default NotFound
