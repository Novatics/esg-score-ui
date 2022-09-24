import { styled } from '@mui/material/styles'

export const Container = styled('div')`
  /* min-width: ${({ theme }) => theme.spacing(50)}; */
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: -32px;

  svg {
    transform: rotate(180deg);
    stroke-dashoffset: 403;
  }
  Circle {
    stroke-linecap: round;
    width: 350px;
  }
  .circle_reactGradientProgressPercentageSpan__1HdhL {
    display: none;
  }

  .circle_progressCircleBar__1IKUZ {
    transform: rotate(0deg);
    transition: stroke-dashoffset 2s;
  }

  position: relative;
`

export const Value = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 38%;
`
