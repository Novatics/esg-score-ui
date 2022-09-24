import { useEffect } from 'react'
import Hidden from '@mui/material/Hidden'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Logo } from 'assets/images/ProtexxaLogo.svg'
import Button from 'components/Button'
import { EUserRole } from 'models/user.model'
import globalStore from 'store'
import { StyledBox, ButtonsContainer, StyledContainer } from './styles'

export default function Header() {
  const navigate = useNavigate()
  const { user, getUser } = globalStore()

  useEffect(() => {
    if (!user) {
      getUser()
    }
  }, [getUser, user])

  const ButtonEnter = () => {
    return (
      <ButtonsContainer>
        <Button
          sx={{ textTransform: 'none', marginRight: 1, height: 40 }}
          type="button"
          variant="contained"
          onClick={() => {
            if (user?.role === EUserRole.ADMIN) navigate('/company/dashboard')
            else navigate('/dashboard')
          }}
        >
          Dashboard
        </Button>
      </ButtonsContainer>
    )
  }

  const HeaderButtons = () => {
    return (
      <ButtonsContainer>
        <Button
          sx={{ height: 40, marginRight: 5 }}
          variant="text"
          onClick={() => {
            navigate('/signin')
          }}
        >
          Login
        </Button>
        <Hidden smDown>
          <Button
            sx={{ marginRight: 1, height: 40 }}
            type="button"
            variant="contained"
            onClick={() => {
              navigate('/signup')
            }}
          >
            Create Account
          </Button>
        </Hidden>
      </ButtonsContainer>
    )
  }

  return (
    <StyledBox>
      <StyledContainer>
        <Logo onClick={() => navigate('/')} />
        {user ? <ButtonEnter /> : <HeaderButtons />}
      </StyledContainer>
    </StyledBox>
  )
}
