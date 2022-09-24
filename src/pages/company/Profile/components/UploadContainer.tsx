import { useState, useRef, useEffect } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { ToastContainer, toast } from 'react-toastify'
import useSWR, { useSWRConfig } from 'swr'
import Box from 'components/Box'
import Button from 'components/Button'
import Stack from 'components/Stack'
import Typography from 'components/Typography'
import Services from 'services'
import { SWR_COMPANY } from 'services/swr.keys'
import { toastStyle } from 'util/toast'

const UploadContainer = () => {
  const MAX_WIDTH = 130
  const inputFile = useRef<HTMLInputElement | null>(null)

  const { mutate } = useSWRConfig()
  const { data } = useSWR(SWR_COMPANY, () => Services.Company.getCompany())
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
              try {
                Services.Company.putCompany({ image: srcEncoded })
                toast.success('Logo uploaded sucessfully', toastStyle)
                setAvatar(srcEncoded)
                mutate(SWR_COMPANY)
              } catch (error) {
                toast.error(error.response.data.message, toastStyle)
              }
            }
          }
        }
      }
    }
  }
  return (
    <Stack display="flex" flexDirection="column" spacing={1}>
      <Typography variant="body1">Your Logo</Typography>
      <Box
        onClick={() => {
          if (inputFile?.current) {
            inputFile.current.click()
          }
        }}
      >
        {avatar ? (
          <>
            <img alt="AvatarImage" src={avatar} />
            <Button>Change</Button>
          </>
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
            <Typography>Upload your logo here</Typography>
          </Box>
        )}
      </Box>

      <Typography variant="caption" fontSize={10}>
        Your image should have a file size of 200kb and a height of 45px{' '}
      </Typography>
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

export default UploadContainer
