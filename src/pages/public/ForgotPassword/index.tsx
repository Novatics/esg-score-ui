import { useState } from 'react'
import VerificationCodeInput from 'components/VerificationCodeInput'
import EmailInput from './components/EmailInput'
import NewPasswordInput from './components/NewPasswordInput'

const ForgotPassword = () => {
  const [verificationCode, setVerificationCode] = useState('')
  const [email, setEmail] = useState('')
  const [forgotPasswordStatus, setForgotPasswordStatus] = useState('userInput')
  const [isWrongCode, setIsWrongCode] = useState(false)

  const handleCodeChange = code => {
    setVerificationCode(code)
    setIsWrongCode(false)
    if (code.length === 6) {
      setForgotPasswordStatus('newPassword')
    }
  }
  const handleCodeResend = async () => {}

  if (forgotPasswordStatus === 'userInput')
    return (
      <EmailInput
        setForgotPasswordStatus={setForgotPasswordStatus}
        setEmail={setEmail}
        email={email}
      />
    )
  if (forgotPasswordStatus === 'codeInput')
    return (
      <VerificationCodeInput
        onResend={handleCodeResend}
        onChange={handleCodeChange}
        code={verificationCode}
        isWrongCode={isWrongCode}
        codeDestination={email}
      />
    )
  if (forgotPasswordStatus === 'newPassword')
    return <NewPasswordInput verificationCode={verificationCode} email={email} />
  return null
}

export default ForgotPassword
