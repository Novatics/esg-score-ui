import { useField } from 'formik'
import { useNavigate } from 'react-router-dom'
import Box from 'components/Box'
import Button from 'components/Button'
import Grid from 'components/Grid'
import MenuItem from 'components/MenuItem'
import Select from 'components/Select'
import Typography from 'components/Typography'
import { CustomTooltip } from './Tooltip'

const SecurityActions = () => {
  const navigate = useNavigate()
  const [, havePasswordManagerMeta, havePasswordManagerHelpers] = useField('havePasswordManager')
  const [, useMFAMeta, useMFAHelpers] = useField('useMFA')
  const [, allSocialMediasInPrivateMeta, allSocialMediasInPrivateHelpers] = useField(
    'allSocialMediasInPrivate'
  )
  const [, haveResponsePlanMeta, haveResponsePlanHelpers] = useField('haveResponsePlan')
  return (
    <Box>
      <Typography fontWeight={500} color="#0056C0">
        Security Actions
      </Typography>
      <Grid container lg={9} spacing={2} display="flex" alignItems="center">
        <Grid item lg={5} display="flex" alignItems="center">
          <Typography>Do you use 2 factor authentication on all your accounts?</Typography>
          <CustomTooltip
            title={
              <Typography color="primary.dark">
                This helps determine if you are elevating your online protection and security.
              </Typography>
            }
          />
        </Grid>
        <Grid item lg={4}>
          <Select
            value={useMFAMeta.value}
            onChange={e => {
              useMFAHelpers.setValue(e.target.value)
            }}
            size="small"
          >
            <MenuItem value="true">Yes</MenuItem>
            <MenuItem value="false">No</MenuItem>
          </Select>
          <Button
            onClick={() => {
              navigate('/referrals')
            }}
            variant="text"
          >
            Go to Referrals
          </Button>
        </Grid>
      </Grid>
      <Grid container lg={9} spacing={2} display="flex" alignItems="center">
        <Grid item lg={5} display="flex" alignItems="center" justifyContent="space-between">
          <Typography>Do you use any password manager?</Typography>
          <CustomTooltip
            title={
              <Typography color="primary.dark">
                This helps to determine if you are using best practices in storing your passwords in
                a digital vault that provides strong encryption protection from cyber criminals.
              </Typography>
            }
          />
        </Grid>
        <Grid item lg={4}>
          <Select
            value={havePasswordManagerMeta.value}
            onChange={e => {
              havePasswordManagerHelpers.setValue(e.target.value)
            }}
            size="small"
          >
            <MenuItem value="true">Yes</MenuItem>
            <MenuItem value="false">No</MenuItem>
          </Select>
          <Button
            onClick={() => {
              navigate('/referrals')
            }}
            variant="text"
          >
            Go to Referrals
          </Button>
        </Grid>
      </Grid>
      <Grid container lg={9} spacing={2} display="flex" alignItems="center">
        <Grid item lg={5} display="flex" alignItems="center">
          <Typography>Do you have a Personal Cyber Incident Response Plan?</Typography>
          <CustomTooltip
            title={
              <Typography color="primary.dark">
                This helps determine if you can quickly and effectively respond to a cyber hack or
                breach.
              </Typography>
            }
          />
        </Grid>
        <Grid item lg={4}>
          <Select
            value={haveResponsePlanMeta.value}
            onChange={e => {
              haveResponsePlanHelpers.setValue(e.target.value)
            }}
            size="small"
          >
            <MenuItem value="true">Yes</MenuItem>
            <MenuItem value="false">No</MenuItem>
          </Select>
          <Button variant="text">Download a Plan</Button>
        </Grid>
      </Grid>
      <Grid container lg={9} spacing={2} display="flex" alignItems="center">
        <Grid item lg={5} display="flex" alignItems="center">
          <Typography>Are all your social media accounts set to private?</Typography>
          <CustomTooltip
            title={
              <Typography color="primary.dark">
                This helps us determine the degree of risk with account type and privacy
                configurations.
              </Typography>
            }
          />
        </Grid>
        <Grid item lg={4}>
          <Select
            value={allSocialMediasInPrivateMeta.value}
            onChange={e => {
              allSocialMediasInPrivateHelpers.setValue(e.target.value)
            }}
            size="small"
          >
            <MenuItem value="true">Yes</MenuItem>
            <MenuItem value="false">No</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SecurityActions
