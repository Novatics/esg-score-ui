import { render } from '@testing-library/react'
import { useField } from 'formik'
import BooleanForm from '../index'

jest.mock('formik', () => ({
  useField: jest.fn(),
}))
describe('BooleanForm Component', () => {
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
      name: 'fieldName',
    }

    const mockHelper = {
      setValue: jest.fn(),
    }
    ;(useField as jest.Mock).mockReturnValue([mockField, mockMeta, mockHelper])

    const { getByText } = render(<BooleanForm name="fieldName" />)
    const yesInput = getByText('Yes')
    const noInput = getByText('No')

    expect(yesInput).toBeInTheDocument()
    expect(noInput).toBeInTheDocument()
  })
})
