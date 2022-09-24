import { Suspense } from 'react'
import AppLoading from 'containers/App/AppLoading'
import AppTheme from 'containers/App/AppTheme'
import Routes from 'routes'

const App = () => {
  return (
    <AppTheme>
      <Suspense fallback={<AppLoading />}>
        <Routes />
      </Suspense>
    </AppTheme>
  )
}

export default App
