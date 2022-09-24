import Box from 'components/Box'
import Button from 'components/Button'
import Typography from 'components/Typography'

interface IBoxCardCarousel {
  title: string
  description: string
  icon: React.ReactElement
}

const BoxCard = ({ title, description, icon }: IBoxCardCarousel) => {
  return (
    <Box p={0.4}>
      <Box
        padding={3}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        sx={{
          borderRadius: theme => theme.spacing(1),
          boxShadow: theme => theme.shadows[2],
        }}
      >
        {icon}

        <Typography mt={3} variant="h6">
          {title}
        </Typography>

        <Typography mt={1} variant="body1" color="neutral.low.light">
          {description}
        </Typography>

        <Box mt={3} px={4} width="100%">
          <Button fullWidth variant="contained" size="large" sx={{ textTransform: 'none' }}>
            Get it
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default BoxCard
