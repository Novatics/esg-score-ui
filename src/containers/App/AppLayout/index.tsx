import { Outlet } from 'react-router-dom'
import AppHeader from 'containers/App/AppHeader'
import { StyledBox, StyledContainer } from './styles'

const AppLayout = () => {
  return (
    <StyledBox>
      <AppHeader />
      <StyledContainer maxWidth="lg">
        <Outlet />
      </StyledContainer>
    </StyledBox>
  )
}

export default AppLayout
