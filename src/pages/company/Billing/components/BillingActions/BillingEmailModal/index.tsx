import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useSWRConfig } from 'swr'
import Box from 'components/Box'
import Button from 'components/Button'
import Modal from 'components/Modal'
import TextField from 'components/TextField'
import Typography from 'components/Typography'
import Services from 'services'
import { SWR_COMPANY } from 'services/swr.keys'
import { toastStyle } from 'util/toast'
import 'react-toastify/dist/ReactToastify.css'

interface IAddAdminModal {
  isModalOpened: boolean
  setIsModalOpened: (boolean) => void
}
const BillingEmailModal = ({ isModalOpened, setIsModalOpened }: IAddAdminModal) => {
  const [textValue, setTextValue] = useState('')
  const { mutate } = useSWRConfig()
  const handleChangeBillingAddress = async () => {
    try {
      await Services.Company.putCompany({ billingEmail: textValue })
      toast.success('Billing address changed', toastStyle)
      setIsModalOpened(false)
      setTextValue('')
      mutate(SWR_COMPANY)
    } catch (error) {
      toast.error(error.response.data.message, toastStyle)
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
            Change Billing Email
          </Typography>
          <TextField
            value={textValue}
            sx={{ width: '100%', minWidth: '300px' }}
            onChange={e => {
              setTextValue(e.target.value)
            }}
          />

          <Button
            sx={{ mt: 3 }}
            variant="contained"
            onClick={() => {
              handleChangeBillingAddress()
            }}
          >
            Change
          </Button>
        </Box>
      </Modal>
      <ToastContainer />
    </>
  )
}

export default BillingEmailModal
