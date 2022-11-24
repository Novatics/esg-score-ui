/* eslint-disable */
import { useNavigate } from 'react-router-dom'
import Typography from 'components/Typography';
import Button from 'components/Button'

import { StyledBox, StyledContainer } from './styles';

export default function Header() {
  const navigate = useNavigate()

  return (
    <StyledBox>
      <StyledContainer>
        <Typography maxWidth={600} color="primary.dark" variant="h4">
          Financial ESG Score - Preview 1
        </Typography>
        <Button
          variant="contained"
          sx={{
            height: 50,
            textTransform: 'none',
          }}
          onClick={() => navigate('/creditform')}
        >
          Calcule seu Score
        </Button>
      </StyledContainer>
    </StyledBox>
  )
}
