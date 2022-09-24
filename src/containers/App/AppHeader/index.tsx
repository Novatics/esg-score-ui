/* eslint-disable max-lines */
import { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { useTheme, useMediaQuery } from '@mui/material'
import Collapse from '@mui/material/Collapse'
import { Auth } from 'aws-amplify'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import useSWR from 'swr'
import { ReactComponent as Logo } from 'assets/images/ProtexxaLogo.svg'
import Alert from 'components/Alert'
import Box from 'components/Box'
import Button from 'components/Button'
import IconButton from 'components/IconButton'
import Typography from 'components/Typography'
import { TCognitoUserInfo } from 'models/cognito.model'
import Services from 'services'
import { SWR_USER_REGISTER, SWR_COMPANY } from 'services/swr.keys'
import globalStore from 'store'
import { toastStyle } from 'util/toast'
import { ProfileMenu, ReferralIcon, StyledContainer, StyledBox, StyledAvatar } from './styles'

const AppHeader = () => {
  const navigate = useNavigate()
  const { logout, user } = globalStore()
  const [avatarBase64, setAvatarUrl] = useState('')
  const [showEmailVerifiedAlert, setShowEmailVerifiedAlert] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  const isAdmin = user?.role === 'admin'

  // userData
  const { data: userData } = useSWR(
    !isAdmin ? SWR_USER_REGISTER : null,
    () => user && Services.Auth.getRegister()
  )

  // companyData
  const { data: companyData } = useSWR(
    isAdmin ? SWR_COMPANY : null,
    () => user && Services.Company.getCompany()
  )
  const checkEmailIsVerified = async () => {
    const userInfo = (await Auth.currentUserInfo()) as TCognitoUserInfo
    setShowEmailVerifiedAlert(!userInfo.attributes.email_verified)
  }

  const handleClickOutsideProfileTab = event => {
    if (ref.current && !ref.current.contains(event.target)) setIsProfileMenuOpen(false)
  }

  const sendVerificationCodeEmail = () => {
    try {
      Auth.verifyCurrentUserAttribute('email')
      navigate('/verify-email')
    } catch (error) {
      toast.error(error.message, toastStyle)
    }
  }

  const handleSignOut = useCallback(async () => {
    try {
      logout()
    } catch (error) {
      toast.error(error.message, toastStyle)
    }
  }, [logout])

  const renderProfileMenu = useMemo(() => {
    return (
      <ProfileMenu ref={ref} isopened={isProfileMenuOpen ? 1 : undefined}>
        <Typography
          onClick={() => {
            if (user?.role === 'admin') navigate('settings')
            else {
              navigate('/profile')
            }
          }}
          sx={{ textTransform: 'none', cursor: 'pointer', padding: 1.5 }}
          variant="button"
        >
          My account
        </Typography>
        <Typography
          onClick={handleSignOut}
          sx={{
            textTransform: 'none',
            cursor: 'pointer',
            color: 'magenta.main',
            padding: 1.5,
          }}
          variant="button"
        >
          Leave
        </Typography>
      </ProfileMenu>
    )
  }, [handleSignOut, isProfileMenuOpen, navigate, user?.role])

  const headerOptions = useMemo(
    () => (
      <Box display="flex" justifyContent="flex-end" alignItems="center">
        <ReferralIcon
          onClick={() => {
            navigate('referrals')
          }}
        />
        <Box sx={{ position: 'relative' }}>
          <StyledAvatar
            sx={{ cursor: 'pointer' }}
            src={avatarBase64}
            onClick={() => {
              setIsProfileMenuOpen(value => !value)
            }}
          />
          {renderProfileMenu}
        </Box>
      </Box>
    ),
    [avatarBase64, navigate, renderProfileMenu]
  )

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideProfileTab, true)
    return () => {
      document.removeEventListener('click', handleClickOutsideProfileTab, true)
    }
  })

  useEffect(() => {
    if (isAdmin && companyData) setAvatarUrl(companyData.image)
    if (userData) setAvatarUrl(userData.image)
  }, [companyData, userData, isAdmin])

  useEffect(() => {
    checkEmailIsVerified()
  }, [])

  return (
    <StyledBox>
      <Collapse sx={{ width: '100%' }} in={showEmailVerifiedAlert}>
        <Alert
          variant="filled"
          severity="info"
          sx={{
            width: '100%',
            backgroundColor: 'primary.dark',
            color: 'primary.contrastText',
            borderRadius: 0,
            position: 'relative',
            '.MuiAlert-icon': {
              display: 'none',
            },
            '.MuiAlert-message': {
              display: isSmallScreen ? 'flex' : 'block',
              margin: isSmallScreen ? '' : '0 auto',
            },
            '.MuiAlert-action': {
              marginLeft: 0,
            },
          }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setShowEmailVerifiedAlert(false)
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Please confirm your e-mail address
          <Button
            type="button"
            sx={{
              textTransform: 'none',
              height: 32,
              width: 135,
              borderColor: ' #FFFFFF',
              color: ' #FFFFFF',
              marginLeft: 2,
            }}
            variant="outlined"
            onClick={() => {
              sendVerificationCodeEmail()
            }}
          >
            Send e-mail
          </Button>
        </Alert>
      </Collapse>
      <ToastContainer />
      <StyledContainer maxWidth="lg">
        <Logo
          style={{ cursor: 'pointer' }}
          onClick={() => {
            if (user?.role === 'admin') navigate('/company/dashboard')
            else navigate('/dashboard')
          }}
        />
        {headerOptions}
      </StyledContainer>
    </StyledBox>
  )
}

export default AppHeader
