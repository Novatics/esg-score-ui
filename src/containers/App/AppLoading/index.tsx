import Box from 'components/Box'
import Stack from 'components/Stack'
import Typography from 'components/Typography'

const AppLoading = () => {
  return (
    <Stack height="100vh" justifyContent="center" alignItems="center">
      <Box mt={2}>
        <Typography variant="h6" fontWeight="500" color="primary.dark">
          Loading...
        </Typography>
      </Box>
    </Stack>
  )
}

export default AppLoading
