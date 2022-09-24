import { styled } from '@mui/material/styles'

export const AppOption = styled('li')`
  list-style-type: none;

  input[type='checkbox'] {
    opacity: 0;
    position: fixed;
    width: 0;
  }

  input[type='checkbox']:checked + label {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
  width: ${({ theme }) => theme.spacing(18.12)};
`

export const AppLabel = styled('label')`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  max-height: 40px;
  white-space: nowrap;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(2)};
  text-align: center;
  background-color: ${({ theme }) => theme.palette.primary.light};
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  &:hover {
  }
`
