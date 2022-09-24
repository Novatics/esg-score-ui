import { styled } from '@mui/material/styles'

export const SizeOption = styled('li')`
  list-style-type: none;
  width: 144px;

  input[type='radio'] {
    opacity: 0;
    position: fixed;
    width: 0;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: ${({ theme }) => theme.spacing(1)};
    margin-right: ${({ theme }) => theme.spacing(1)};

    border: 1px solid ${({ theme }) => theme.palette.primary.light};

    background: ${({ theme }) => theme.palette.primary.light};

    border-radius: ${({ theme }) => theme.spacing(0.5)};
    transition: 0.3s;
    &:hover {
      background-color: ${({ theme }) => theme.palette.primary.light};
    }
  }

  input[type='radio']:checked + label {
    background-color: ${({ theme }) => theme.palette.primary.main};

    span {
      color: ${({ theme }) => theme.palette.primary.light};
    }
  }
`
