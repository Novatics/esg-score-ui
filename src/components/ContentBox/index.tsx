import { ReactNode } from 'react'
import { Box } from '@mui/system'

interface IRegisterUserFormProps {
  showVerificationCodeInput: boolean
  children: ReactNode
}

export default function ContentBox({
  showVerificationCodeInput,
  children,
}: IRegisterUserFormProps) {
  return (
    <div>
      {showVerificationCodeInput ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100vw',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {children}
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100vw',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {children}
        </Box>
      )}
    </div>
  )
}
