import { Auth } from 'aws-amplify'
import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const onRequest = async (
  config: AxiosRequestConfig,
  activeBearer = true
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<AxiosRequestConfig<any>> => {
  let token = ''
  try {
    token = (await Auth.currentSession()).getAccessToken().getJwtToken()
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }

  if (token) {
    return {
      ...config,
      headers: {
        authorization: activeBearer ? `Bearer ${token}` : token,
      },
    }
  }

  return config
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error)
}

const onResponse = (response: AxiosResponse): AxiosResponse => response

const onResponseError = (error: AxiosError): Promise<AxiosError> => Promise.reject(error)

export function setupInterceptorsTo(
  axiosInstance: AxiosInstance,
  activeBearer?: boolean
): AxiosInstance {
  axiosInstance.interceptors.request.use(config => onRequest(config, activeBearer), onRequestError)
  axiosInstance.interceptors.response.use(onResponse, onResponseError)
  return axiosInstance
}
