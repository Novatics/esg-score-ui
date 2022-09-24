import { IScore } from 'models/score.model'
import api from './api'

export const get = async (): Promise<IScore> => {
  const { data } = await api.get<IScore>('/score')
  return data
}

export const getCompanyScore = async (companyId): Promise<IScore> => {
  const { data } = await api.get<IScore>(`/score/company/${companyId}`)
  return data
}

export default {
  get,
  getCompanyScore,
}
