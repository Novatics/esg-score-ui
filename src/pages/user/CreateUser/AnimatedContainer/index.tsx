import { useEffect, useState, ReactNode, useCallback } from 'react'
import { Container } from './styles'

type TAnimatedContainerProps = {
  children: ReactNode
  fadeOut: boolean
  delay: number
  setFadeOut: (value: boolean) => void
}
const AnimatedContainer = ({ children, fadeOut, setFadeOut, delay }: TAnimatedContainerProps) => {
  const [animateFadeOut, setAnimateFadeOut] = useState(false)

  const handleFadeOut = useCallback(() => {
    setAnimateFadeOut(true)
    setFadeOut(false)
  }, [setFadeOut])

  useEffect(() => {
    if (!fadeOut) return
    setTimeout(() => handleFadeOut(), delay)
  }, [fadeOut, delay, handleFadeOut])

  return (
    <Container data-testid="container" fadeIn fadeOut={animateFadeOut}>
      {children}
    </Container>
  )
}

export default AnimatedContainer
