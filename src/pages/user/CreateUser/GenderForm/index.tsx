import Box from 'components/Box'
import Toggle from 'components/Toggle'
import Typography from 'components/Typography'

const options = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'undefined', label: 'Rather not say' },
  { value: 'other', label: 'Other' },
]

export default function GenderForm() {
  return (
    <Box sx={{ width: '100%', maxWidth: 550 }}>
      <Typography mb={0.5} variant="body1">
        Gender
      </Typography>
      <Toggle options={options} name="gender" />
    </Box>
  )
}
