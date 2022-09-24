/* eslint-disable complexity */
import { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import AppLoading from 'containers/App/AppLoading'
import AppTheme from 'containers/App/AppTheme'
import { EUserRole } from 'models/user.model'
import globalStore from 'store'

interface IProtectedRoutes {
  allowedRole: EUserRole[]
}
const ProtectedRoutes = ({ allowedRole }: IProtectedRoutes) => {
  const { user, loadingUser, getUser } = globalStore()

  useEffect(() => {
    if (!user) getUser()
  }, [getUser, user])

  if (!user && !loadingUser) return <Navigate to="/" />

  if (!user) {
    return (
      <AppTheme>
        <AppLoading />
      </AppTheme>
    )
  }

  const hasRole = user && allowedRole.some(role => role === user.role)

  return user && hasRole ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoutes
