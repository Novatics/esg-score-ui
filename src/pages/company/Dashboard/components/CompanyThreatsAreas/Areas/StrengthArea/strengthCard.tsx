import Box from 'components/Box'
import { CardBordered } from 'components/Card'
import Typography from 'components/Typography'

interface IStrengthCardProps {
  title: string
  reasonToBeImportant: string
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined
    }
  >
  description: string
}
const StrengthCard = ({ title, Icon, description, reasonToBeImportant }: IStrengthCardProps) => {
  return (
    <CardBordered sx={{ padding: 2 }}>
      <Box display="flex" alignItems="flex-start">
        <Box>
          <Icon width="25px" height="25px" fill="#CCE1FC" />
        </Box>
        <Box ml={2}>
          <Typography variant="h6" color="#006BF0">
            {title}
          </Typography>

          <Typography mb={2} fontSize="14px">
            {description}
          </Typography>

          <Typography fontSize="14px" fontWeight="500">
            Why is this important?
          </Typography>
          <Typography fontSize="14px">{reasonToBeImportant}</Typography>
        </Box>
      </Box>
    </CardBordered>
  )
}

export default StrengthCard
