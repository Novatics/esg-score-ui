import { useState } from 'react'
import Button from 'components/Button'
import { CardBordered } from 'components/Card'
import Stack from 'components/Stack'
import Typography from 'components/Typography'
import AddAdminModal from './components/AddAdminModal'
import AdminTable from './components/AdminTable'
// import ButtonRemove from './components/ButtonRemove'
// import SearchInput from './components/SearchInput'
// import SortSelect from './components/SortSelect'

const Users = () => {
  const [isAdminModalOpened, setIsAdminModalOpened] = useState(false)

  const TitleHeader = () => {
    return (
      <Stack mb={3} flexDirection="row" justifyContent="space-between">
        <Stack>
          <Typography variant="h5" color="primary.dark">
            Admins
          </Typography>
        </Stack>
        <Stack flexDirection="row" alignItems="center" gap={2}>
          <Button
            onClick={() => {
              setIsAdminModalOpened(true)
            }}
            variant="text"
          >
            Add admin
          </Button>
        </Stack>
      </Stack>
    )
  }

  const FilterTable = () => {
    return (
      <>
        <Stack flexDirection="row" justifyContent="space-between" />
        <AdminTable />
        <AddAdminModal
          setIsModalOpened={setIsAdminModalOpened}
          isModalOpened={isAdminModalOpened}
        />
      </>
    )
  }

  return (
    <CardBordered elevation={2}>
      <Stack spacing={2}>
        <TitleHeader />
        <FilterTable />
      </Stack>
    </CardBordered>
  )
}

export default Users
