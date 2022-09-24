import { Form, Formik } from 'formik'
import { toast } from 'react-toastify'
import useSWR, { useSWRConfig } from 'swr'
import invariant from 'tiny-invariant'
import Box from 'components/Box'
import Button from 'components/Button'
import 'react-toastify/dist/ReactToastify.css'
import Divider from 'components/Divider'
import Grid from 'components/Grid'
import Skeleton from 'components/Skeleton'
import Services from 'services'
import { SWR_USER_REGISTER } from 'services/swr.keys'
import globalStore from 'store'
import { toastStyle } from 'util/toast'
import AppsInUse from './AppsInUse'
import Domains from './Domains'
import Profile from './Profile'
import SecurityActions from './SecurityActions'
import SettingsUserValidationSchema from './validationSchema'

const Settings = () => {
  const { user } = globalStore()
  const { mutate } = useSWRConfig()
  invariant(user, 'Expected value to be a user')
  const { data } = useSWR(SWR_USER_REGISTER, () => Services.Auth.getRegister())

  if (!data) {
    return (
      <Box sx={{ height: '300px', borderRadius: 1, p: 4, backgroundColor: 'primary.contrastText' }}>
        <Skeleton height="100%" />
      </Box>
    )
  }
  const handleSubmit = async values => {
    try {
      await Services.Auth.updateRegister({ ...values })
      toast.success('Update done with Success!', toastStyle)
      mutate('SWR_USER_REGISTER')
    } catch (error) {
      toast.error(error.message, toastStyle)
    }
  }
  return (
    <Formik
      initialValues={{
        fullname: data.fullname,
        gender: data.gender,
        image: data.image,
        phoneNumber: data.phoneNumber,
        birthDate: data.birthDate,
        address: {
          street: data.address.street,
          number: data.address.number,
          postalCode: data.address.postalCode,
          city: data.address.city,
          country: data.address.country,
        },
        webDomains: data.webDomains,
        havePasswordManager: data.havePasswordManager,
        useMFA: data.useMFA,
        haveResponsePlan: data.haveResponsePlan,
        top10Apps: data.top10Apps,
        allSocialMediasInPrivate: data.allSocialMediasInPrivate,
      }}
      onSubmit={handleSubmit}
      validationSchema={SettingsUserValidationSchema}
    >
      {() => (
        <Form>
          <Box sx={{ borderRadius: 1, p: 4, backgroundColor: 'primary.contrastText' }}>
            <Profile />
            <Divider sx={{ my: 4 }} color="#6B7280" />
            <Grid container xs={12}>
              <Domains name="webDomains" />
            </Grid>
            <Divider sx={{ my: 4 }} color="#6B7280" />
            <AppsInUse name="top10Apps" />
            <Divider sx={{ my: 4 }} color="#6B7280" />
            <SecurityActions />
            <Button type="submit" sx={{ mt: 6 }} variant="contained">
              Save Changes
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  )
}

export default Settings
