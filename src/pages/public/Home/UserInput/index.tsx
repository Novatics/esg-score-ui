/* eslint-disable max-lines */
import { useState } from 'react';
import { StyledContainer, StyledInput } from './styles'
import Box from 'components/Box';
import Typography from 'components/Typography';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';

export default function UserInput() {
  const [userInput, setUserInput ] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log('submit score...');
    navigate('/loadingscore');
  }; 

  return (
    <StyledContainer>
      <Box sx={{ marginBottom: '20px' }}>
        <Typography maxWidth={600} color="primary.dark" variant={'h4'}>
          Calcule seu ESG Score
        </Typography>
      </Box>
      <Box>
        <StyledInput
          id="outlined-basic"
          label="CPF"
          variant="outlined"
          size={'medium'}
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
        />
        <Button
          sx={{
            height: '56px',
            width: '100px',
            borderRadius: '0 3px'
          }}
          variant="contained"
          onClick={handleSubmit}
        >
          Calcule
        </Button>
      </Box>
    </StyledContainer>
  )
}
