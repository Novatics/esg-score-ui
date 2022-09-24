import { Outlet, NavLink as NavRouterLink } from 'react-router-dom'
import Button from 'components/Button'
import Stack from 'components/Stack'

const AppLayout = () => {
  return (
    <>
      <Stack flexDirection="row" pb={2} gap={2}>
        <Button size="large" variant="text" component={NavRouterLink} to="account-settings">
          Account Settings
        </Button>

        <Button size="large" component={NavRouterLink} to="profile">
          Profile Information
        </Button>
      </Stack>
      <Outlet />
    </>
  )
}

export default AppLayout
