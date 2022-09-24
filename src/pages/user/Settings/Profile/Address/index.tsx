import { useState, useEffect } from 'react'
import { useTheme, useMediaQuery, SxProps } from '@mui/material'
import { useField } from 'formik'
import Autocomplete from 'components/Autocomplete'
import Box from 'components/Box'
import InputAdornment from 'components/InputAdornment'
import InputField from 'components/InputField'
import TextField from 'components/TextField'
import Typography from 'components/Typography'
import { countries } from 'util/countries'

interface IAddressForm {
  sx?: SxProps
}
// eslint-disable-next-line complexity
const AddressForm = ({ sx }: IAddressForm) => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  const [, meta, helpers] = useField('address.country')
  const [countrySelected, setCountrySelected] = useState({ code: '', label: '', phone: '' })
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const countrySelect = countries.find(country => country.label === meta.value)
    if (countrySelect) {
      setCountrySelected(countrySelect)
    }
  }, [meta.value])

  return (
    <Box sx={sx}>
      <Typography fontWeight={500}>Address</Typography>
      <Box width="100%" maxWidth={isSmallScreen ? 304 : 550}>
        {isSmallScreen === true ? (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <InputField
              sx={{ width: isSmallScreen ? 180 : 286 }}
              size="small"
              label="Street"
              name="address.street"
            />
            <InputField
              sx={{ width: isSmallScreen ? 104 : 100 }}
              size="small"
              label="Number"
              name="address.number"
            />
          </Box>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <InputField
              sx={{ width: isSmallScreen ? 104 : 100 }}
              size="small"
              label="Number"
              name="address.number"
            />
            <InputField
              sx={{ width: isSmallScreen ? 180 : 286 }}
              size="small"
              label="Street"
              name="address.street"
            />
          </Box>
        )}
        <InputField
          sx={{ width: isSmallScreen ? 304 : 400 }}
          size="small"
          label="City"
          name="address.city"
        />

        <InputField
          sx={{ width: isSmallScreen ? 304 : 400 }}
          size="small"
          label="Zip Code/ Postal Code"
          name="address.postalCode"
        />

        <Typography marginBottom={1} variant="body1">
          Country
        </Typography>
        <Autocomplete
          id="country-select-demo"
          options={countries}
          disableClearable
          onChange={(event, value) => {
            helpers.setValue(value.label)
          }}
          value={countrySelected}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue)
          }}
          autoHighlight
          getOptionLabel={option => option.label}
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
              {`${option.label}`}
            </Box>
          )}
          renderInput={params => (
            <TextField
              {...params}
              sx={{ display: 'flex', width: '60%' }}
              size="small"
              value={meta.value}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment sx={{ display: 'flex' }} position="start">
                    <img
                      loading="lazy"
                      width="20"
                      src={`https://flagcdn.com/w20/${countrySelected?.code?.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w40/${countrySelected?.code?.toLowerCase()}.png 2x`}
                      alt=""
                    />
                  </InputAdornment>
                ),
                autoComplete: 'new-password', // disable autocomplete and autofill
              }}
            />
          )}
        />
      </Box>
    </Box>
  )
}

export default AddressForm
