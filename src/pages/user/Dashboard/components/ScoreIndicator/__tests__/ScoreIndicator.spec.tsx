import { render, screen } from '@testing-library/react'
import ScoreIndicator from 'pages/Dashboard/ScoreIndicator'

describe('Score page', () => {
  it('displays score indicator correctly', async () => {
    render(<ScoreIndicator value={500} />)

    expect(await screen.findByText('500')).toBeInTheDocument()
  })
})
