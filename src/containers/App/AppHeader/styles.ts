import { styled } from '@mui/material/styles'
import Avatar from 'components/Avatar'
import Box from 'components/Box'
import Container from 'components/Container'
import { ReactComponent as BellFilledSvg } from './Icons/bell-filled.svg'
import { ReactComponent as BellSvg } from './Icons/bell.svg'
import { ReactComponent as MessageFilledSvg } from './Icons/message-filled.svg'
import { ReactComponent as MessageSvg } from './Icons/message.svg'
import { ReactComponent as ReferralsSvg } from './Icons/referrals.svg'

type TProfileMenu = {
  isopened: number | undefined
}

export const BellIcon = styled(BellSvg)`
  cursor: pointer;
  fill: ${({ theme }) => theme.palette.primary.main};
  ${props => props.theme.breakpoints.down('sm')} {
    margin-right: ${({ theme }) => theme.spacing(2)};
  }
  margin-right: ${({ theme }) => theme.spacing(5)};
`
export const BellIconFilled = styled(BellFilledSvg)`
  cursor: pointer;
  fill: ${({ theme }) => theme.palette.primary.main};
  ${props => props.theme.breakpoints.down('sm')} {
    margin-right: ${({ theme }) => theme.spacing(2)};
  }
  margin-right: ${({ theme }) => theme.spacing(5)};
`

export const MessageIcon = styled(MessageSvg)`
  cursor: pointer;
  color: ${({ theme }) => theme.palette.primary.main};
  fill: ${({ theme }) => theme.palette.primary.main};
  ${props => props.theme.breakpoints.down('sm')} {
    margin-right: ${({ theme }) => theme.spacing(2)};
  }
  margin-right: ${({ theme }) => theme.spacing(5)};
`

export const MessageIconFilled = styled(MessageFilledSvg)`
  cursor: pointer;
  fill: ${({ theme }) => theme.palette.primary.main};
  ${props => props.theme.breakpoints.down('sm')} {
    margin-right: ${({ theme }) => theme.spacing(2)};
  }
  margin-right: ${({ theme }) => theme.spacing(5)};
`

export const ReferralIcon = styled(ReferralsSvg)`
  cursor: pointer;
  fill: ${({ theme }) => theme.palette.primary.main};
  ${props => props.theme.breakpoints.down('sm')} {
    margin-right: ${({ theme }) => theme.spacing(2)};
  }
  margin-right: ${({ theme }) => theme.spacing(5)};
`

export const StyledAvatar = styled(Avatar)`
  width: 32px;
  height: 32px;
`

export const ProfileMenu = styled('div')<TProfileMenu>`
  display: flex;
  flex-direction: column;
  position: absolute;
  visibility: ${({ isopened }) => (isopened ? 'visible' : 'hidden')};
  border: 1px solid #f4f4f4;
  border-radius: 5%;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows[2]};
  align-items: flex-start;
  right: 0;
  top: 50px;
  width: 171px;
  height: 97px;
  background-color: #ffffff;
`

export const StyledBox = styled(Box)`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.appBar};
  background-color: #ffffff;
  box-shadow: ${({ theme }) => theme.shadows[1]};
`

export const StyledContainer = styled(Container)`
  height: 92px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`
