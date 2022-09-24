/* eslint-disable complexity */
import { useField } from 'formik'
import Button from 'components/Button'
import { Container } from './styles'

type TToggleProps = {
  options: Array<{ value: string; label: string }>
  name: string
}

export default function Toggle({ options, name }: TToggleProps) {
  const [, meta, helper] = useField(name)
  const { setValue } = helper

  const handleSelect = (newOption: string) => {
    if (newOption === meta.value) {
      setValue('')
    } else {
      setValue(newOption)
    }
  }

  return (
    <Container>
      {options.map((option, index) => (
        <Button
          key={option.label}
          onClick={() => handleSelect(option.value)}
          sx={{
            height: 40,
            marginLeft: index === 0 ? 0 : 0.5,
            border: 'none',
            '&:hover': {
              border: 'none',
              backgroundColor: meta.value === option.value ? 'primary.main' : 'primary.light',
            },
            backgroundColor: meta.value === option.value ? 'primary.main' : 'primary.light',
            color: meta.value === option.value ? 'primary.contrastText' : 'primary.main',
          }}
          variant="outlined"
        >
          {option.label}
        </Button>
      ))}
    </Container>
  )
}
