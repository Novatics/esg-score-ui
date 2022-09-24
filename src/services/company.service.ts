import { AxiosResponse } from 'axios'
import api from './api'

export const isTokenValid = (token: string): Promise<AxiosResponse> => {
  return api.get(`/invites/isValid/${token}`)
}

export const verifyUserCompanySignUp = (email: string, company: string): Promise<AxiosResponse> => {
  return api.post('/invites/validate-invite', { email, company })
}

export const getCompany = async (): Promise<any> => {
  const { data } = await api.get<any>('company')
  return data
}

export const getCompanyAdmins = async (): Promise<any[]> => {
  const { data } = await api.get<any>('user/company')
  return data
}
export const putCompany = async (changedData: Partial<any>): Promise<any> => {
  const { data } = await api.put<any>('company', changedData)
  return data
}
export const getCompanyStats = async (): Promise<any> => {
  const { data } = await api.get<any>('company/stats')
  return data
}

export const deleteAdmin = async (email: string): Promise<AxiosResponse> => {
  const { data } = await api.delete(`user/${email}`)
  return data
}

export default {
  isTokenValid,
  deleteAdmin,
  getCompanyAdmins,
  verifyUserCompanySignUp,
  getCompany,
  putCompany,
  getCompanyStats,
}
