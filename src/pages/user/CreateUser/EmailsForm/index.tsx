import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { useTheme, useMediaQuery } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import { useField } from 'formik'
import { ToastContainer, toast } from 'react-toastify'
import invariant from 'tiny-invariant'
import Box from 'components/Box'
import Button from 'components/Button'
import Chip from 'components/Chip'
import TextField from 'components/TextField'
import Typography from 'components/Typography'
import globalStore from 'store'
import { toastStyle } from 'util/toast'
import isValidEmail from 'util/validation'
import 'react-toastify/dist/ReactToastify.css'

type TEmailsFormProps = {
  name: string
}
const EmailsForm = ({ name }: TEmailsFormProps) => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  const [inputEmailIsvalid, setInputEmailIsvalid] = useState(false)

  const [inputValue, setInputValue] = useState('')
  const [field, , helpers] = useField(name)
  const [disableEmails, setDisableEmails] = useState(Array.isArray(field.value))
  const { user } = globalStore()
  invariant(user, 'Expected value to be a user')

  const handleAddEmail = () => {
    if (inputValue !== '' && Array.isArray(field.value)) {
      if (field.value.length < 4) helpers.setValue([...field.value, inputValue])
      else {
        toast.warning('Max emails reached', toastStyle)
      }
    }
    if (!field.value) {
      helpers.setValue([inputValue])
    }
    setInputValue('')
  }
  const handleDeleteEmail = emailToDelete => () => {
    const newEmails = field.value.filter(email => email !== emailToDelete)
    if (newEmails.length === 0) {
      helpers.setValue(null)
    } else {
      helpers.setValue(newEmails)
    }
  }
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: 2,
          alignItems: 'flex-start',
          width: isSmallScreen ? 304 : '100%',
        }}
      >
        <Typography marginBottom={1} variant="body1">
          Secondary email accounts
        </Typography>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
          }}
        >
          <TextField
            id="emailsInput"
            size="small"
            fullWidth
            onChange={e => {
              setInputValue(e.target.value)
              setInputEmailIsvalid(isValidEmail(e.target.value))
            }}
            onKeyPress={ev => {
              if (ev.key === 'Enter') {
                ev.preventDefault()
                handleAddEmail()
              }
            }}
            value={inputValue}
            disabled={disableEmails}
          />
          <Button
            sx={{ marginLeft: 1, marginRight: 1 }}
            type="button"
            variant="contained"
            onClick={handleAddEmail}
            disabled={disableEmails || !inputEmailIsvalid}
          >
            Add
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginTop: isSmallScreen ? 4 : 0,
        }}
      >
        <Box display="flex">
          <Typography mr={1.5} fontWeight={500}>
            {user.email}
          </Typography>
          <Typography color="gray.dark">Primary Email</Typography>
        </Box>
        {field.value?.map(
          email =>
            email !== user.email && (
              <Chip
                sx={{ backgroundColor: 'primary.contrastText' }}
                onDelete={handleDeleteEmail(email)}
                key={email}
                label={email}
                deleteIcon={<CloseIcon />}
              />
            )
        )}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Checkbox
          name="disableEmails"
          checked={disableEmails}
          onClick={() => {
            if (disableEmails) {
              helpers.setValue(null)
            }
            if (!disableEmails) {
              helpers.setValue([])
            }

            setDisableEmails(!disableEmails)
          }}
        />
        <Typography variant="body2">I don’t have other email accounts</Typography>
        <ToastContainer />
      </Box>
    </>
  )
}

export default EmailsForm
