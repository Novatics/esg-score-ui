import { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { TextField } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify'
import useSWR, { useSWRConfig } from 'swr'
import Button from 'components/Button'
import Stack from 'components/Stack'
import Typography from 'components/Typography'
import Services from 'services'
import { SWR_COMPANY } from 'services/swr.keys'
import { toastStyle } from 'util/toast'
import 'react-toastify/dist/ReactToastify.css'

const CompanyDomains = () => {
  const { mutate } = useSWRConfig()
  const [text, setText] = useState('')
  const [domains, setDomains] = useState([] as string[])
  const { data } = useSWR(SWR_COMPANY, () => Services.Company.getCompany())

  useEffect(() => {
    if (data) setDomains(data.companyDomains)
  }, [data])
  const clearText = () => setText('')
  const deleteDomain = async (deletedDomain: string) => {
    try {
      const newDomains = domains.filter(domain => domain !== deletedDomain)
      await Services.Company.putCompany({ companyDomains: newDomains })
      mutate(SWR_COMPANY)
      toast.success('Domain removed with success', toastStyle)
    } catch (error) {
      toast.error(error.message, toastStyle)
    }
  }
  const addDomain = async () => {
    try {
      const newDomains = [...domains, text]
      await Services.Company.putCompany({ companyDomains: newDomains })

      mutate(SWR_COMPANY)
      toast.success('Domain added with success', toastStyle)
    } catch (error) {
      toast.error(error.message, toastStyle)
    }
    clearText()
  }

  return (
    <Stack spacing={2}>
      <Typography variant="body1" fontWeight="500" color="primary.dark">
        Company Domains
      </Typography>
      <Stack spacing={2}>
        <Stack gap={2} flexDirection="row" alignItems="center">
          <TextField
            variant="outlined"
            size="small"
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <Button
            variant="outlined"
            size="large"
            onClick={() => {
              addDomain()
            }}
          >
            Add
          </Button>
        </Stack>
        {domains.map(domain => {
          return (
            <Stack key={domain} flexDirection="row" gap={1} alignItems="center">
              <Typography variant="subtitle2" fontSize="12">
                {domain}
              </Typography>
              <CloseIcon
                onClick={() => {
                  deleteDomain(domain)
                }}
                sx={{ cursor: 'pointer' }}
                fontSize="small"
              />
            </Stack>
          )
        })}
      </Stack>
      <ToastContainer />
    </Stack>
  )
}

export default CompanyDomains
