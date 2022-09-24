// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Dashboard from '../index'

const state = {
  score: 500,
  fixList: [
    ['Client advised on Fix List to set all social accounts to Private.'],
    ['Client advised to create Personal Cyber Incident Response Plan.'],

    ['Client advised to change device passwords regularly and sync with password manager.'],

    [
      'Client advised to take action which could include resetting passwords, closing accounts, takedown/removal service.',
    ],
  ],
}

describe('Score page', () => {
  it('displays score correctly', async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/dashboard', state }]}>
        <Dashboard />
      </MemoryRouter>
    )

    expect(await screen.findByText('Protexxa Score')).toBeInTheDocument()
    expect(await screen.findByText('What the score means?')).toBeInTheDocument()
  })
})
