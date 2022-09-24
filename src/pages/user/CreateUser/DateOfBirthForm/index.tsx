import { useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { format } from 'date-fns'
import { useField } from 'formik'
import InputMask from 'react-input-mask'
import * as Yup from 'yup'
import Box from 'components/Box'
import FormHelperText from 'components/FormHelperText'
import TextField from 'components/TextField'
import Typography from 'components/Typography'
import { months } from 'util/dates'

type TDateOfBirthFormProps = {
  name: string
}

const schema = Yup.object().shape({
  year: Yup.number().min(1872).max(2022).required('Year is required'),
  month: Yup.number().min(0).max(12).required('Month is required'),
  day: Yup.number().min(1).max(31).required('Day is required'),
})
export default function DateOfBirthForm({ name }: TDateOfBirthFormProps) {
  const [, meta, helper] = useField(name)

  const formatMonth = meta.value && format(new Date(meta.value), 'MM')
  const formatDay = meta.value && format(new Date(meta.value), 'dd')
  const formatYear = meta.value && format(new Date(meta.value), 'yyyy')

  const [month, setMonth] = useState(formatMonth)
  const [day, setDay] = useState(formatDay)
  const [year, setYear] = useState(formatYear)
  const [internalError, setInternalError] = useState(false)

  const handleChangeYear = async (yearNumber: number) => {
    try {
      setYear(yearNumber)
      await schema.validate({ year: yearNumber, month, day }, { abortEarly: false })

      const birthDate = new Date(yearNumber, month - 1, day)
      helper.setValue(birthDate)
      setInternalError(false)
    } catch (err) {
      helper.setValue('')
      if (month && day && yearNumber) {
        setInternalError(true)
        helper.setError('Valid Date Of Birth is required')
      }
    }
  }
  const handleChangeDateFieldInForm = async () => {
    try {
      await schema.validate({ year, month, day }, { abortEarly: false })

      const birthDate = new Date(year, month - 1, day)
      helper.setValue(birthDate)
      setInternalError(false)
    } catch (err) {
      helper.setValue('')
      if (month && day && year) {
        setInternalError(true)
        helper.setError('Valid Date Of Birth is required')
      }
    }
  }

  const handleChange = (event: SelectChangeEvent) => {
    setMonth(event.target.value as string)
    handleChangeDateFieldInForm()
  }

  return (
    <>
      <Typography mb={0.5} variant="body1">
        Date of birth
      </Typography>
      <Box display="flex" flexDirection="row" width="100%" maxWidth={550}>
        <Box>
          <Select
            fullWidth
            value={month}
            onChange={handleChange}
            displayEmpty
            placeholder="Month"
            input={<OutlinedInput />}
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{ height: 40, width: 113, marginRight: 0.5 }}
          >
            <MenuItem disabled value="">
              <Typography color="text.secondary">Month</Typography>
            </MenuItem>
            {months.map(monthData => (
              <MenuItem value={monthData.value} key={monthData.value}>
                {monthData.name}
              </MenuItem>
            ))}
          </Select>
        </Box>

        <InputMask
          mask="99"
          maskChar=" "
          name="Day"
          value={day}
          size="small"
          sx={{ width: 55, marginRight: 0.5 }}
          onChange={e => setDay(e.target.value.trim())}
          onBlur={handleChangeDateFieldInForm}
          autoComplete="off"
        >
          {() => <TextField placeholder="Day" size="small" sx={{ width: 55, marginRight: 0.5 }} />}
        </InputMask>

        <InputMask
          mask="9999"
          maskChar=" "
          name="Year"
          value={year}
          onChange={e => handleChangeYear(e.target.value.trim())}
          autoComplete="off"
        >
          {() => <TextField placeholder="Year" size="small" sx={{ width: 75 }} />}
        </InputMask>
      </Box>
      {internalError && <FormHelperText error>{meta.error}</FormHelperText>}
    </>
  )
}
