import { useState, useEffect } from 'react'
import { useTheme, useMediaQuery } from '@mui/material'
import { useField } from 'formik'
import Grid from 'components/Grid'
import Typography from 'components/Typography'
import defaultTop10Apps from 'util/top10apps'
import { AppOption, AppLabel } from './styles'

type TTopAppsFormProps = {
  name: string
}
const TopAppsForm = ({ name }: TTopAppsFormProps): JSX.Element => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

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
    <Grid maxWidth={600} container rowSpacing={2} columnSpacing={1} sx={{ padding: '0 20px' }}>
      {top10apps.map(app => (
        <Grid
          item
          xs={isSmallScreen ? 6 : 4}
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
  )
}

export default TopAppsForm
