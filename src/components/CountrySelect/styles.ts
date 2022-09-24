/* eslint-disable complexity */
import { PopperUnstyled } from '@mui/base'
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled'
import { selectUnstyledClasses } from '@mui/base/SelectUnstyled'
import { styled } from '@mui/material/styles'

export const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`

export const StyledCodeButton = styled('button')`
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  box-sizing: border-box;
  min-width: ${({ theme }) => theme.spacing(14)};
  background-color: ${({ theme }) => theme.palette.primary.contrastText};
  border: 1px solid #ccc;
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  height: ${({ theme }) => theme.spacing(5)};
  text-align: left;
  padding: ${({ theme }) => theme.spacing(1)};
  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }
  &::after {
    content: '▾';
    float: right;
  }

  & img {
    margin-right: ${({ theme }) => theme.spacing(1)};
  }
`

export const StyledNameButton = styled('button')`
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  box-sizing: border-box;
  width: ${({ theme }) => theme.spacing(24)};
  background-color: ${({ theme }) => theme.palette.primary.contrastText};
  border: 1px solid #ccc;
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  height: ${({ theme }) => theme.spacing(5)};
  text-align: left;
  padding: ${({ theme }) => theme.spacing(1)};
  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }
  &::after {
    content: '▾';
    float: right;
  }

  & img {
    margin-right: ${({ theme }) => theme.spacing(1)};
  }
`

export const StyledListbox = styled('ul')`
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing(0.5)};
  margin: ${({ theme }) => theme.spacing(1)} 0;
  min-width: ${({ theme }) => theme.spacing(40)};
  max-height: ${({ theme }) => theme.spacing(50)};
  background: ${({ theme }) => theme.palette.primary.contrastText};
  border: 1px solid #ccc;
  border-radius: ${({ theme }) => theme.spacing(1)};
  overflow: auto;
  outline: 0px;
`

export const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
    list-style: none;
    padding: ${theme.spacing(1)};
    border-radius: ${theme.spacing(1)};
    cursor: default;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${optionUnstyledClasses.selected} {
      background-color: ${theme.palette.primary.light};
    }
  
    &.${optionUnstyledClasses.highlighted} {
      background-color: ${theme.palette.primary.light};
    }
  
    &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
      background-color: ${theme.palette.primary.light};
    }
  
    &.${optionUnstyledClasses.disabled} {
      color: #ccc
    }
    &:hover:not(.${optionUnstyledClasses.disabled}) {
      background-color: ${theme.palette.primary.light};
    }
    & img {
      margin-right: ${theme.spacing(1)};
    }
    `
)
