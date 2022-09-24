import DeleteIcon from '@mui/icons-material/Delete'
import Button from 'components/Button'

function ButtonRemove() {
  return (
    <Button variant="contained" startIcon={<DeleteIcon />} disabled>
      Remove selected
    </Button>
  )
}

export default ButtonRemove
