import { StyledScoreValue } from './style'

interface IScoreValueProps {
  children: React.ReactNode
  sx?: React.CSSProperties
}

function ScoreValue({ children, sx }: IScoreValueProps) {
  return <StyledScoreValue sx={sx}>{children}</StyledScoreValue>
}

export default ScoreValue
