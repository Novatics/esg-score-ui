import { forwardRef, ForwardedRef } from 'react'
import SelectUnstyled, { SelectUnstyledProps } from '@mui/base/SelectUnstyled'
import { SxProps } from '@mui/system'
import Box from 'components/Box'
import Typography from 'components/Typography'
import { countries } from 'util/countries'
import {
  StyledNameButton,
  StyledCodeButton,
  StyledListbox,
  StyledOption,
  StyledPopper,
} from './styles'

type TCountrySelectProps = {
  label: string
  value: string | null
  onChange: any
  selectBy: 'name' | 'code'
  sx?: SxProps
}

export default function CountrySelect({
  value,
  onChange,
  label,
  selectBy,
  sx,
}: TCountrySelectProps) {
  const CustomSelect = forwardRef(function CustomSelect(
    props: SelectUnstyledProps<string>,
    ref: ForwardedRef<HTMLButtonElement>
  ) {
    const components: SelectUnstyledProps<string>['components'] = {
      Root: selectBy === 'name' ? StyledNameButton : StyledCodeButton,
      Listbox: StyledListbox,
      Popper: StyledPopper,
      ...props.components,
    }

    return <SelectUnstyled {...props} ref={ref} components={components} />
  })

  return (
    <Box sx={sx} data-testid="countryCode">
      <Typography mb={0.5} variant="body1">
        {label}
      </Typography>
      <CustomSelect onChange={onChange} value={value}>
        {countries.map(c => (
          <StyledOption key={c.code} value={c.phone}>
            <img
              loading="lazy"
              width="20"
              src={`https://flagcdn.com/w20/${c.code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png 2x`}
              alt={`Flag of ${c.label}`}
            />
            {selectBy === 'code' ? c.phone : c.label}
          </StyledOption>
        ))}
      </CustomSelect>
    </Box>
  )
}
