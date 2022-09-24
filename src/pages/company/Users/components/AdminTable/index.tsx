import { Typography } from '@mui/material'
import { format } from 'date-fns'
import { ToastContainer, toast } from 'react-toastify'
import useSWR, { useSWRConfig } from 'swr'
import IconButton from 'components/IconButton'
import Paper from 'components/Paper'
import Skeleton from 'components/Skeleton'
import Table, { TableContainer, TableBody, TableCell, TableHead, TableRow } from 'components/Table'
import Services from 'services'
import { SWR_COMPANY_ADMINS } from 'services/swr.keys'
import { toastStyle } from 'util/toast'
import { ReactComponent as TrashIcon } from './Icons/Trash.svg'

const AdminTable = () => {
  const { mutate } = useSWRConfig()
  const { data } = useSWR(SWR_COMPANY_ADMINS, () => Services.Company.getCompanyAdmins())

  const handleDeleteAdmin = async (email: string) => {
    try {
      await Services.Company.deleteAdmin(email)
      toast.success(`Admin ${email} deleted`, toastStyle)
      mutate(SWR_COMPANY_ADMINS)
    } catch (error) {
      toast.error(error.response.data.message, toastStyle)
    }
  }
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableCell>Name</TableCell>
          <TableCell>E-mail</TableCell>
          <TableCell>Account Created</TableCell>
          <TableCell>Remove</TableCell>
        </TableHead>
        {data ? (
          <TableBody>
            {data?.map(row => (
              <TableRow key={row.email} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{row.name ? row.name : '-'}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>
                  {row.dateCreated ? (
                    format(new Date(row.dateCreated), 'dd/MM/yyy')
                  ) : (
                    <Typography fontStyle="italic">Invited</Typography>
                  )}
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => {
                      handleDeleteAdmin(row.email)
                    }}
                  >
                    <TrashIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <TableBody>
            {[...Array(5)].map(key => (
              <TableRow key={key}>
                <TableCell>
                  <Skeleton variant="rectangular" width="100px" height="30px" />
                </TableCell>
                <TableCell>
                  <Skeleton variant="rectangular" width="100px" height="30px" />
                </TableCell>
                <TableCell>
                  <Skeleton variant="rectangular" width="100px" height="30px" />
                </TableCell>
                <TableCell>
                  <Skeleton variant="rectangular" width="100px" height="30px" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
      <ToastContainer />
    </TableContainer>
  )
}
export default AdminTable
