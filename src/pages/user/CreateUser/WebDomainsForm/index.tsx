import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { useTheme, useMediaQuery } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import { useField } from 'formik'
import Box from 'components/Box'
import Button from 'components/Button'
import Chip from 'components/Chip'
import TextField from 'components/TextField'
import Typography from 'components/Typography'

type TWebDomainsFormProps = {
  name: string
}
const WebDomainsForm = ({ name }: TWebDomainsFormProps) => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

  const [inputValue, setInputValue] = useState('')
  const [field, , helpers] = useField(name)
  const [disableWebDomains, setDisableWebDomains] = useState(Array.isArray(field.value))
  const handleAddDomain = () => {
    if (inputValue !== '' && Array.isArray(field.value)) {
      helpers.setValue([...field.value, `https://${inputValue}/`])
    }
    if (!field.value) {
      helpers.setValue([`https://${inputValue}/`])
    }
    setInputValue('')
  }
  const handleDeleteDomain = domainToDelete => () => {
    const newDomains = field.value.filter(webDomain => webDomain !== domainToDelete)
    if (newDomains.length === 0) {
      helpers.setValue(null)
    } else {
      helpers.setValue(newDomains)
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
          Web domains
        </Typography>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <Typography>https:// </Typography>
          <TextField
            id="webDomainInput"
            size="small"
            fullWidth
            onChange={e => {
              setInputValue(e.target.value)
            }}
            onKeyPress={ev => {
              if (ev.key === 'Enter') {
                ev.preventDefault()
                handleAddDomain()
              }
            }}
            value={inputValue}
            disabled={disableWebDomains}
          />
          <Button
            sx={{ marginLeft: 1, marginRight: 1 }}
            type="button"
            variant="contained"
            onClick={handleAddDomain}
            disabled={disableWebDomains}
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
        {field.value?.map(webDomain => (
          <Chip
            sx={{ backgroundColor: 'primary.contrastText' }}
            onDelete={handleDeleteDomain(webDomain)}
            key={webDomain}
            label={webDomain}
            deleteIcon={<CloseIcon />}
          />
        ))}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Checkbox
          name="disableWebDomains"
          checked={disableWebDomains}
          onClick={() => {
            if (disableWebDomains) {
              helpers.setValue(null)
            }
            if (!disableWebDomains) {
              helpers.setValue([])
            }
            setDisableWebDomains(!disableWebDomains)
          }}
        />
        <Typography variant="body2">I don’t own a web domain</Typography>
      </Box>
    </>
  )
}

export default WebDomainsForm
