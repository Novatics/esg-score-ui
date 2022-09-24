import { useState } from 'react'
import { Auth } from 'aws-amplify'
import jwt from 'jwt-decode'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import Box from 'components/Box'
import ContentBox from 'components/ContentBox'
import RegisterUserForm, { IRegisterForm } from 'components/RegisterUserForm'
import VerificationCodeInput from 'components/VerificationCodeInput'
import Services from 'services'
import { toastStyle } from 'util/toast'
import 'react-toastify/dist/ReactToastify.css'

interface ICompanyToken {
  company: string
  iat: number
}
const CompanySignUp = () => {
  const navigate = useNavigate()
  const { jwtToken } = useParams()
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
    try {
      if (jwtToken) {
        const { company } = jwt<ICompanyToken>(jwtToken)
        await Services.Company.verifyUserCompanySignUp(email, company)
        await Auth.signUp({
          username: email,
          password,
          attributes: {
            email,
            name: fullname,
            'custom:company': company,
            phone_number: phone,
          },
        })
        setUserEmail(email)
        setPhoneNumber(phone)
        setShowVerificationCodeInput(true)
      }
    } catch (error) {
      toast.warn('Check the invite link with Protexxa team', toastStyle)
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

export default CompanySignUp
