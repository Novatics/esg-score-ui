// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import LoadingScore from 'pages/LoadingScore'
import useUserStore from 'stores/user'

describe('Loading Score page', () => {
  it('fetches score', async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/loading-score' }]}>
        <LoadingScore />
      </MemoryRouter>
    )

    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })

  it('Loads score', async () => {
    const { getState } = useUserStore
    getState().setUser({
      email: 'test@email.com',
      phone: '+5512345678',
      email_verified: false,
      name: 'John Doe',
    })
    render(
      <MemoryRouter initialEntries={[{ pathname: '/loading-score' }]}>
        <LoadingScore />
      </MemoryRouter>
    )

    await waitFor(() => screen.getByTestId('score-loaded'), { timeout: 6000 })
    expect(screen.getByTestId('score-loaded')).toBeInTheDocument()
  })
})
