import { useNavigate } from 'react-router-dom'
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
const PasswordManagerCard = ({
  title,
  Icon,
  description,
  recommendedAction,
}: IImportantCardProps) => {
  const navigate = useNavigate()
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
              navigate('/referrals')
            }}
            variant="outlined"
          >
            Go to Referrals
          </Button>
        </Box>
      </Box>
    </CardBordered>
  )
}

export default PasswordManagerCard
