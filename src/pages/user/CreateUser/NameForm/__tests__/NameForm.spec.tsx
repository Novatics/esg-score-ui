import { render } from '@testing-library/react'
import { useField } from 'formik'
import NameForm from '../index'

jest.mock('formik', () => ({
  useField: jest.fn(),
}))
describe('NameForm Component', () => {
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
      name: 'fullname',
    }
    ;(useField as jest.Mock).mockReturnValue([mockField, mockMeta])

    const { getByTestId } = render(<NameForm />)
    const nameInput = getByTestId('nameInput')
    const lastNameInput = getByTestId('lastNameInput')

    expect(nameInput).toBeInTheDocument()
    expect(lastNameInput).toBeInTheDocument()
  })
})
