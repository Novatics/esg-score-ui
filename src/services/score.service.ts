import api from './api'

export const get = async (): Promise<any> => {
  const { data } = await api.get<any>('/score')
  return data
}

export const getCompanyScore = async (companyId): Promise<any> => {
  const { data } = await api.get<any>(`/score/company/${companyId}`)
  return data
}

export default {
  get,
  getCompanyScore,
}
