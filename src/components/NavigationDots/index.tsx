/* eslint-disable react/jsx-key */
import { DotsContainer, Dot } from './styles'

type TNavigationDots = {
  amount: number
  activeStep: number
  handleSelect: (index: number) => void
}

export default function NavigationDots({ amount, activeStep, handleSelect }: TNavigationDots) {
  return (
    <DotsContainer>
      {[...Array(amount)].map((item, index) => (
        <Dot
          // eslint-disable-next-line react/no-array-index-key
          key={new Date().getTime() + index}
          selected={activeStep === index}
          onClick={() => handleSelect(index)}
        />
      ))}
    </DotsContainer>
  )
}
