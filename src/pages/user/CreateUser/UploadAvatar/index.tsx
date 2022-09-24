import { useState, useRef, useEffect } from 'react'
import { useField } from 'formik'
import Avatar from 'components/Avatar'
import { ReactComponent as CameraIcon } from './Icons/Camera.svg'
import { Container, CameraButton, FileInput, AvatarContainer } from './styles'
import UploadModal from './UploadModal'

type TUploadAvatarProps = {
  name: string
}
const UploadAvatar = ({ name }: TUploadAvatarProps) => {
  const MAX_WIDTH = 150
  const [field, , helpers] = useField(name)

  const [avatar, setAvatar] = useState(field.value)
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    if (field.value) {
      const reader = new FileReader()
      reader.readAsDataURL(field.value)
      reader.onload = event => {
        setAvatar(event.target?.result)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const inputFile = useRef<HTMLInputElement | null>(null)

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const file = e.currentTarget.files[0]
      const reader = new FileReader()

      reader.readAsDataURL(file)

      reader.onload = event => {
        const imgElement = document.createElement('img')
        imgElement.src = event.target?.result as string
        imgElement.onload = imageEvent => {
          const canvas = document.createElement('canvas')
          if (imageEvent.target) {
            const imageElement = imageEvent.target as HTMLImageElement
            const scaleSize = MAX_WIDTH / imageElement.width
            canvas.width = MAX_WIDTH
            canvas.height = imageElement.height * scaleSize

            const ctx = canvas.getContext('2d')

            ctx?.drawImage(
              imageEvent.target as CanvasImageSource,
              0,
              0,
              canvas.width,
              canvas.height
            )
            const srcEncoded = ctx?.canvas.toDataURL()
            helpers.setValue(file)
            setAvatar(srcEncoded)
          }
        }
      }
    }
  }
  return (
    <Container>
      <AvatarContainer>
        <Avatar
          data-testid="avatarImage"
          sx={{ bgcolor: '#F4F4F4', height: '195px', width: '195px' }}
          alt="AvatarImage"
          src={avatar}
        />
        <CameraButton type="button" onClick={() => setOpenModal(value => !value)}>
          <CameraIcon />
        </CameraButton>

        <UploadModal
          openModal={openModal}
          formikName={name}
          setAvatar={setAvatar}
          inputFile={inputFile}
          handleCloseModal={handleCloseModal}
        />
      </AvatarContainer>

      <FileInput
        data-testid="fileUpload"
        ref={inputFile}
        accept="image/*"
        name={name}
        type="file"
        onChange={handleFileChange}
      />
    </Container>
  )
}

export default UploadAvatar
