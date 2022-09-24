import { styled } from '@mui/material/styles'
import { ReactComponent as LoaderSvg } from 'assets/images/Loader.svg'
import { ReactComponent as Map } from 'assets/images/Map.svg'

export const Container = styled('div')`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(44.54deg, #0072ff -31.61%, #00f896 132.15%);

  .circle_reactGradientProgressPercentageSpan__1HdhL {
    font-family: 'Geomanist';
    font-weight: 1000;
    background: linear-gradient(270.54deg, #0072ff -31.61%, #00f896 132.15%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }
`

export const BackgroundMap = styled(Map)`
  width: 100vw;
  height: 100vh;
  position: absolute;
`

export const Loader = styled(LoaderSvg)`
  height: 20px;
  width: 20px;
  padding: 0;
`
