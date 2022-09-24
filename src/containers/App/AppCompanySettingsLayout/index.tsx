import { Outlet, NavLink as NavRouterLink } from 'react-router-dom'
import Button from 'components/Button'
import Stack from 'components/Stack'

const AppLayout = () => {
  return (
    <>
      <Stack flexDirection="row" pb={2} gap={2}>
        <Button size="large" variant="text" component={NavRouterLink} to="settings">
          Account Settings
        </Button>

        <Button size="large" component={NavRouterLink} to="profile">
          Company Profile
        </Button>

        <Button size="large" component={NavRouterLink} to="billing">
          Billing
        </Button>

        <Button size="large" component={NavRouterLink} to="users">
          Admin Users
        </Button>
      </Stack>
      <Outlet />
    </>
  )
}

export default AppLayout
