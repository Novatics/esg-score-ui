import { useTheme, useMediaQuery } from '@mui/material'
import { ReactComponent as TooltipIcon } from 'assets/Icons/Tooltip.svg'
import Tooltip from 'components/Tooltip'

type TCustomToolTip = {
  title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal
}
export const CustomTooltip = ({ title }: TCustomToolTip) => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Tooltip
      arrow
      enterTouchDelay={50}
      leaveTouchDelay={2500}
      placement={isSmallScreen ? 'top' : 'right'}
      title={title}
      componentsProps={{
        tooltip: {
          sx: {
            p: 1.5,
            backgroundColor: 'background.lightBlue',
          },
        },
      }}
    >
      <TooltipIcon width="20px" />
    </Tooltip>
  )
}

export default CustomTooltip
