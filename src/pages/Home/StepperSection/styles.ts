import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector'
import { styled } from '@mui/material/styles'
import StepperMobileBackground from 'assets/images/StepperMobileBackground.png'
import Container from 'components/Container'

type TStyledBackgroundProps = {
  backgroundcolor?: string
}

export const StyledBackground = styled('section')<TStyledBackgroundProps>`
  background-image: url(${StepperMobileBackground});
  background-size: cover;
  background-repeat: no-repeat;
`

export const StyledContainer = styled(Container)`
  width: 100%;
  min-height: 600px;
  padding-top: 130px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${props => props.theme.breakpoints.down('sm')} {
    padding-top: 100px;
  }
`

export const StepperContainer = styled('div')`
  width: 34px;
  .MuiStepConnector-root {
    margin: 0 auto;
  }

  ${props => props.theme.breakpoints.down('md')} {
    display: none;
  }
`

export const StepIcon = styled('div')`
  cursor: pointer;
  margin-left: ${({ theme }) => theme.spacing(1)};
  height: ${({ theme }) => theme.spacing(2.75)};
  padding: ${({ theme }) => theme.spacing(0.625)};
  text-align: center;
`

export const ColorlibConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#E0E0E0',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#E0E0E0',
    },
  },

  [`& .${stepConnectorClasses.line}`]: {
    width: 1,
    border: 0,
    minHeight: 12,
    backgroundColor: '#E0E0E0',
  },
}))

export const StyledImg = styled('img')`
  max-width: 384px;
  max-height: 470px;
  ${props => props.theme.breakpoints.down('md')} {
    max-width: 324px;
    max-height: 399px;
  }
`
