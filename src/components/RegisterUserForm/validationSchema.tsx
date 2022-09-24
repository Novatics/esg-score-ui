/* eslint-disable no-useless-escape */
import * as Yup from 'yup'

const RegisterUserSchema = Yup.object().shape({
  fullname: Yup.string().required('Full name is required'),
  email: Yup.string().required('Email is required').email('Email is not valid'),
  phone: Yup.string().required('Phone is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain at least One Uppercase, One Lowercase, One Number and One Special Character'
    ),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .when('password', {
      is: val => !!(val && val.length > 0),
      then: Yup.string().oneOf([Yup.ref('password')], 'Both passwords need to be the same'),
    }),
})

export default RegisterUserSchema
