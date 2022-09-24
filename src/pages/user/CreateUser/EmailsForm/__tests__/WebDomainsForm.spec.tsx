import { render } from '@testing-library/react'
import { useField } from 'formik' // package will be auto mocked
import EmailsForm from '../index'

jest.mock('formik', () => ({
  useField: jest.fn(),
}))
describe('WebDomainsForm Component', () => {
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
      value: [],
      checked: false,
      onChange: jest.fn(),
      onBlur: jest.fn(),
      multiple: undefined,
      name: 'emails',
    }
    ;(useField as jest.Mock).mockReturnValue([mockField, mockMeta])

    const { getByText, getByRole } = render(<EmailsForm name="secondaryEmails" />)
    const label = getByText('Secondary email accounts')
    const addButton = getByRole('button', { name: 'Add' })
    const disableWebDomainsButton = getByText('I don’t have other email accounts')

    expect(label).toBeInTheDocument()
    expect(addButton).toBeInTheDocument()
    expect(disableWebDomainsButton).toBeInTheDocument()
  })
})
