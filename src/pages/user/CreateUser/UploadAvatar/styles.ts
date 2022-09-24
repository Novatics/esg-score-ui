import { styled } from '@mui/material/styles'

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CameraButton = styled('button')`
  border: none;
  position: absolute;
  background: none;
  cursor: pointer;
  right: 0;
  bottom: 0;
  button {
    border: none;
  }
`

export const FileInput = styled('input')`
  display: none;
`

export const AvatarContainer = styled('div')`
  position: relative;
  height: ${({ theme }) => theme.spacing(25)};
  max-width: ${({ theme }) => theme.spacing(25)};
`
