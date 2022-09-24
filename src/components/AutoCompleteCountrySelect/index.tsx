import { useState } from 'react'
import { useField } from 'formik'
import Autocomplete, { createFilterOptions } from 'components/Autocomplete'
import Box from 'components/Box'
import InputAdornment from 'components/InputAdornment'
import TextField from 'components/TextField'
import Typography from 'components/Typography'
import { countries, ICountryType } from 'util/countries'

type TCountrySelectProps = {
  label: string
  name: string
  textFieldLabel?: string
}

const filterOptions = createFilterOptions<ICountryType>({
  stringify: ({ phone, label }) => `${phone} ${label}`,
})
const AutoCompleteCountrySelect = ({ name, label, textFieldLabel }: TCountrySelectProps) => {
  const [, , helpers] = useField(name)
  const [countrySelected, setCountrySelected] = useState({} as ICountryType)
  const [phone, setPhone] = useState('')

  const handleCountryCodeChange = (event, value) => {
    setCountrySelected({ ...value, code: value.code.toLowerCase() })
    if (value && phone) {
      helpers.setValue(`${value.phone}${phone}`)
    }
  }
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    helpers.setTouched(true)
    const onlyNums = event.target.value.replace(/[^0-9]/g, '')
    setPhone(onlyNums)

    if (countrySelected && onlyNums) {
      helpers.setValue(`${countrySelected.phone}${onlyNums}`)
    } else {
      helpers.setValue('')
    }
  }
  return (
    <Box data-testid="countryCode">
      <Typography mb={0.5} variant="body1">
        {label}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          mb: 0,
          width: '100%',
          maxWidth: 550,
        }}
      >
        <Autocomplete
          id="country-select-demo"
          options={countries}
          disableClearable
          onChange={handleCountryCodeChange}
          autoHighlight
          getOptionLabel={option => option.phone}
          filterOptions={filterOptions}
          componentsProps={{
            paper: {
              sx: {
                width: 'fit-content',
              },
            },
          }}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ '& > img': { mr: 2, flexShrink: 0 }, display: 'flex' }}
              {...props}
              key={option.code}
            >
              <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                alt=""
              />
              {`${option.phone} `}
            </Box>
          )}
          renderInput={params => (
            <TextField
              {...params}
              sx={{ display: 'flex', minWidth: '110px' }}
              size="small"
              label={textFieldLabel}
              value={countrySelected}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment sx={{ display: 'flex' }} position="start">
                    <img
                      loading="lazy"
                      width="20"
                      src={`https://flagcdn.com/w20/${countrySelected?.code}.png`}
                      srcSet={`https://flagcdn.com/w40/${countrySelected?.code}.png 2x`}
                      alt=""
                    />
                  </InputAdornment>
                ),
                autoComplete: 'new-password', // disable autocomplete and autofill
              }}
            />
          )}
        />

        <TextField
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            marginLeft: 0.5,
          }}
          onChange={handlePhoneChange}
          value={phone}
          fullWidth
          size="small"
          data-testid="phone"
        />
      </Box>
    </Box>
  )
}

export default AutoCompleteCountrySelect
