import { useState } from 'react'
import Box from 'components/Box'
import Button from 'components/Button'
import { CardBordered } from 'components/Card'
import Modal from 'components/Modal'
import Typography from 'components/Typography'

interface ICriticalCardProps {
  title: string
  value?: number
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined
    }
  >
  description: string
  reviewComponent?: JSX.Element
}
const CriticalCard = ({ title, Icon, description, value, reviewComponent }: ICriticalCardProps) => {
  const [isModalOpened, setIsModalOpened] = useState(false)
  return (
    <CardBordered sx={{ padding: 2 }}>
      <Box display="flex" alignItems="flex-start">
        <Box>
          <Icon width="25px" height="25px" fill="#F2CCD4" />
        </Box>
        <Box ml={2}>
          <Typography variant="h6" color="#98001F">
            {title}
          </Typography>
          <Box display="flex">
            <Typography mr={0.5} fontSize="14px" fontWeight={500}>
              {value}
            </Typography>
            <Typography mb={2} fontSize="14px">
              {description}
            </Typography>
          </Box>
          <Button
            sx={{ mt: 2 }}
            onClick={() => {
              setIsModalOpened(true)
            }}
            variant="outlined"
          >
            Review
          </Button>
        </Box>
      </Box>

      {reviewComponent && (
        <Modal
          open={isModalOpened}
          onClose={() => {
            setIsModalOpened(false)
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              px: 3,
              py: 4,
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'primary.contrastText',
              borderRadius: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {reviewComponent}
            <Button
              sx={{ textTransform: 'none', mt: 3 }}
              variant="outlined"
              onClick={() => {
                setIsModalOpened(false)
              }}
            >
              Got it
            </Button>
          </Box>
        </Modal>
      )}
    </CardBordered>
  )
}

export default CriticalCard
