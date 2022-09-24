import Card from 'components/Card'
import Skeleton from 'components/Skeleton'

const CompanyCardSkeleton = () => {
  return (
    <Card
      sx={{
        height: '100%',
        width: '100%',
        p: 3,
        boxShadow: theme => theme.shadows[5],
      }}
    >
      <Skeleton variant="rectangular" width="100%" height="140px" />
    </Card>
  )
}

export default CompanyCardSkeleton
