import { useState } from 'react'
import { useField } from 'formik'
import Box from 'components/Box'
import CountrySelect from 'components/CountrySelect'
import FormHelperText from 'components/FormHelperText'
import TextField from 'components/TextField'

interface IPhoneForm {
  name: string
}
export default function PhoneForm({ name }: IPhoneForm) {
  const [, meta, helpers] = useField(name)
  const [countryCode, setCountryCode] = useState('')
  const [phone, setPhone] = useState('')

  const handleCountrySelectChange = value => {
    setCountryCode(value)
    if (value && phone) {
      helpers.setValue(`${value} ${phone}`)
    }
  }
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    helpers.setTouched(true)
    const onlyNums = event.target.value.replace(/[^0-9]/g, '')
    setPhone(onlyNums)

    if (countryCode && onlyNums) {
      helpers.setValue(`${countryCode}${onlyNums}`)
    } else {
      helpers.setValue('')
    }
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          mb: 0,
          width: '100%',
          maxWidth: 550,
        }}
      >
        <CountrySelect
          label="Phone Number"
          value={countryCode}
          onChange={handleCountrySelectChange}
          selectBy="code"
        />

        <TextField
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginLeft: 0.5,
          }}
          onChange={handlePhoneChange}
          value={phone}
          fullWidth
          size="small"
          data-testid="phone"
        />
      </Box>
      <FormHelperText error>{meta.touched && meta.error}</FormHelperText>
    </>
  )
}
