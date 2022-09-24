import { render } from '@testing-library/react'
import { useField } from 'formik' // package will be auto mocked
import WebDomainsForm from '../index'

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
      name: 'webDomains',
    }
    ;(useField as jest.Mock).mockReturnValue([mockField, mockMeta])

    const { getByText, getByRole } = render(<WebDomainsForm name="webDomains" />)
    const label = getByText('Web domains')
    const addButton = getByRole('button', { name: 'Add' })
    const disableWebDomainsButton = getByText('I don’t own a web domain')

    expect(label).toBeInTheDocument()
    expect(addButton).toBeInTheDocument()
    expect(disableWebDomainsButton).toBeInTheDocument()
  })
})
