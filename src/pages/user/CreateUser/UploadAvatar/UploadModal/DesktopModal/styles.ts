import { styled } from '@mui/material/styles'

type TPhotoOptionsContainer = {
  isOpen: boolean
}

export const PhotoOptionsContainer = styled('div')<TPhotoOptionsContainer>`
  display: flex;
  flex-direction: column;
  position: absolute;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  border: 1px solid #f4f4f4;
  border-radius: 5%;
  justify-content: center;
  align-items: center;
  top: 180px;
  left: 164px;
  width: 171px;
  height: 97px;
  background-color: #ffffff;
  z-index: 10;
  cursor: pointer;
`
