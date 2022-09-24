import { useState } from 'react'
import { MenuItem, Select } from '@mui/material'
import Stack from 'components/Stack'
import Typography from 'components/Typography'

function SortSelect() {
  const [value, setValue] = useState(10)

  const handleChange = event => {
    setValue(event.target.value)
  }

  const values = [
    { label: 'Name [A-Z]', value: 10 },
    { label: 'Name [Z-A]', value: 20 },
    { label: 'Email [A-Z]', value: 30 },
    { label: 'Email [Z-A]', value: 40 },
    { label: 'Scan Completed', value: 40 },
    { label: 'Scan Incomplete', value: 40 },
  ]

  return (
    <Stack gap={2} flexDirection="row" justifyItems="center" alignItems="center">
      <Typography variant="body1">Sort By:</Typography>
      <Select size="small" value={value} onChange={handleChange} displayEmpty>
        {values.map(({ label, value: itemValue }) => (
          <MenuItem key={itemValue} value={itemValue}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  )
}

export default SortSelect
