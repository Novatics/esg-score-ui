import { render } from '@testing-library/react'
import { useField } from 'formik'
import DateOfBirthForm from '../index'

jest.mock('formik', () => ({
  useField: jest.fn(),
}))
describe('DateOfBirthForm Component', () => {
  it('should render the basic layout', () => {
    const mockMeta = {
      touched: false,
      error: '',
      initialError: '',
      initialTouched: false,
      initialValue: '',
      value: '',
    }
    const mockField = {
      value: '',
      checked: false,
      onChange: jest.fn(),
      onBlur: jest.fn(),
      multiple: undefined,
      name: 'birthDate',
    }
    ;(useField as jest.Mock).mockReturnValue([mockField, mockMeta])

    const { getByPlaceholderText } = render(<DateOfBirthForm name="birthDate" />)
    const monthInput = getByPlaceholderText('Month')
    const dayInput = getByPlaceholderText('Day')
    const yearInput = getByPlaceholderText('Year')

    expect(monthInput).toBeInTheDocument()
    expect(dayInput).toBeInTheDocument()
    expect(yearInput).toBeInTheDocument()
  })
})
