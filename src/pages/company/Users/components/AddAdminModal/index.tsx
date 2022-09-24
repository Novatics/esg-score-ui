import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useSWRConfig } from 'swr'
import Box from 'components/Box'
import Button from 'components/Button'
import Modal from 'components/Modal'
import TextField from 'components/TextField'
import Typography from 'components/Typography'
import Services from 'services'
import { SWR_COMPANY_ADMINS } from 'services/swr.keys'
import { toastStyle } from 'util/toast'
import 'react-toastify/dist/ReactToastify.css'

interface IAddAdminModal {
  isModalOpened: boolean
  setIsModalOpened: (boolean) => void
}
const AddAdminModal = ({ isModalOpened, setIsModalOpened }: IAddAdminModal) => {
  const [adminValue, setAdminValue] = useState('')
  const { mutate } = useSWRConfig()

  const handleAddAdmin = async () => {
    try {
      const { email: oldEmails } = await Services.Company.getCompany()
      const newAdminsArray = [...oldEmails, adminValue]
      await Services.Company.putCompany({ email: newAdminsArray })
      mutate(SWR_COMPANY_ADMINS)
      toast.success('Admin added with success', toastStyle)
      setIsModalOpened(false)
      setAdminValue('')
    } catch (error) {
      toast.error(error.message, toastStyle)
    }
  }
  return (
    <>
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
            px: 5,
            py: 4,
            minWidth: 'fit-content',
            borderRadius: 1,
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'primary.contrastText',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography mb={3} variant="h5" color="primary.dark">
            Add Admin
          </Typography>
          <TextField
            value={adminValue}
            sx={{ width: '100%', minWidth: '300px' }}
            onChange={e => {
              setAdminValue(e.target.value)
            }}
          />

          <Button
            sx={{ mt: 3 }}
            variant="contained"
            onClick={() => {
              handleAddAdmin()
            }}
          >
            Add
          </Button>
        </Box>
      </Modal>
      <ToastContainer />
    </>
  )
}

export default AddAdminModal
