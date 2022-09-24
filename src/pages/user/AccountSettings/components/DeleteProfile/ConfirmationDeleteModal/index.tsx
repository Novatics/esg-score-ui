import { Auth } from 'aws-amplify'
import { ToastContainer, toast } from 'react-toastify'
import invariant from 'tiny-invariant'
import Box from 'components/Box'
import Button from 'components/Button'
import Modal from 'components/Modal'
import Typography from 'components/Typography'
import Services from 'services'
import globalStore from 'store'
import { toastStyle } from 'util/toast'
import 'react-toastify/dist/ReactToastify.css'

interface IConfirmationDeleteModal {
  isModalOpened: boolean
  setIsModalOpened: (boolean) => void
}
const ConfirmationDeleteModal = ({ isModalOpened, setIsModalOpened }: IConfirmationDeleteModal) => {
  const { user, logout } = globalStore()
  invariant(user, 'Expected value to be a user')
  const handleDeleteUser = async () => {
    try {
      await Services.Auth.deleteRegister()
      await Auth.deleteUser()
      setIsModalOpened(false)
      logout()
      toast.success('Account deleted', toastStyle)
    } catch (error) {
      toast.error(error, toastStyle)
    }
  }

  return (
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
        <Typography mb={3} variant="h6" color="primary.dark">
          Delete User
        </Typography>
        <Typography>Are you sure do you want to delete your account?</Typography>
        <Box>
          <Button
            sx={{ mt: 3, mr: 2 }}
            color="error"
            variant="contained"
            onClick={handleDeleteUser}
          >
            Delete
          </Button>
          <Button
            sx={{ mt: 3 }}
            variant="outlined"
            onClick={() => {
              setIsModalOpened(false)
            }}
          >
            Cancel
          </Button>
        </Box>
        <ToastContainer />
      </Box>
    </Modal>
  )
}

export default ConfirmationDeleteModal
