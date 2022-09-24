import Box from 'components/Box'
import Button from 'components/Button'
import { CardBordered } from 'components/Card'
import Typography from 'components/Typography'

interface IImportantCardProps {
  title: string
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined
    }
  >
  description: string
  recommendedAction: string
}
const ResponsePlanCard = ({ title, Icon, description, recommendedAction }: IImportantCardProps) => {
  return (
    <CardBordered sx={{ padding: 2 }}>
      <Box display="flex" alignItems="flex-start">
        <Icon width="30px" height="30px" fill="rgba(204, 171, 0, 0.3)" />
        <Box ml={2}>
          <Typography variant="h6" color="#665600">
            {title}
          </Typography>
          <Box display="flex">
            <Typography mb={2} fontSize="14px">
              {description}
            </Typography>
          </Box>
          <Typography fontWeight="500">Recommended action</Typography>
          <Typography variant="body1">{recommendedAction}</Typography>
          <Button
            sx={{ mt: 3 }}
            onClick={() => {
              // TO-DO Implement template download
            }}
            variant="outlined"
          >
            Download Template
          </Button>
        </Box>
      </Box>
    </CardBordered>
  )
}

export default ResponsePlanCard
