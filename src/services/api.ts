import axios from 'axios'
import { API_URL } from 'common/constants/env'
import { setupInterceptorsTo } from './interceptors'

const api = axios.create({
  baseURL: API_URL,
})

setupInterceptorsTo(api)

api.defaults.headers.common.Accept = 'application/json'
api.defaults.headers.common['Content-Type'] = 'application/json'
api.defaults.headers.common.credentials = 'include'

export default api
