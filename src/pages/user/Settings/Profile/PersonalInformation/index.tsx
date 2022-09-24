import { SxProps } from '@mui/system'
import { useField } from 'formik'
import Box from 'components/Box'
import InputField from 'components/InputField'
import MenuItem from 'components/MenuItem'
import Select from 'components/Select'
import Typography from 'components/Typography'
import DateOfBirthForm from 'pages/user/CreateUser/DateOfBirthForm'

interface IPersonalInformation {
  sx?: SxProps
}
const PersonalInformation = ({ sx }: IPersonalInformation) => {
  const [, meta, helpers] = useField('gender')
  return (
    <Box sx={sx}>
      <Typography fontWeight={500}>Personal Information</Typography>
      <InputField sx={{ width: '286px' }} name="fullname" size="small" label="Full Name" />
      <DateOfBirthForm name="birthDate" />
      <Typography marginBottom={1} variant="body1">
        Gender
      </Typography>
      <Select
        value={meta.value}
        onChange={e => {
          helpers.setValue(e.target.value)
        }}
        size="small"
      >
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
        <MenuItem value="other">Other</MenuItem>
      </Select>
    </Box>
  )
}

export default PersonalInformation
