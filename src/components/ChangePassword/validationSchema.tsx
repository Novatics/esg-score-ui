/* eslint-disable no-useless-escape */
import * as Yup from 'yup'

const ChangePasswordSchema = Yup.object().shape({
  currentPassword: Yup.string().required('Current password is required'),
  newPassword: Yup.string()
    .required('New password is required')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain at least One Uppercase, One Lowercase, One Number and One Special Character'
    ),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .when('newPassword', {
      is: val => !!(val && val.length > 0),
      then: Yup.string().oneOf([Yup.ref('newPassword')], 'Both passwords need to be the same'),
    }),
})

export default ChangePasswordSchema
