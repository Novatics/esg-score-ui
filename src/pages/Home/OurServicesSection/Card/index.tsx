import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Box from 'components/Box'
import Button from 'components/Button'
import Card from 'components/Card'
import CardContent from 'components/CardContent'
import CardMedia from 'components/CardMedia'
import Typography from 'components/Typography'

type TCardProps = {
  title: string
  image: string
  description: string
  buttonText: string
  buttonAction?: (e) => void
  maxWidth?: number
}
export default function Carousel({
  title,
  image,
  description,
  buttonText,
  buttonAction,
  maxWidth = 396,
}: TCardProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        my: 3,
      }}
    >
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          maxWidth,
          height: '185px',
          borderRadius: 1,
          border: '1px solid #f6f6f6',
        }}
      >
        <CardContent sx={{ width: '50%', padding: 0, margin: 0 }}>
          <CardMedia
            sx={{ padding: 0, margin: 0 }}
            component="img"
            width="148"
            height="185"
            image={image}
            alt="Cyber Security Scan"
          />
        </CardContent>

        <CardContent
          sx={{
            width: '70%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Typography mb={0.5} variant="subtitle1" color="primary.dark">
            {title}
          </Typography>
          <Typography variant="caption" color="primary.medium">
            {description}
          </Typography>
          <Button
            sx={{ textTransform: 'none' }}
            type="button"
            size="small"
            variant="text"
            onClick={buttonAction}
          >
            {buttonText}
            <ArrowForwardIcon sx={{ marginLeft: 0.5, width: 16, height: 16 }} />
          </Button>
        </CardContent>
      </Card>
    </Box>
  )
}
