import { useState } from 'react'
import { Auth } from 'aws-amplify'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import invariant from 'tiny-invariant'
import VerificationCodeInput from 'components/VerificationCodeInput'
import globalStore from 'store'
import { toastStyle } from 'util/toast'
import 'react-toastify/dist/ReactToastify.css'

const VerifyEmail = () => {
  const [verificationCode, setVerificationCode] = useState('')
  const navigate = useNavigate()
  const { user } = globalStore()
  invariant(user, 'Expected value to be a user')
  const [isWrongCode, setIsWrongCode] = useState(false)
  const handleCodeResend = () => {
    Auth.verifyCurrentUserAttribute('email')
  }
  const handleCodeChange = code => {
    setIsWrongCode(false)
    setVerificationCode(code)
    if (code.length === 6) {
      Auth.verifyCurrentUserAttributeSubmit('email', code)
        .then(() => {
          navigate(-1)
          toast.success('E-mail address verified', toastStyle)
        })
        .catch(() => {
          setIsWrongCode(true)
        })
    }
  }

  return (
    <>
      <VerificationCodeInput
        onResend={handleCodeResend}
        onChange={handleCodeChange}
        code={verificationCode}
        isWrongCode={isWrongCode}
        codeDestination={user.email}
      />
      <ToastContainer />
    </>
  )
}

export default VerifyEmail
