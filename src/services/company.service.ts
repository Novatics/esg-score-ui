import { AxiosResponse } from 'axios'
import { ICompanyStats, ICompanyData } from 'models/company.model'
import { TCognitoUserAdmin } from 'models/user.model'
import api from './api'

export const isTokenValid = (token: string): Promise<AxiosResponse> => {
  return api.get(`/invites/isValid/${token}`)
}

export const verifyUserCompanySignUp = (email: string, company: string): Promise<AxiosResponse> => {
  return api.post('/invites/validate-invite', { email, company })
}

export const getCompany = async (): Promise<ICompanyData> => {
  const { data } = await api.get<ICompanyData>('company')
  return data
}

export const getCompanyAdmins = async (): Promise<TCognitoUserAdmin[]> => {
  const { data } = await api.get<TCognitoUserAdmin[]>('user/company')
  return data
}
export const putCompany = async (changedData: Partial<ICompanyData>): Promise<ICompanyData> => {
  const { data } = await api.put<ICompanyData>('company', changedData)
  return data
}
export const getCompanyStats = async (): Promise<ICompanyStats> => {
  const { data } = await api.get<ICompanyStats>('company/stats')
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
