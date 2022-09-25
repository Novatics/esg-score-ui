import { Suspense } from 'react'
import AppLoading from 'containers/App/AppLoading'
import AppTheme from 'containers/App/AppTheme'
import Routes from 'routes'
import { EsgScoreProvider } from 'context'

const App = () => {
  return (
    <AppTheme>
      <EsgScoreProvider>
        <Suspense fallback={<AppLoading />}>
          <Routes />
        </Suspense>
      </EsgScoreProvider>
    </AppTheme>
  )
}

export default App
