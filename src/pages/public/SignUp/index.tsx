import { useState } from 'react'
import { Auth } from 'aws-amplify'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import Box from 'components/Box'
import ContentBox from 'components/ContentBox'
import RegisterUserForm, { IRegisterForm } from 'components/RegisterUserForm'
import VerificationCodeInput from 'components/VerificationCodeInput'
import 'react-toastify/dist/ReactToastify.css'
import services from 'services'
import { toastStyle } from 'util/toast'

const SingUp = () => {
  const navigate = useNavigate()
  const [showVerificationCodeInput, setShowVerificationCodeInput] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isWrongCode, setIsWrongCode] = useState(false)
  const [verificationCode, setVerificationCode] = useState('')
  const resendVerificationCode = async () => {
    try {
      await Auth.resendSignUp(userEmail)
    } catch (error) {
      toast.warn(error.message, toastStyle)
    }
  }
  const handleConfirmSignUp = async (code: string) => {
    try {
      const result = await Auth.confirmSignUp(userEmail, code)
      if (result === 'SUCCESS') {
        navigate('/signin')
      }
    } catch (error) {
      toast.warn(error.message, toastStyle)
    }
  }

  const handleCodeChange = code => {
    setIsWrongCode(false)
    setVerificationCode(code)
    if (code.length === 6) {
      handleConfirmSignUp(code)
    }
  }
  const handleRegister = async ({ fullname, email, phone, password }: IRegisterForm) => {
    const domain = email.split('@').pop() || ''
    // Check if the user has a b2b domain
    const { domainExists: domainExistsInACompany } = await services.Auth.isDomainBeenUsed(domain)
    if (domainExistsInACompany) {
      toast.warn(
        `The ${domain} domain is been used by a company, please sign up by the invite link`,
        toastStyle
      )
      return
    }

    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          name: fullname,
          'custom:company': 'individualPlan',
          phone_number: phone,
        },
      })
      setUserEmail(email)
      setPhoneNumber(phone)
      setShowVerificationCodeInput(true)
    } catch (error) {
      toast.warn(error.message, toastStyle)
    }
  }
  return (
    <Box>
      {showVerificationCodeInput ? (
        <ContentBox showVerificationCodeInput={showVerificationCodeInput}>
          <VerificationCodeInput
            codeDestination={phoneNumber || '***** ******'}
            code={verificationCode}
            isWrongCode={isWrongCode}
            onChange={handleCodeChange}
            onResend={() => {
              resendVerificationCode()
            }}
          />
          <ToastContainer />
        </ContentBox>
      ) : (
        <ContentBox showVerificationCodeInput={showVerificationCodeInput}>
          <RegisterUserForm onSubmit={handleRegister} />
          <ToastContainer />
        </ContentBox>
      )}
    </Box>
  )
}

export default SingUp
