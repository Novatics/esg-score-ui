import { render } from '@testing-library/react'
import { useField } from 'formik'
import AddressForm from '../index'

jest.mock('formik', () => ({
  useField: jest.fn(),
}))
describe('AddressForm Component', () => {
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
      name: 'country',
    }
    ;(useField as jest.Mock).mockReturnValue([mockField, mockMeta])

    const { getByText } = render(<AddressForm />)
    const addressInput = getByText('Street')
    const numberInput = getByText('Number')

    const cityInput = getByText('City')
    const zipCodeInput = getByText('Zip Code/ Postal Code')
    const countryInput = getByText('Country')

    expect(addressInput).toBeInTheDocument()
    expect(numberInput).toBeInTheDocument()
    expect(cityInput).toBeInTheDocument()
    expect(zipCodeInput).toBeInTheDocument()
    expect(countryInput).toBeInTheDocument()
  })
})
