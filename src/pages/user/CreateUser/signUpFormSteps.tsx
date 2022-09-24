/* eslint-disable max-lines */
import * as Yup from 'yup'
import Typography from 'components/Typography'
import AddressForm from './AddressForm'
import AnimatedContainer from './AnimatedContainer'
import BooleanForm from './BooleanForm'
import DateOfBirthForm from './DateOfBirthForm'
import EmailsForm from './EmailsForm'
import GenderForm from './GenderForm'
import TopAppsForm from './TopAppsForm'
import UploadAvatar from './UploadAvatar'
import WebDomainsForm from './WebDomainsForm'

const steps = [
  {
    Title: ({ fadeOut, setFadeOut }) => (
      <AnimatedContainer delay={0} fadeOut={fadeOut} setFadeOut={setFadeOut}>
        <Typography marginBottom={4} variant="h4">
          What&apos;s your date of birth?
        </Typography>
      </AnimatedContainer>
    ),
    Component: ({ fadeOut, setFadeOut }) => (
      <AnimatedContainer delay={250} fadeOut={fadeOut} setFadeOut={setFadeOut}>
        <DateOfBirthForm name="birthDate" />
      </AnimatedContainer>
    ),
    validation: Yup.object().shape({
      birthDate: Yup.date().required('Valid Date Of Birth is required'),
    }),
    description:
      'This helps identify you with greater precision and understand how demographics play a role in cyber crimes.',
  },
  {
    Title: ({ fadeOut, setFadeOut }) => (
      <AnimatedContainer delay={0} fadeOut={fadeOut} setFadeOut={setFadeOut}>
        <Typography marginBottom={4} variant="h4">
          What&apos;s your address?
        </Typography>
      </AnimatedContainer>
    ),
    Component: ({ fadeOut, setFadeOut }) => (
      <AddressForm fadeOut={fadeOut} setFadeOut={setFadeOut} />
    ),
    validation: Yup.object().shape({
      address: Yup.object().shape({
        street: Yup.string().required('Street is required'),
        number: Yup.string().required('Number is required'),
        postalCode: Yup.string().required('Zip code is required'),
        city: Yup.string().required('City is required'),
        country: Yup.string().required('Country is required'),
      }),
    }),
    description:
      'This helps identify you with greater precision and understand how demographics play a role in cyber crimes.',
  },
  {
    Title: ({ fadeOut, setFadeOut }) => (
      <AnimatedContainer delay={0} fadeOut={fadeOut} setFadeOut={setFadeOut}>
        <Typography marginBottom={4} variant="h4">
          What&apos;s your gender?
        </Typography>
      </AnimatedContainer>
    ),
    Component: ({ fadeOut, setFadeOut }) => (
      <AnimatedContainer delay={250} fadeOut={fadeOut} setFadeOut={setFadeOut}>
        <GenderForm />
      </AnimatedContainer>
    ),
    validation: Yup.object().shape({
      gender: Yup.string().required('Gender is required'),
    }),
    description: 'This helps determine the role of gender in cyber crimes.',
  },
  {
    Title: ({ fadeOut, setFadeOut, sx }) => (
      <AnimatedContainer delay={0} fadeOut={fadeOut} setFadeOut={setFadeOut}>
        <Typography {...sx} marginBottom={4} variant="h4">
          If you have more than one email, what are those?
        </Typography>
      </AnimatedContainer>
    ),
    Component: ({ fadeOut, setFadeOut }) => (
      <AnimatedContainer delay={250} fadeOut={fadeOut} setFadeOut={setFadeOut}>
        <EmailsForm name="secondaryEmails" />
      </AnimatedContainer>
    ),
    validation: Yup.object().shape({
      secondaryEmails: Yup.array().required('email is required'),
    }),
    description:
      'The more emails you verify, the more information you’ll have about your safety online.',
  },

  {
    Title: ({ fadeOut, setFadeOut, sx }) => (
      <AnimatedContainer delay={0} fadeOut={fadeOut} setFadeOut={setFadeOut}>
        <Typography {...sx} marginBottom={4} variant="h4">
          If you own a web domain, what are those?
        </Typography>
      </AnimatedContainer>
    ),
    Component: ({ fadeOut, setFadeOut }) => (
      <AnimatedContainer delay={250} fadeOut={fadeOut} setFadeOut={setFadeOut}>
        <WebDomainsForm name="webDomains" />
      </AnimatedContainer>
    ),
    validation: Yup.object().shape({
      webDomains: Yup.array().required('web domains is required'),
    }),
    description:
      'This helps determine if your websites are compromised or being exploited by cyber criminals.',
  },
  {
    Title: ({ fadeOut, setFadeOut }) => (
      <AnimatedContainer delay={0} fadeOut={fadeOut} setFadeOut={setFadeOut}>
        <Typography marginBottom={4} variant="h4">
          Take a selfie or upload a picture
        </Typography>
      </AnimatedContainer>
    ),
    Component: ({ fadeOut, setFadeOut }) => (
      <AnimatedContainer delay={250} fadeOut={fadeOut} setFadeOut={setFadeOut}>
        <UploadAvatar name="image" />
      </AnimatedContainer>
    ),
    validation: Yup.object().shape({
      image: Yup.mixed().required(),
    }),
    description:
      'This helps determine if you are being impersonated or if your image is being used without your permission.',
  },
  {
    Title: ({ fadeOut, setFadeOut, sx }) => (
      <AnimatedContainer delay={0} fadeOut={fadeOut} setFadeOut={setFadeOut}>
        <Typography {...sx} marginBottom={4} variant="h4">
          Do you use 2 factor authentication on all your accounts?
        </Typography>
      </AnimatedContainer>
    ),
    Component: ({ fadeOut, setFadeOut }) => (
      <AnimatedContainer delay={250} fadeOut={fadeOut} setFadeOut={setFadeOut}>
        <BooleanForm name="useMFA" />
      </AnimatedContainer>
    ),
    validation: Yup.object().shape({
      useMFA: Yup.boolean().required('Answer is required'),
    }),
    description: 'This helps determine if you are elevating your online protection and security.',
  },
  {
    Title: ({ fadeOut, setFadeOut, sx }) => (
      <AnimatedContainer delay={0} fadeOut={fadeOut} setFadeOut={setFadeOut}>
        <Typography {...sx} marginBottom={4} variant="h3">
          Do you have a Personal Cyber Incident Response Plan?
        </Typography>
      </AnimatedContainer>
    ),
    Component: ({ fadeOut, setFadeOut }) => (
      <AnimatedContainer delay={250} fadeOut={fadeOut} setFadeOut={setFadeOut}>
        <BooleanForm name="haveResponsePlan" />
      </AnimatedContainer>
    ),
    validation: Yup.object().shape({
      haveResponsePlan: Yup.boolean().required('Answer is required'),
    }),
    description:
      'This helps determine if you can quickly and effectively respond to a cyber hack or breach.',
  },
  {
    Title: ({ fadeOut, setFadeOut, sx }) => (
      <AnimatedContainer delay={0} fadeOut={fadeOut} setFadeOut={setFadeOut}>
        <Typography sx={{ ...sx, width: 'auto', padding: '0 20px' }} marginBottom={4} variant="h4">
          Are you using any of the top 10 that collect the most data?
        </Typography>
      </AnimatedContainer>
    ),
    Component: ({ fadeOut, setFadeOut }) => (
      <AnimatedContainer delay={250} fadeOut={fadeOut} setFadeOut={setFadeOut}>
        <TopAppsForm name="top10Apps" />
      </AnimatedContainer>
    ),
    validation: null,
    description:
      'This helps determine the likelihood and degree of risk for compromise based on the number and type of accounts you are using.',
  },
  {
    Title: ({ fadeOut, setFadeOut, sx }) => (
      <AnimatedContainer delay={0} fadeOut={fadeOut} setFadeOut={setFadeOut}>
        <Typography {...sx} marginBottom={4} variant="h4">
          Are all your social media accounts set on private?
        </Typography>
      </AnimatedContainer>
    ),
    Component: ({ fadeOut, setFadeOut }) => (
      <AnimatedContainer delay={250} fadeOut={fadeOut} setFadeOut={setFadeOut}>
        <BooleanForm name="allSocialMediasInPrivate" />
      </AnimatedContainer>
    ),
    validation: Yup.object().shape({
      allSocialMediasInPrivate: Yup.boolean().required('Answer is required'),
    }),
    description:
      'This helps us determine the degree of risk with account type and privacy configurations.',
  },
  {
    Title: ({ fadeOut, setFadeOut, sx }) => (
      <AnimatedContainer delay={0} fadeOut={fadeOut} setFadeOut={setFadeOut}>
        <Typography {...sx} marginBottom={4} variant="h4">
          Do you use any password manager?
        </Typography>
      </AnimatedContainer>
    ),
    Component: ({ fadeOut, setFadeOut }) => (
      <AnimatedContainer delay={250} fadeOut={fadeOut} setFadeOut={setFadeOut}>
        <BooleanForm name="havePasswordManager" />
      </AnimatedContainer>
    ),
    validation: Yup.object().shape({
      havePasswordManager: Yup.boolean().required('Answer is required'),
    }),
    description:
      'This helps to determine if you are using best practices in storing your passwords in a digital vault that provides strong encryption protection from cyber criminals.',
  },
]
export default steps
