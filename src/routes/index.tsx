import { lazy } from 'react'
import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom'

const Home = lazy(() => import('pages/Home'))
const LoadingScore = lazy(() => import('pages/LoadingScore'))
const Dashboard = lazy(() => import('pages/Dashboard'))
const CreditForm = lazy(() => import('pages/CreditForm'))
const NotFound = lazy(() => import('pages/NotFound'))

const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        {/* // PUBLIC ROUTERS */}
        <Route index element={<Home />} />
        <Route path="loadingscore" element={<LoadingScore />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="creditform" element={<CreditForm />} />
        {/* // NOT FOUND ROUTER */}
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
    </BrowserRouter>
  )
}
export default Routes
