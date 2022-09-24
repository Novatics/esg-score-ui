import { useTheme, useMediaQuery } from '@mui/material'
import DesktopModal from './DesktopModal'
import MobileModal from './MobileModal'

type TMobileModalProps = {
  openModal: boolean
  formikName: string
  setAvatar: React.Dispatch<React.SetStateAction<string>>
  inputFile: React.MutableRefObject<HTMLInputElement | null>
  handleCloseModal: () => void
}

export default function UploadModal({
  openModal,
  handleCloseModal,
  formikName,
  setAvatar,
  inputFile,
}: TMobileModalProps) {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

  return isSmallScreen ? (
    <MobileModal openModal={openModal} handleCloseModal={handleCloseModal} inputFile={inputFile} />
  ) : (
    <DesktopModal
      handleCloseModal={handleCloseModal}
      openModal={openModal}
      formikName={formikName}
      setAvatar={setAvatar}
      inputFile={inputFile}
    />
  )
}
