import { useState, useEffect, useRef } from 'react'
import { useField } from 'formik'
import Box from 'components/Box'
import Modal from 'components/Modal'
import Typography from 'components/Typography'
import { ReactComponent as BulbSvg } from '../../../Icons/Bulb.svg'
import PhotoButtons from './PhotoButtons'
import { ModalContainer, CameraVideo, Photo, TipsContainer, TipsHeader } from './styles'

type TSelfieModalProps = {
  isSelfieModalOpen: boolean
  formikName: string
  setIsSelfieModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  setAvatar: React.Dispatch<React.SetStateAction<string>>
}

const SelfieModal = ({
  isSelfieModalOpen,
  setIsSelfieModalOpen,
  setAvatar,
  formikName,
}: TSelfieModalProps) => {
  let mediaStream
  const IMG_WIDTH = 900
  const IMG_HEIGHT = 720
  const [isPhotoTaken, setIsPhotoTaken] = useState(false)
  const [, , helpers] = useField(formikName)
  const videoRef = useRef<HTMLVideoElement>(null)
  const photoRef = useRef<HTMLCanvasElement>(null)
  const takePicture = () => {
    const video = videoRef.current
    const photo = photoRef.current

    if (photo) {
      photo.width = IMG_WIDTH
      photo.height = IMG_HEIGHT

      const ctx = photo.getContext('2d')
      if (ctx) {
        ctx.drawImage(video as CanvasImageSource, 0, 0, IMG_WIDTH, IMG_HEIGHT)
      }

      // Transform canvas into blob into a file
      photo.toBlob(blob => {
        if (blob) {
          const file = new File([blob], 'File name', { type: 'image/png' })
          helpers.setValue(file)
        }
      }, 'image/png')
      const base64Canvas = photo.toDataURL('image/png')
      setAvatar(base64Canvas)
    }
  }
  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then(stream => {
        const video = videoRef.current
        mediaStream = stream
        if (video) {
          video.srcObject = stream
          video.play()
        }
      })
  }
  useEffect(() => {
    if (isSelfieModalOpen) {
      getVideo()
    }

    return () => {
      mediaStream?.getTracks().forEach(track => track.stop())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSelfieModalOpen])
  return (
    <Modal
      open={isSelfieModalOpen}
      title="Take a picture"
      onClose={() => {
        setIsSelfieModalOpen(false)
        setIsPhotoTaken(false)
      }}
    >
      <ModalContainer>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'flex-start',
          }}
        >
          <Typography marginBottom={1} variant="h6">
            Take a picture
          </Typography>
        </Box>
        <Photo ref={photoRef} isPhotoTaken={isPhotoTaken} />
        <CameraVideo ref={videoRef} isPhotoTaken={isPhotoTaken} />

        <TipsContainer>
          <TipsHeader sx={{ marginBottom: 1 }}>
            <BulbSvg />
            <Typography variant="body1" sx={{ color: 'primary.main' }}>
              Tips
            </Typography>
          </TipsHeader>
          <Typography sx={{ marginBottom: 1, color: 'primary.main' }} variant="body2">
            Make sure your photo is not blurry
          </Typography>
          <Typography variant="body2" sx={{ color: 'primary.main' }}>
            Take in good lighting and take off your glasses
          </Typography>
        </TipsContainer>

        {isPhotoTaken ? (
          <PhotoButtons
            leftButtonTitle="Retake"
            rightButtonTitle="Confirm"
            leftButtonOnClick={() => {
              setIsPhotoTaken(false)
            }}
            rightButtonOnClick={() => {
              setIsSelfieModalOpen(false)
              setIsPhotoTaken(false)
            }}
          />
        ) : (
          <PhotoButtons
            leftButtonTitle="Cancel"
            rightButtonTitle="Take Photo"
            leftButtonOnClick={() => {
              setAvatar('')
              helpers.setValue('')
              setIsSelfieModalOpen(false)
            }}
            rightButtonOnClick={() => {
              takePicture()
              setIsPhotoTaken(true)
            }}
          />
        )}
      </ModalContainer>
    </Modal>
  )
}

export default SelfieModal
