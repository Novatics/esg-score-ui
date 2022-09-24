import { Amplify } from 'aws-amplify'
import ReactDOM from 'react-dom'
import 'global.d.ts'
import App from './App'
import 'reset-css'
import 'common/css/fonts.css'

if (process.env.REACT_APP_MOCK_ENABLE === 'true') {
  /* eslint-disable global-require */
  /* eslint-disable @typescript-eslint/no-var-requires */
  const { worker } = require('./mocks/browser')
  worker.start()
}
Amplify.configure({
  Auth: {
    region: process.env.REACT_APP_COGNITO_REGION,
    userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_COGNITO_APP_CLIENT_ID,
  },
})

ReactDOM.render(<App />, document.getElementById('root'))
