import { useState } from 'react'
import IconButton from 'components/IconButton'
import InputAdornment from 'components/InputAdornment'
import TextField from 'components/TextField'
import Typography from 'components/Typography'
import { ReactComponent as CopyIcon } from './icons/CopyIcon.svg'

interface ICopyTextInputProps {
  value: string
  size?: 'medium' | 'small' | undefined
}
const CopyTextInput = ({ value, size }: ICopyTextInputProps) => {
  const [textCopied, setTextCopied] = useState(false)
  const handleClickCopyText = () => {
    navigator.clipboard.writeText(value)
    setTextCopied(true)
    setTimeout(() => setTextCopied(false), 1500)
  }
  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <>
      <TextField
        aria-label="TextFieldAriaLabel"
        type="text"
        value={value}
        fullWidth
        size={size}
        onFocus={handleClickCopyText}
        inputProps={{
          'data-testid': 'CopyTextInput',
        }}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        InputProps={{
          readOnly: true,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClickCopyText} onMouseDown={handleMouseDown} edge="end">
                <CopyIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Typography color="success.main" sx={{ visibility: textCopied ? 'visible' : 'hidden' }}>
        Copied!
      </Typography>
    </>
  )
}

export default CopyTextInput
