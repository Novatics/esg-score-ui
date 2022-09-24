import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { useTheme, useMediaQuery } from '@mui/material'
import { useField } from 'formik'
import Box from 'components/Box'
import Button from 'components/Button'
import Chip from 'components/Chip'
import Grid from 'components/Grid'
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
  const handleAddDomain = () => {
    if (inputValue !== '') {
      helpers.setValue([...field.value, inputValue])
    }
    setInputValue('')
  }
  const handleDeleteDomain = domainToDelete => () => {
    const newDomains = field.value.filter(webDomain => webDomain !== domainToDelete)
    helpers.setValue(newDomains)
  }
  return (
    <Grid item xs={6}>
      <Typography fontWeight={500} mb={1} color="#0056C0">
        Domains
      </Typography>
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
          }}
        >
          <TextField
            id="webDomainSettingsInput"
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
          />
          <Button
            sx={{ marginLeft: 1, marginRight: 1 }}
            type="button"
            variant="contained"
            onClick={handleAddDomain}
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
    </Grid>
  )
}

export default WebDomainsForm
