import Typography from 'components/Typography';
import Box from 'components/Box';
import { StyledBox, StyledContainer } from './styles';

export default function Header() {
  return (
    <StyledBox>
      <StyledContainer>
        <Box>
          <Typography maxWidth={600} color="primary.dark" variant={'h4'}>
            ESG SCORE
          </Typography>
        </Box>
      </StyledContainer>
    </StyledBox>
  )
}
