import { useState, useRef, useEffect } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { useField } from 'formik'
import { ToastContainer } from 'react-toastify'
import useSWR from 'swr'
import invariant from 'tiny-invariant'
import Box from 'components/Box'
import Button from 'components/Button'
import Stack from 'components/Stack'
import Typography from 'components/Typography'
import Services from 'services'
import { SWR_USER_REGISTER } from 'services/swr.keys'
import globalStore from 'store'

const UploadPhoto = () => {
  const MAX_WIDTH = 130
  const inputFile = useRef<HTMLInputElement | null>(null)

  const { user } = globalStore()
  invariant(user, 'Expected value to be a user')
  const [, , helpers] = useField('image')
  const { data } = useSWR(SWR_USER_REGISTER, () => Services.Auth.getRegister())
  const [avatar, setAvatar] = useState(data ? data.image : '')

  useEffect(() => {
    if (data) setAvatar(data.image)
  }, [data])
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
            if (srcEncoded) {
              setAvatar(srcEncoded)
              helpers.setValue(file)
            }
          }
        }
      }
    }
  }
  return (
    <Stack maxWidth="150px" display="flex" flexDirection="column" spacing={1}>
      <Typography variant="body1">Profile Photo</Typography>
      <Box
        onClick={() => {
          if (inputFile?.current) {
            inputFile.current.click()
          }
        }}
      >
        {avatar ? (
          <Box display="flex" flexDirection="column">
            <img style={{ borderRadius: '8px' }} alt="AvatarImage" src={avatar} />
            <Button>Change</Button>
          </Box>
        ) : (
          <Box
            sx={{
              border: '1px solid #ccc',
              borderRadius: 0.5,
              background: '#D1D5DB',
              color: '#374151',
              cursor: 'pointer',
              py: 4,
              px: 2,
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <CloudUploadIcon fill="#374151" />
            <Typography>Upload your photo here</Typography>
          </Box>
        )}
      </Box>
      <input
        style={{ display: 'none' }}
        data-testid="fileUpload"
        ref={inputFile}
        accept="image/*"
        type="file"
        onChange={handleFileChange}
      />
      <ToastContainer />
    </Stack>
  )
}

export default UploadPhoto
