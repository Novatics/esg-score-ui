import { useField } from 'formik'
import FormControlLabel from 'components/FormControlLabel'
import Radio from 'components/Radio'
import RadioGroup from 'components/RadioGroup'

type TRadioButtonProps = {
  leftValue: string
  rightValue: string
  boolean?: boolean
  name: string
}
const RadioButton = ({ leftValue, rightValue, name, boolean = false }: TRadioButtonProps) => {
  const [, meta, helper] = useField(name)
  const { setValue } = helper

  return (
    <RadioGroup
      defaultValue={meta.value}
      row
      value={meta.value}
      name="radio-buttons-boolean"
      onChange={event => {
        if (event.target.value === 'true') setValue(true)
        else if (event.target.value === 'false') setValue(false)
        else setValue(event.target.value)
      }}
    >
      <FormControlLabel
        value={boolean ? true : leftValue.toLowerCase()}
        control={<Radio />}
        label={leftValue}
      />
      <FormControlLabel
        value={boolean ? false : rightValue.toLowerCase()}
        control={<Radio />}
        label={rightValue}
      />
    </RadioGroup>
  )
}

export default RadioButton
