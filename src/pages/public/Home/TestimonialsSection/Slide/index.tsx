import { useTheme, useMediaQuery } from '@mui/material'
import Avatar from 'components/Avatar'
import Box from 'components/Box'
import Typography from 'components/Typography'
import { TextContainer } from './styles'

interface ISlideProps {
  name: string
  avatar: string
  description: string
  subtitle?: string
}
export default function Slide({ name, avatar, description, subtitle }: ISlideProps) {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row',
        width: '100%',
        maxWidth: 792,
        margin: '0 auto',
        padding: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Avatar alt={name} src={avatar} sx={{ height: 138, width: 138 }} />
      </Box>

      <TextContainer>
        <Typography textAlign={isSmallScreen ? 'center' : 'left'} variant="h5" color="#322F2F">
          {name}
        </Typography>
        <Typography
          textAlign={isSmallScreen ? 'center' : 'left'}
          variant="body1"
          color="neutral.low.light"
        >
          {subtitle}
        </Typography>
        <Typography
          mt={2}
          sx={{ maxWidth: 600 }}
          textAlign={isSmallScreen ? 'center' : 'left'}
          variant="body1"
          color="#322F2F"
        >
          {description}
        </Typography>
      </TextContainer>
    </Box>
  )
}
