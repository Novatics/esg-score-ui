import { render, screen, fireEvent } from '@testing-library/react'
import { useField } from 'formik' // package will be auto mocked
import UploadAvatar from '../index'

jest.mock('formik', () => ({
  useField: jest.fn(),
}))
describe('UploadAvatar Component', () => {
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
      name: 'image',
    }
    ;(useField as jest.Mock).mockReturnValue([mockField, mockMeta])

    const { getByTestId } = render(<UploadAvatar name="image" />)
    const avatarImage = getByTestId('avatarImage')
    const uploadInput = getByTestId('fileUpload')
    expect(avatarImage).toBeInTheDocument()
    expect(uploadInput).toBeInTheDocument()
  })
})
