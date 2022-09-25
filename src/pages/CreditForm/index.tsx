/* eslint-disable  */
import { Formik, Form } from 'formik'
import { useNavigate } from 'react-router-dom'
import Box from 'components/Box'
import Button from 'components/Button'
import Typography from 'components/Typography'
import InputField from 'components/InputField'

const TYPES = {
  CPF: "999.999.999-999",
  CNPJ: "99.999.999/9999-99",
};

const clear = (value) => value && value.replace(/[^0-9]/g, "");
const getMask = (value) => value.length > 11 ? "CNPJ" : "CPF";

const applyMask = (value, mask) => {
  let result = "";

  let inc = 0;
  Array.from(value).forEach((letter, index) => {
    if (!mask[index + inc].match(/[0-9]/)) {
      result += mask[index + inc];
      inc++;
    }
    result += letter;
  });
  return result;
}

export default function CreditForm() {
  const navigate = useNavigate()

  const applyDocMask = (value) => {
    if (value.userDoc === '') {
      return ''
    }
    if (value && value.length <= 14) {
      const mask = getMask(value);
      return applyMask(value, TYPES[mask])
    }

    return value
  }

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
          {({ values, setValues }) => (
            <Form>
              <InputField
                label="Digite seu CPF"
                name="userDoc"
                size="medium"
                inputValue={applyDocMask(values)}
                handleChange={(e) => {
                  let value = clear(e.target.value)
                  setValues(value)
                }}
              />
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
