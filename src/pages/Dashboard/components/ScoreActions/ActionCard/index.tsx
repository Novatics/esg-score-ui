import { useState } from 'react'
import Box from 'components/Box'
import Button from 'components/Button'
import { CardBordered } from 'components/Card'
import Modal from 'components/Modal'
import Typography from 'components/Typography'

interface ICriticalCardProps {
  title: string
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined
    }
  >
  recommendedAction: string
  iconColor: string
}
const ActionItem = ({
  title,
  Icon,
  recommendedAction,
  iconColor,
}: ICriticalCardProps) => {
  return (
    <CardBordered sx={{ padding: 2, maxWidth: '500px', mb: 4 }}>
      <Box display="flex" alignItems="flex-start">
        <Box>
          <Icon width="25px" height="25px" fill={iconColor} />
        </Box>
        <Box ml={2}>
          <Typography variant="h6" color="#98001F">
            Energia
          </Typography>
          <Typography mb={2} fontSize="14px">
            {title}
          </Typography>
          <Typography variant="body1" fontWeight="500">
            Ações recomendadas
          </Typography>
          <Typography variant="body1">{recommendedAction}</Typography>
        </Box>
      </Box>
    </CardBordered>
  )
}

export default ActionItem
