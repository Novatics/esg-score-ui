import { useState, useEffect, useCallback } from 'react'
import Box from 'components/Box'
import Button from 'components/Button'
import CopyTextInput from 'components/CopyTextInput'
import Modal from 'components/Modal'
import Typography from 'components/Typography'
import Services from 'services'

interface IInviteUsersModal {
  isModalOpened: boolean
  setIsModalOpened: (boolean) => void
}
const InviteUsersModal = ({ isModalOpened, setIsModalOpened }: IInviteUsersModal) => {
  const [inviteLink, setInviteLink] = useState('')

  const fetchInviteLink = useCallback(async () => {
    const { invite } = await Services.Company.getCompany()
    setInviteLink(invite)
  }, [])

  useEffect(() => {
    fetchInviteLink()
  }, [fetchInviteLink])
  return (
    <Modal
      open={isModalOpened}
      onClose={() => {
        setIsModalOpened(false)
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          px: 5,
          py: 4,
          minWidth: 'fit-content',
          borderRadius: 1,
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'primary.contrastText',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography mb={3} variant="h6" color="primary.dark">
          Invite Users
        </Typography>
        <CopyTextInput value={inviteLink} />
        <Typography>
          Add users by sending them this link so they can create their account
        </Typography>
        <Button
          sx={{ mt: 3 }}
          variant="contained"
          onClick={() => {
            setIsModalOpened(false)
          }}
        >
          Ok
        </Button>
      </Box>
    </Modal>
  )
}

export default InviteUsersModal
