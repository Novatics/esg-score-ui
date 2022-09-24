import { render } from '@testing-library/react'
import UserForm from '../index'

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}))

describe('SignUp Component', () => {
  it('should render the basic layout', () => {
    const { getByText, getByTestId } = render(<UserForm />)
    const title = getByText('Why is this information important?')
    const nextButton = getByTestId('nextButton')

    expect(title).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()
  })
})
