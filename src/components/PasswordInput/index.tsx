/* eslint-disable complexity */
import { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { useField } from 'formik'
import { at } from 'lodash'
import Box from 'components/Box'
import IconButton from 'components/IconButton'
import InputAdornment from 'components/InputAdornment'
import TextField from 'components/TextField'
import Typography from 'components/Typography'

interface IPasswordInput {
  name: string
  label?: string
  placeholder?: string
  size?: 'medium' | 'small' | undefined
}
const PasswordInput = ({ name, label, placeholder, size }: IPasswordInput) => {
  const [showPassword, setShowPassword] = useState(false)
  const [field, meta] = useField(name)
  const renderHelperText = () => {
    const [touched, error] = at(meta, 'touched', 'error')
    if (touched && error) {
      return error
    }
    return ' '
  }
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      {label && (
        <Typography marginBottom={1} variant="body1">
          {label}
        </Typography>
      )}
      <TextField
        aria-label="TextFieldAriaLabel"
        type={showPassword ? 'text' : 'password'}
        helperText={renderHelperText()}
        error={!!(meta.touched && meta.error && true)}
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        name={name}
        fullWidth
        size={size}
        placeholder={placeholder}
        inputProps={{
          'data-testid': 'passwordInput',
        }}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  )
}

export default PasswordInput
