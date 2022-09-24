/* eslint-disable no-useless-escape */
import * as Yup from 'yup'

const SettingsUserValidationSchema = Yup.object().shape({
  fullname: Yup.string().required('Full name is required'),
  address: Yup.object().shape({
    street: Yup.string().required('Street is required'),
    number: Yup.string().required('Number is required'),
    postalCode: Yup.string().required('Zip code is required'),
    city: Yup.string().required('City is required'),
    country: Yup.string().required('Country is required'),
  }),
  gender: Yup.string().required('Gender is required'),
  image: Yup.mixed().required(),
  useMFA: Yup.boolean().required('Answer is required'),
  haveResponsePlan: Yup.boolean().required('Answer is required'),
  allSocialMediasInPrivate: Yup.boolean().required('Answer is required'),
})

export default SettingsUserValidationSchema
