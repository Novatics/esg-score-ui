import Button from 'components/Button'
import { PhotoButtonsContainer } from './styles'

type TPhotoButton = {
  leftButtonTitle: string
  rightButtonTitle: string
  leftButtonOnClick: () => void
  rightButtonOnClick: () => void
}

const PhotoButtons = ({
  leftButtonTitle,
  rightButtonOnClick,
  rightButtonTitle,
  leftButtonOnClick,
}: TPhotoButton) => {
  return (
    <PhotoButtonsContainer>
      <Button
        type="button"
        sx={{
          marginRight: 1,
        }}
        variant="outlined"
        onClick={leftButtonOnClick}
      >
        {leftButtonTitle}
      </Button>
      <Button variant="contained" type="button" onClick={rightButtonOnClick}>
        {rightButtonTitle}
      </Button>
    </PhotoButtonsContainer>
  )
}

export default PhotoButtons
