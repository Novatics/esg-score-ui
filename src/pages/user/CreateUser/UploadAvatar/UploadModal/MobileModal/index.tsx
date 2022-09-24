import CameraAltIcon from '@mui/icons-material/CameraAlt'
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { Container, Button } from './styles'

type TMobileModalProps = {
  openModal: boolean
  handleCloseModal: () => void
  inputFile: React.MutableRefObject<HTMLInputElement | null>
}

export default function MobileModal({
  openModal,
  handleCloseModal,

  inputFile,
}: TMobileModalProps) {
  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container>
        <Typography variant="subtitle2">Profile picture</Typography>
        <Box sx={{ marginTop: 3 }}>
          <Button
            onClick={() => {
              if (inputFile?.current) {
                // eslint-disable-next-line no-param-reassign
                inputFile.current.capture = 'environment'
                inputFile.current.click()
                handleCloseModal()
              }
            }}
          >
            <CameraAltIcon />
          </Button>
          <Button
            onClick={() => {
              if (inputFile?.current) {
                inputFile.current.removeAttribute('capture')
                inputFile.current.click()
                handleCloseModal()
              }
            }}
            sx={{ marginLeft: 3 }}
          >
            <InsertPhotoOutlinedIcon />
          </Button>
        </Box>
      </Container>
    </Modal>
  )
}
