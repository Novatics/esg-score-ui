import { render } from '@testing-library/react'
import { useField } from 'formik' // package will be auto mocked
import InputField from '../index'

jest.mock('formik', () => ({
  useField: jest.fn(),
}))
describe('InputField Component', () => {
  it('should render the component', () => {
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
      name: 'firstName',
    }

    ;(useField as jest.Mock).mockReturnValue([mockField, mockMeta])
    const { getByText } = render(<InputField label="testLabel" name="testName" />)

    const label = getByText('testLabel')
    expect(label).toBeInTheDocument()
  })
  it('should show error message', () => {
    const mockMeta = {
      touched: true,
      error: 'testLabel is required',
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
      name: 'testName',
    }
    ;(useField as jest.Mock).mockReturnValue([mockField, mockMeta])
    const { getByText } = render(<InputField label="testLabel" name="testName" />)

    const errorMessage = getByText('testLabel is required')
    expect(errorMessage).toBeInTheDocument()
  })
})
