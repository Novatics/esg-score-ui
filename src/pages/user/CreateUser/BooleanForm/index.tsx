/* eslint-disable jsx-a11y/label-has-associated-control */
import { useField } from 'formik'
import Box from 'components/Box'
import Typography from 'components/Typography'
import { SizeOption } from './styles'

type TBooleanFormProps = {
  name: string
}
const BooleanForm = ({ name }: TBooleanFormProps) => {
  const [field, , helpers] = useField(name)
  return (
    <Box sx={{ display: 'flex' }}>
      <SizeOption>
        <input
          type="radio"
          id="radio-true"
          name="booleanForm"
          checked={field.value === true}
          onChange={() => {
            helpers.setValue(true)
          }}
          value="true"
        />
        <label htmlFor="radio-true">
          <Typography variant="button" sx={{ color: 'primary.main' }}>
            Yes
          </Typography>
        </label>
      </SizeOption>
      <SizeOption>
        <input
          type="radio"
          id="radio-false"
          name="booleanForm"
          checked={field.value === false}
          onChange={() => {
            helpers.setValue(false)
          }}
          value="false"
        />
        <label htmlFor="radio-false">
          <Typography variant="button" sx={{ color: 'primary.main' }}>
            No
          </Typography>
        </label>
      </SizeOption>
    </Box>
  )
}

export default BooleanForm
