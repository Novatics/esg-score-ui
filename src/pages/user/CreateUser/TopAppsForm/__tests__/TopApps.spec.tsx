import { render } from '@testing-library/react'
import { useField } from 'formik'
import TopApps from '../index'

jest.mock('formik', () => ({
  useField: jest.fn(),
}))
describe('TopAppsForm Component', () => {
  it('should render the basic layout', () => {
    const mockMeta = {
      touched: false,
      error: '',
      initialError: '',
      initialTouched: false,
      initialValue: '',
      value: [],
    }
    const mockField = {
      value: [],
      checked: false,
      onChange: jest.fn(),
      onBlur: jest.fn(),
      multiple: undefined,
      name: 'top10Apps',
    }

    const mockHelper = {
      setValue: jest.fn(),
    }
    ;(useField as jest.Mock).mockReturnValue([mockField, mockMeta, mockHelper])

    const { getByTestId } = render(<TopApps name="top10Apps" />)
    // const phoneInput = getByTestId('phone')
    // const countryCodeInput = getByTestId('countryCode')

    // expect(phoneInput).toBeInTheDocument()
    // expect(countryCodeInput).toBeInTheDocument()
  })
})
