import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material'
import Stack from 'components/Stack'

function SearchInput() {
  const [value, setValue] = useState('')

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <Stack gap={2}>
      <OutlinedInput
        sx={{ width: 315 }}
        type="text"
        name="search"
        value={value}
        placeholder="Search by name or e-mail"
        onChange={handleChange}
        size="small"
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="search new user" onClick={handleChange} edge="end">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </Stack>
  )
}

export default SearchInput
