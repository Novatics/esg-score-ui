import { useState } from 'react'
import { Typography } from '@mui/material'
import { useField } from 'formik'
import Box from 'components/Box'
import TextField from 'components/TextField'
import AnimatedContainer from '../AnimatedContainer'

type TNameFormProps = {
  fadeOut: boolean
  setFadeOut: (value: boolean) => void
}
export default function NameForm({ fadeOut, setFadeOut }: TNameFormProps) {
  const [field, , helpers] = useField('fullname')
  const fullname = field.value.split(' ')
  const [name, setName] = useState(fullname[0] || '')
  const [lastName, setLastName] = useState(fullname[1] || '')

  const handleChangeInForm = (formName: string, formLastName: string) => {
    if (formName && formLastName) {
      helpers.setValue(`${formName} ${formLastName}`)
    } else {
      helpers.setValue('')
    }
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    handleChangeInForm(e.target.value, lastName)
  }
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value)
    handleChangeInForm(name, e.target.value)
  }

  return (
    <Box display="flex" flexDirection="column" alignSelf="flex-start" width="100%" maxWidth={550}>
      <AnimatedContainer fadeOut={fadeOut} setFadeOut={setFadeOut} delay={250}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mb: 5 }}>
          <Typography marginBottom={1} variant="body1">
            Name
          </Typography>
          <TextField
            sx={{ width: 280 }}
            type="text"
            onChange={handleNameChange}
            value={name}
            fullWidth
            size="small"
            data-testid="nameInput"
          />
        </Box>
      </AnimatedContainer>
      <AnimatedContainer fadeOut={fadeOut} setFadeOut={setFadeOut} delay={500}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Typography marginBottom={1} variant="body1">
            Last Name
          </Typography>
          <TextField
            sx={{ width: 280 }}
            type="text"
            onChange={handleLastNameChange}
            value={lastName}
            fullWidth
            size="small"
            data-testid="lastNameInput"
          />
        </Box>
      </AnimatedContainer>
    </Box>
  )
}
