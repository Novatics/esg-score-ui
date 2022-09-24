/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from 'react-router-dom'
import Box from 'components/Box'
import Typography from 'components/Typography'

const NotFound = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2} justifyContent="center">
      <Typography color="primary.main" variant="h3">
        Page not found
      </Typography>
    </Box>
  )
}

export default NotFound
