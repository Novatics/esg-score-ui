import { render } from '@testing-library/react'
import { useField } from 'formik'
import GenderForm from '../index'

jest.mock('formik', () => ({
  useField: jest.fn(),
}))
describe('GenderForm Component', () => {
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
      name: 'gender',
    }

    const mockHelper = {
      setValue: jest.fn(),
    }
    ;(useField as jest.Mock).mockReturnValue([mockField, mockMeta, mockHelper])

    const { getByText } = render(<GenderForm />)
    const maleInput = getByText('Male')
    const femaleInput = getByText('Female')
    const otherInput = getByText('other')

    expect(maleInput).toBeInTheDocument()
    expect(femaleInput).toBeInTheDocument()
    expect(otherInput).toBeInTheDocument()
  })
})
