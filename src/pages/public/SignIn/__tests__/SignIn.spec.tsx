import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SignIn from 'pages/SignIn'

const mockedUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}))
describe('SignIn Page', () => {
  it('should render signIn form', () => {
    const { getByText, getByTestId } = render(<SignIn />)

    const emailInput = getByText('Email')
    const passwordInput = getByText('Password')
    const loginButton = getByTestId('LoginButton')
    const forgotPasswordLink = getByText('Forgot password?')
    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(loginButton).toBeInTheDocument()
    expect(forgotPasswordLink).toBeInTheDocument()
  })

  it('should show validation error message', async () => {
    const { getByTestId } = render(<SignIn />)
    const loginButton = getByTestId('LoginButton')
    const user = userEvent.setup()
    await user.click(loginButton)
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.getByText('Password is required')).toBeInTheDocument()
  })

  it('should submit form if inputs are valid', async () => {
    const { getByTestId, getByRole } = render(<SignIn />)
    const emailInput = getByRole('textbox')
    const passwordInput = getByTestId('passwordInput')
    const loginButton = getByTestId('LoginButton')
    const user = userEvent.setup()
    await user.type(emailInput, 'test@protexxa.com')
    await user.type(passwordInput, 'Ax4fEWs')
    await user.click(loginButton)
    expect(screen.queryByText('Email is required')).not.toBeInTheDocument()
    expect(screen.queryByText('Password is required')).not.toBeInTheDocument()
  })
})
