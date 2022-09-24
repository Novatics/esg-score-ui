import { Card, CardProps, SxProps } from '@mui/material'

interface ICardBorderedProps extends CardProps {
  children: React.ReactNode
  sx?: SxProps
  elevation?: 0 | 1 | 2 | 3 | 4 | 5
}

const CardBordered = ({ children, sx, elevation = 2, ...props }: ICardBorderedProps) => {
  return (
    <Card
      sx={{
        height: '100%',
        padding: theme => theme.spacing(3),
        border: '1px solid #E0E0E0',
        boxShadow: theme => theme.shadows[elevation],
        ...sx,
      }}
      {...props}
    >
      {children}
    </Card>
  )
}

export { CardBordered }
export default Card
