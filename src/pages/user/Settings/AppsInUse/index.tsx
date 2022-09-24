import { useState, useEffect } from 'react'
import { useField } from 'formik'
import Box from 'components/Box'
import Grid from 'components/Grid'
import Typography from 'components/Typography'
import defaultTop10Apps from 'util/top10apps'
import { AppOption, AppLabel } from './styles'

type TTopAppsFormProps = {
  name: string
}
const AppsInUse = ({ name }: TTopAppsFormProps): JSX.Element => {
  const [field, , helpers] = useField(name)
  const [top10apps, setTop10apps] = useState(defaultTop10Apps)
  const handleChangeApps = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedArray = top10apps.map(app =>
      app.value === e.target.value ? { ...app, checked: !app.checked } : app
    )
    setTop10apps(updatedArray)
    helpers.setValue(updatedArray.filter(app => app.checked === true).map(app => app.value))
  }
  useEffect(() => {
    const selectedApps = field.value
    let tempArray = top10apps
    selectedApps.forEach(selectedApp => {
      tempArray = tempArray.map(app =>
        app.value === selectedApp ? { ...app, checked: true } : app
      )
    })
    setTop10apps(tempArray)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box>
      <Typography fontWeight={500} mb={2} color="#0056C0">
        Apps in Use
      </Typography>
      <Grid container spacing={1}>
        {top10apps.map(app => (
          <Grid
            item
            xl={2.4}
            md={4}
            key={app.value}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <AppOption>
              <input
                onChange={handleChangeApps}
                disabled={false}
                id={`checkbox${app.value}`}
                type="checkbox"
                checked={app.checked}
                value={app.value}
                name="topApps"
              />
              <AppLabel htmlFor={`checkbox${app.value}`}>
                {app.checked ? app.negativeIcon : app.icon}
                <Typography sx={{ ml: 1 }} variant="subtitle2">
                  {app.label}
                </Typography>
              </AppLabel>
            </AppOption>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default AppsInUse
