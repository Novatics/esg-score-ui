import { styled } from '@mui/material/styles'

export const CarouselContainer = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(4)};
  .react-swipeable-view-container {
    height: ${({ theme }) => theme.spacing(20.62)};
  }
`
