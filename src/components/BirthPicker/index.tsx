import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { useField } from 'formik'
import DatePicker from 'components/DatePicker'
import TextField from 'components/TextField'

type TBirthPickerProps = {
  name: string
  label: string
}
const BirthPicker = ({ name }: TBirthPickerProps) => {
  const [, meta, helper] = useField(name)
  // const { touched, error } = meta
  const { setValue } = helper
  // const isError = touched && error && true
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        views={['year', 'month', 'day']}
        openTo="year"
        label="DOB"
        maxDate={new Date()}
        value={meta.value}
        onChange={newDate => {
          if (newDate) {
            setValue(newDate)
          }
        }}
        renderInput={params => <TextField {...params} helperText={null} />}
      />
    </LocalizationProvider>
  )
}

export default BirthPicker
