import { format } from 'date-fns'
import { CardBordered } from 'components/Card'
import Stack from 'components/Stack'
import Typography from 'components/Typography'
import { ReactComponent as ScanIcon } from './icons/ScanIcon.svg'

interface ICompanyScanCard {
  nextScanDate: Date | string
}
function CompanyScanCard({ nextScanDate }: ICompanyScanCard) {
  const dateScan = new Date(nextScanDate)
  return (
    <CardBordered
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'primary.main',
        borderRadius: 1,
      }}
    >
      <Stack justifyContent="center" alignItems="center" textAlign="center">
        <Typography mb={0.5} fontWeight={500} fontSize={20} color="text.white">
          Next scan schedule for:
        </Typography>
        <Typography mb={1.5} variant="body1" color="text.white">
          {nextScanDate ? format(dateScan, 'dd/MM/yyy kk:mm') : '--/--/----'}
        </Typography>
        <ScanIcon fontSize="large" />
      </Stack>
    </CardBordered>
  )
}

export default CompanyScanCard
