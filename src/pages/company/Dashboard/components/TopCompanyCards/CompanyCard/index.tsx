import Box from 'components/Box'
import { CardBordered } from 'components/Card'
import ScoreValue from 'components/ScoreValue'
import Stack from 'components/Stack'
import Typography from 'components/Typography'

interface ICompanyCardProps {
  title: string
  value: number | string
  description: string
  footerDescription?: string
  totalValue?: number
  sx?: React.CSSProperties
}

function CompanyCard({
  title,
  value,
  description,
  footerDescription,
  sx,
  totalValue,
}: ICompanyCardProps) {
  return (
    <CardBordered sx={sx}>
      <Stack justifyContent="center" alignItems="center">
        <Typography textAlign="center" mb={1} fontWeight="500" fontSize="21px" color="primary.dark">
          {title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ScoreValue sx={{ fontSize: '34px' }}>{value}</ScoreValue>
          {totalValue && (
            <Typography variant="body1" color="text.secondary">
              /{totalValue}
            </Typography>
          )}
        </Box>
        <Typography variant="body1" fontSize="14px" sx={{ textAlign: 'center' }}>
          {description}
        </Typography>
        <Typography variant="body1" fontSize="12px" color="gray.dark" sx={{ textAlign: 'center' }}>
          {footerDescription}
        </Typography>
      </Stack>
    </CardBordered>
  )
}

export default CompanyCard
