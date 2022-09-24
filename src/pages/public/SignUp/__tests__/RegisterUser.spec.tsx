import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RegisterUser from 'pages/RegisterUser'

const mockedUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}))

describe('RegisterUser Page', () => {
  it('should render register form', async () => {
    const { getByText } = render(<RegisterUser />)

    expect(getByText('Full name')).toBeInTheDocument()
    expect(getByText('Email')).toBeInTheDocument()
    expect(getByText('Phone Number')).toBeInTheDocument()
    expect(getByText('Password')).toBeInTheDocument()
    expect(getByText('Confirm Password')).toBeInTheDocument()
  })

  it('should show validation error message', async () => {
    const { getByTestId } = render(<RegisterUser />)
    const CreateAccountButton = getByTestId('CreateAccountButton')
    const user = userEvent.setup()
    await user.click(CreateAccountButton)
    expect(screen.getByText('Full name is required')).toBeInTheDocument()
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.getByText('Phone is required')).toBeInTheDocument()
    expect(screen.getByText('Password is required')).toBeInTheDocument()
    expect(screen.getByText('Confirm password is required')).toBeInTheDocument()
  })
})
