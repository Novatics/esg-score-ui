import { lazy } from 'react'
import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom'

const Home = lazy(() => import('pages/public/Home'))
const LoadingScore = lazy(() => import('pages/public/LoadingScore'))
const UserDashboard = lazy(() => import('pages/public/Dashboard'))
const NotFound = lazy(() => import('pages/common/NotFound'))

const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        {/* // PUBLIC ROUTERS */}
        <Route index element={<Home />} />
        <Route path="loadingscore" element={<LoadingScore />} />
        <Route path="dashboard" element={<UserDashboard />} />
        {/* // NOT FOUND ROUTER */}
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
    </BrowserRouter>
  )
}
export default Routes
