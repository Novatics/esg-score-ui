/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable complexity */
import { useState, useEffect } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { useTheme, useMediaQuery } from '@mui/material'
import OtpInput from 'react-otp-input'
import Box from 'components/Box'
import Typography from 'components/Typography'

interface IVerificationCodeInput {
  onChange: (code: string) => void
  onResend: () => void
  isWrongCode: boolean
  code: string
  codeDestination: string
}

const VerificationCodeInput = ({
  code,
  onChange,
  onResend,
  isWrongCode,
  codeDestination,
}: IVerificationCodeInput) => {
  const theme = useTheme()
  const [timeToResendCode, setTimeToResendCode] = useState(0)
  const [resendCodeEnable, setResendCodeEnable] = useState(false)
  let resendTimerInterval
  const calculateTimeLeft = (timeToResend: number) => {
    const difference = timeToResend - +new Date()
    if (difference >= 0) setTimeToResendCode(Math.round(difference / 1000))
    else {
      setTimeToResendCode(0)
      clearInterval(resendTimerInterval)
      setResendCodeEnable(true)
    }
  }

  const configureResendTimer = (timeToResend: number) => {
    setResendCodeEnable(false)
    setTimeToResendCode(timeToResend)
    const finalTime = +new Date() + timeToResend * 1000
    resendTimerInterval = setInterval(() => {
      calculateTimeLeft(finalTime)
    }, 1000)
  }
  useEffect(() => {
    configureResendTimer(15)
    return () => {
      clearInterval(resendTimerInterval)
    }
  }, [])
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Box sx={{ p: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          backgroundColor: 'neutral.high.pure',
          boxShadow: 5,
          p: 4,
          mt: 17.5,
        }}
      >
        <Typography sx={{ mb: 1.5 }} variant="h4">
          Verification
        </Typography>
        <Typography sx={{ mb: 3 }} color="neutral.low.medium" variant="body1">
          We have sent the OTP code to {codeDestination}
        </Typography>
        <OtpInput
          inputStyle={{
            width: isSmallScreen ? '2rem' : '3rem',
            height: isSmallScreen ? '2rem' : '3rem',
            margin: '0 0.5rem',
            fontSize: isSmallScreen ? '1.5em' : '2em',
            borderRadius: 1,
            border: '1px solid rgba(0,0,0,0.3)',
          }}
          shouldAutoFocus
          isInputNum
          value={code}
          onChange={onChange}
          numInputs={6}
        />
        <Box sx={{ display: 'flex', mt: 3 }}>
          <Typography mr={0.5} variant="body2">
            Didn’t receive the code?
          </Typography>
          <Typography
            sx={{
              cursor: resendCodeEnable ? 'pointer' : 'not-allowed',
            }}
            onClick={() => {
              if (resendCodeEnable) {
                onResend()
                configureResendTimer(25)
              }
            }}
            variant="body2"
            color="primary.main"
          >
            Resend the code{' '}
            {timeToResendCode >= 10 ? `(0:${timeToResendCode})` : `(0:0${timeToResendCode})`}
          </Typography>
        </Box>
        {isWrongCode && (
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
            <CloseRoundedIcon sx={{ color: 'magenta.dark' }} fontSize="medium" />
            <Typography variant="body2" color="magenta.dark">
              Wrong code
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default VerificationCodeInput
