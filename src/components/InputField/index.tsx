import { Typography } from '@mui/material'
import { SxProps } from '@mui/material/styles'
import { useField } from 'formik'
import { at } from 'lodash'
import TextField from 'components/TextField'
import { InputContainer } from './styles'

type TInputFieldProps = {
  label?: string
  name: string
  sx?: SxProps
  size?: 'medium' | 'small' | undefined
  placeholder?: string
}
const InputField = ({ label, name, sx, size, placeholder }: TInputFieldProps) => {
  const [field, meta] = useField(name)

  const renderHelperText = () => {
    const [touched, error] = at(meta, 'touched', 'error')
    if (touched && error) {
      return error
    }
    return ' '
  }
  return (
    <InputContainer>
      {label && (
        <Typography marginBottom={1} variant="body1">
          {label}
        </Typography>
      )}
      <TextField
        type="text"
        helperText={renderHelperText()}
        error={!!(meta.touched && meta.error && true)}
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        name={name}
        fullWidth
        sx={sx}
        size={size}
        placeholder={placeholder}
        inputProps={{
          'data-testid': `${name}Input`,
        }}
      />
    </InputContainer>
  )
}

export default InputField
