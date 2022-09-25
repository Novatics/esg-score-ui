import Box from 'components/Box'
import { CardBordered } from 'components/Card'
import Typography from 'components/Typography'

interface IStrengthCardProps {
  title: string
  reasonToBeImportant: string
  description: string
}
const StrengthCard = ({ title, description, reasonToBeImportant }: IStrengthCardProps) => {
  return (
    <CardBordered sx={{ padding: 2 }}>
      <Box display="flex" alignItems="flex-start">
        <Box ml={2}>
          <Typography variant="h6" color="#006BF0">
            {title}
          </Typography>

          <Typography mb={2} fontSize="16px">
            {description}
          </Typography>

          <Typography fontWeight="500">Why is this important?</Typography>
          <Typography>{reasonToBeImportant}</Typography>
        </Box>
      </Box>
    </CardBordered>
  )
}

export default StrengthCard
