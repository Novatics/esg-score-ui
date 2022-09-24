import * as Yup from 'yup'

const SignInValidationSchema = Yup.object().shape({
  userEmail: Yup.string().email('Email must be valid').required('Email is required'),
  password: Yup.string().required('Password is required'),
})

export default SignInValidationSchema
