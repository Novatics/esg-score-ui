import { useState } from 'react'
import invariant from 'tiny-invariant'
import Button from 'components/Button'
import Stack from 'components/Stack'
import Typography from 'components/Typography'
import globalStore from 'store'
import ConfirmationDeleteModal from './ConfirmationDeleteModal'

const DeleteMyProfile = () => {
  const { user } = globalStore()
  const [isModalOpened, setIsModalOpened] = useState(false)
  invariant(user, 'Expected value to be a user')

  return (
    <Stack spacing={2}>
      <Typography variant="body1" fontWeight="500" color="primary.dark">
        Delete my Profile
      </Typography>
      <Typography variant="body1" color="neutral.low.medium">
        You will receive an email to confirm your decision. This will not end your subscription or
        payments and you will continue to be charged. You can cancel your subscription, or switch
        payment methods to keep the team active.
      </Typography>

      <Typography variant="body1" color="neutral.low.medium">
        This can’t be reversed.
      </Typography>
      <Stack width={150}>
        <Button
          onClick={() => {
            setIsModalOpened(true)
          }}
          variant="outlined"
          color="error"
        >
          Delete my Profile
        </Button>
      </Stack>
      <ConfirmationDeleteModal setIsModalOpened={setIsModalOpened} isModalOpened={isModalOpened} />
    </Stack>
  )
}

export default DeleteMyProfile
