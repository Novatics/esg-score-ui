import { styled } from '@mui/material/styles'

type TPhoto = {
  isPhotoTaken: boolean
}
export const ModalContainer = styled('div')`
  display: flex;
  padding: ${({ theme }) => theme.spacing(2)};
  text-align: start;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 700px;
  background-color: #ffffff;
`

export const CameraVideo = styled('video')<TPhoto>`
  display: ${({ isPhotoTaken }) => (isPhotoTaken ? 'none' : 'flex')};
  max-height: 395px;
  margin-top: ${({ theme }) => theme.spacing(3)};
  max-width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.spacing(1.5)};
`
export const Photo = styled('canvas')<TPhoto>`
  max-height: 395px;
  max-width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(3)};
  display: ${({ isPhotoTaken }) => (isPhotoTaken ? 'flex' : 'none')};
`

export const TipsContainer = styled('div')`
  background-color: ${({ theme }) => theme.palette.primary.light};
  border-radius: 4px;
  min-height: 114px;
  width: 90%;
  padding: 10px 24px 12px 24px;
`
export const TipsHeader = styled('div')`
  display: flex;
  align-items: center;
`
