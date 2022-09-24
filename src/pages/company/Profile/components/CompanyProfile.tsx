import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import useSWR, { useSWRConfig } from 'swr'
import Grid from 'components/Grid'
import MenuItem from 'components/MenuItem'
import Select from 'components/Select'
import Stack from 'components/Stack'
import TextBold from 'components/TextBold'
import Typography from 'components/Typography'
import Services from 'services'
import { SWR_COMPANY } from 'services/swr.keys'
import { toastStyle } from 'util/toast'
import UploadContainer from './UploadContainer'

const selectOptions = [
  'Information Technology',
  'Health Care',
  'Financials',
  'Consumer Discretionary',
  'Communication Services',
  'Industrials',
  'Consumer Staples',
  'Energy',
  'Utilities',
  'Real Estate',
  'Materials',
]
const CompanyProfile = () => {
  const { mutate } = useSWRConfig()
  const { data } = useSWR(SWR_COMPANY, () => Services.Company.getCompany())
  const [valueSelected, setValueSelected] = useState('')

  const handleIndustryChange = async e => {
    try {
      setValueSelected(e.target.value)
      await Services.Company.putCompany({ industry: e.target.value })
      toast.success('Industry changed', toastStyle)
      mutate(SWR_COMPANY)
    } catch (error) {
      toast.error(error.response.data.message, toastStyle)
    }
  }
  useEffect(() => {
    if (data?.industry) setValueSelected(data.industry)
  }, [data])

  return (
    <Stack spacing={2}>
      <Typography variant="body1" fontWeight="500" color="primary.dark">
        Company Profile
      </Typography>
      <Grid container gap={3}>
        <Grid item md={2}>
          <UploadContainer />
        </Grid>
        <Grid item>
          <Stack spacing={2}>
            <Stack spacing={1}>
              <Typography variant="body1">Company Name</Typography>
              <TextBold>{data?.name}</TextBold>
            </Stack>
            <Stack spacing={1}>
              <Typography variant="body1">Industry</Typography>
              <Select value={valueSelected} onChange={handleIndustryChange}>
                {selectOptions.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <ToastContainer />
    </Stack>
  )
}

export default CompanyProfile
