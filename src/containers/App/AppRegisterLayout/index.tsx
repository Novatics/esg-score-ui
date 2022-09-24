import { Outlet } from 'react-router-dom'
import Footer from 'components/Footer'
import Header from 'pages/public/Home/Header'
import { StyledBox } from './styles'

const AppRegisterLayout = () => {
  return (
    <>
      <Header />
      <StyledBox>
        <Outlet />
      </StyledBox>
      <Footer />
    </>
  )
}

export default AppRegisterLayout
