import { lazy } from 'react'
import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom'
import AppCompanySettingsLayout from 'containers/App/AppCompanySettingsLayout'
import AppLandingLayout from 'containers/App/AppLandingLayout'
import AppLayout from 'containers/App/AppLayout'
import AppRegisterLayout from 'containers/App/AppRegisterLayout'
import AppUserSettingsLayout from 'containers/App/AppUserSettingsLayout'
import { EUserRole } from 'models/user.model'
import ProtectedRoutes from './protectedRoutes'

// **** Public ****
const Home = lazy(() => import('pages/public/Home'))
const SignIn = lazy(() => import('pages/public/SignIn'))
const SignUp = lazy(() => import('pages/public/SignUp'))
const ContactUs = lazy(() => import('pages/public/ContactUs'))
const ForgotPassword = lazy(() => import('pages/public/ForgotPassword'))

// **** User ****
const UserWelcome = lazy(() => import('pages/user/Welcome'))
const UserEmailLeaks = lazy(
  () =>
    import('pages/user/Dashboard/components/UserThreatsAreas/Areas/CriticalArea/pages/EmailLeaks')
)
const UserWebDomainsLeaks = lazy(
  () =>
    import(
      'pages/user/Dashboard/components/UserThreatsAreas/Areas/CriticalArea/pages/WebDomainsLeaks'
    )
)
const UserReferrals = lazy(() => import('pages/user/Referrals'))
const UserDashboard = lazy(() => import('pages/user/Dashboard'))
const UserSettings = lazy(() => import('pages/user/Settings'))
const UserAccountSettings = lazy(() => import('pages/user/AccountSettings'))
const UserLoadingScore = lazy(() => import('pages/user/LoadingScore'))
const UserUserForm = lazy(() => import('pages/user/CreateUser'))

// **** Company ****
const CompanyDashboard = lazy(() => import('pages/company/Dashboard'))
const CompanySignUp = lazy(() => import('pages/company/SignUp'))
const CompanyUsers = lazy(() => import('pages/company/Users'))
const CompanySettings = lazy(() => import('pages/company/Settings'))
const CompanyProfile = lazy(() => import('pages/company/Profile'))
const CompanyBilling = lazy(() => import('pages/company/Billing'))

// **** Common ****
const NotFound = lazy(() => import('pages/common/NotFound'))
const VerifyEmail = lazy(() => import('pages/common/VerifyEmail'))

const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        {/* // PUBLIC ROUTERS */}
        <Route index element={<Home />} />
        <Route element={<AppLandingLayout />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
        <Route element={<AppRegisterLayout />}>
          <Route path="signup" element={<SignUp />} />
        </Route>

        {/* // USER ROUTERS */}
        <Route path="/">
          <Route
            element={<ProtectedRoutes allowedRole={[EUserRole.USER_B2C, EUserRole.EMPLOYEE]} />}
          >
            <Route element={<AppLayout />}>
              <Route path="dashboard" element={<UserDashboard />} />
              <Route path="referrals" element={<UserReferrals />} />
              <Route path="email-leaks" element={<UserEmailLeaks />} />
              <Route path="webDomain-leaks" element={<UserWebDomainsLeaks />} />
              <Route element={<AppUserSettingsLayout />}>
                <Route path="account-settings" element={<UserAccountSettings />} />
                <Route path="profile" element={<UserSettings />} />
              </Route>
            </Route>
            <Route path="welcome" element={<UserWelcome />} />
            <Route path="loading-score" element={<UserLoadingScore />} />
            <Route path="userform" element={<UserUserForm />} />
          </Route>
        </Route>

        {/* // COMPANY ROUTERS */}
        <Route path="company">
          <Route element={<AppRegisterLayout />}>
            <Route path=":jwtToken" element={<CompanySignUp />} />
          </Route>
          <Route element={<AppLayout />}>
            <Route element={<ProtectedRoutes allowedRole={[EUserRole.ADMIN]} />}>
              <Route path="dashboard" element={<CompanyDashboard />} />
              <Route path="referrals" element={<UserReferrals />} />
              <Route element={<AppCompanySettingsLayout />}>
                <Route path="settings" element={<CompanySettings />} />
                <Route path="profile" element={<CompanyProfile />} />
                <Route path="billing" element={<CompanyBilling />} />
                <Route path="users" element={<CompanyUsers />} />
              </Route>
            </Route>
          </Route>
        </Route>

        {/* // NOT FOUND ROUTER */}
        <Route path="*" element={<NotFound />} />
        <Route element={<AppLandingLayout />}>
          <Route path="/verify-email" element={<VerifyEmail />} />
        </Route>
      </RouterRoutes>
    </BrowserRouter>
  )
}
export default Routes
