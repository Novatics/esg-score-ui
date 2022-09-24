import { render, waitFor } from '@testing-library/react'
import AnimatedContainer from '../index'

jest.mock('formik', () => ({
  setFadeOut: jest.fn(),
}))

describe('AnimatedContainer Component', () => {
  it('Renders successfuly ', async () => {
    const { getByTestId } = render(
      <AnimatedContainer delay={0} fadeOut={false} setFadeOut={() => {}}>
        <div>content</div>
      </AnimatedContainer>
    )

    expect(getByTestId('container')).toBeInTheDocument()
  })
})
