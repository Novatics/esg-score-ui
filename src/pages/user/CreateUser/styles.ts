import { styled } from '@mui/material/styles'
import { ReactComponent as Logo } from 'assets/images/ProtexxaLogo.svg'
import Button from 'components/Button'

export const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column-reverse;
    overflow: hidden;
  }
  width: 100%;
`

export const StepDescriptionContainer = styled('div')`
  width: ${({ theme }) => theme.spacing(45)};
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: ${({ theme }) => theme.spacing(36)};
    margin-top: ${({ theme }) => theme.spacing(8)};
  }
`

export const StepControllerContainer = styled('div')`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProtexxaLogo = styled(Logo)`
  margin-bottom: ${({ theme }) => theme.spacing(2.5)};
`

export const BackButton = styled(Button)`
  display: flex;
  color: ${({ theme }) => theme.palette.text.primary};
`

export const FowardButton = styled(Button)`
  display: flex;
  color: ${({ theme }) => theme.palette.primary.main};
`
