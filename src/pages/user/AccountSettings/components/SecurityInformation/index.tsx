import { useState, useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { ToastContainer, toast } from 'react-toastify'
import useSWR from 'swr'
import invariant from 'tiny-invariant'
import Box from 'components/Box'
import Button from 'components/Button'
import Chip from 'components/Chip'
import Divider from 'components/Divider'
import Stack from 'components/Stack'
import TextField from 'components/TextField'
import Typography from 'components/Typography'
import Services from 'services'
import { SWR_USER_REGISTER } from 'services/swr.keys'
import globalStore from 'store'
import { toastStyle } from 'util/toast'
import 'react-toastify/dist/ReactToastify.css'

const SecurityInformation = () => {
  const { user } = globalStore()
  invariant(user, 'Expected value to be a user')
  const [emailInputValue, setEmailInputValue] = useState('')
  const [emailsHaveAltered, setEmailsHaveAltered] = useState(false)
  const { data } = useSWR(SWR_USER_REGISTER, () => Services.Auth.getRegister())
  const [emails, setEmails] = useState<Array<string>>([])

  useEffect(() => {
    if (data) {
      setEmails(data.secondaryEmails)
    }
  }, [data])

  const handleDeleteEmail = emailToDelete => () => {
    const newEmails = emails.filter(email => email !== emailToDelete)
    setEmails(newEmails)
    setEmailsHaveAltered(true)
  }
  const handleUpdateEmails = async () => {
    try {
      await Services.Auth.updateSecondaryEmails(emails)
      toast.success('Emails updated!', toastStyle)
      setEmailsHaveAltered(false)
    } catch (error) {
      toast.warning(error.response.data.message, toastStyle)
    }
  }
  const handleAddSecondaryEmail = async () => {
    if (emailInputValue !== '' && emails.length < 4) {
      setEmails([...emails, emailInputValue])
      setEmailsHaveAltered(true)
    } else {
      toast.warning('Max emails reached', toastStyle)
    }
    setEmailInputValue('')
  }
  return (
    <Stack spacing={2}>
      <Typography variant="body1" fontWeight="500" color="primary.dark">
        Security Information
      </Typography>
      <Typography fontWeight="500">E-mail</Typography>
      <Box>
        <Typography color="gray.dark">Primary</Typography>
        <Box display="flex" gap={2}>
          <Typography color="#1C2431">{user.email}</Typography>
          {user.email_verified ? (
            <Typography color="success.main">Verified</Typography>
          ) : (
            <Typography color="error.medium">Not Verified</Typography>
          )}
        </Box>
        <Divider sx={{ my: 3, maxWidth: '400px' }} />
        <Typography>Add secondary e-mail accounts</Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 2,
          }}
        >
          <TextField
            size="small"
            sx={{ width: '250px' }}
            onChange={e => {
              setEmailInputValue(e.target.value)
            }}
            onKeyPress={ev => {
              if (ev.key === 'Enter') {
                ev.preventDefault()
                handleAddSecondaryEmail()
              }
            }}
            value={emailInputValue}
          />
          <Button onClick={handleAddSecondaryEmail} sx={{ ml: 1 }} variant="outlined">
            Add
          </Button>
        </Box>
        <Stack alignItems="flex-start">
          {emails?.map(email => (
            <Chip
              sx={{ backgroundColor: 'primary.contrastText' }}
              onDelete={handleDeleteEmail(email)}
              key={email}
              label={email}
              deleteIcon={<CloseIcon />}
            />
          ))}
        </Stack>
        <Button
          disabled={!emailsHaveAltered}
          sx={{ mt: 2 }}
          variant="contained"
          onClick={handleUpdateEmails}
        >
          Save Changes
        </Button>
      </Box>
      <ToastContainer />
    </Stack>
  )
}

export default SecurityInformation
