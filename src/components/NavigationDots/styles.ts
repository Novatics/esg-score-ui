import { styled } from '@mui/material/styles'

type TDotProps = {
  selected: boolean
}

export const DotsContainer = styled('div')`
  display: flex;
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spacing(2)};
  width: ${({ theme }) => theme.spacing(5.5)};
  justify-content: space-around;
`

export const Dot = styled('div')<TDotProps>`
  width: ${({ theme }) => theme.spacing(1)};
  height: ${({ theme }) => theme.spacing(1)};
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.palette.neutral.high.medium};
  background-color: ${({ selected, theme }) => selected && theme.palette.primary.main}};
`
