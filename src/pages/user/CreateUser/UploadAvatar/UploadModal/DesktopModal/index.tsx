import { useState } from 'react'
import Divider from 'components/Divider'
import Typography from 'components/Typography'
import SelfieModal from './SelfieModal'
import { PhotoOptionsContainer } from './styles'

type TMobileModalProps = {
  openModal: boolean
  formikName: string
  setAvatar: React.Dispatch<React.SetStateAction<string>>
  handleCloseModal: () => void
  inputFile: React.MutableRefObject<HTMLInputElement | null>
}

export default function DektopModal({
  openModal,
  formikName,
  setAvatar,
  handleCloseModal,
  inputFile,
}: TMobileModalProps) {
  const [isSelfieModalOpen, setIsSelfieModalOpen] = useState(false)

  return (
    <>
      <SelfieModal
        formikName={formikName}
        isSelfieModalOpen={isSelfieModalOpen}
        setAvatar={setAvatar}
        setIsSelfieModalOpen={setIsSelfieModalOpen}
      />

      <PhotoOptionsContainer isOpen={openModal}>
        <Typography
          onClick={() => {
            if (inputFile?.current) {
              inputFile.current.click()
              handleCloseModal()
            }
          }}
          sx={{ color: 'primary.main', padding: 1.5 }}
          variant="button"
        >
          Upload a picture
        </Typography>
        <Divider variant="middle" sx={{ width: '80%' }} />
        <Typography
          onClick={() => {
            setIsSelfieModalOpen(true)
            handleCloseModal()
          }}
          sx={{ color: 'primary.main', padding: 1.5 }}
          variant="button"
        >
          Take a photo
        </Typography>
      </PhotoOptionsContainer>
    </>
  )
}
