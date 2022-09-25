/* eslint-disable  */
import { Formik, Form } from 'formik'
import { useNavigate } from 'react-router-dom'
import Box from 'components/Box'
import Button from 'components/Button'
import Typography from 'components/Typography'
import InputField from 'components/InputField'

export default function CreditForm() {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        background: 'linear-gradient(44.54deg, #0072ff -31.61%, #00f896 132.15%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '30%',
          height: '300px',
          padding: 4,
          boxShadow: 5,
          borderRadius: 1,
          backgroundColor: 'primary.contrastText',
        }}
      >
        <Typography mb={1} textAlign="center" color="primary.dark" variant="h5">
          Calcule seu ESG score
        </Typography>
        <Formik
          initialValues={{ userDoc: '' }}
          onSubmit={(values) => {
            console.log('submit', values)
            navigate('/loadingscore')
          }}
        >
          {() => (
            <Form>
              <InputField label="CPF" name="userDoc" size="medium" />
              <Button
                  variant="contained"
                  data-testid="LoginButton"
                  type="submit"
                  sx={{
                    width: '100%',
                    py: 1.2,
                    mb: 1.5,
                  }}
                >
                  Calcule seu Score
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  )
}
