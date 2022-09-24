import { AxiosResponse } from 'axios'
import { IRegister } from 'models/score.model'
import { TSignUpForm } from 'models/user.model'
import api from './api'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const register = (data: TSignUpForm): Promise<AxiosResponse> => {
  const formData = new FormData()
  formData.append('fullname', data.fullname)
  if (data.company) formData.append('company', data.company)
  formData.append('phoneNumber', data.phoneNumber)
  formData.append('email', data.email)
  formData.append('secondaryEmails', JSON.stringify(data.secondaryEmails))
  formData.append('gender', data.gender)
  formData.append('birthDate', data.birthDate)
  formData.append('address[street]', data.address.street)
  formData.append('address[number]', data.address.number)
  formData.append('address[postalCode]', data.address.postalCode)
  formData.append('address[city]', data.address.city)
  formData.append('address[country]', data.address.country)
  formData.append('havePasswordManager', String(data.havePasswordManager))
  formData.append('webDomains', JSON.stringify(data.webDomains))
  formData.append('useMFA', String(data.useMFA))
  formData.append('haveResponsePlan', String(data.haveResponsePlan))
  formData.append('top10Apps', JSON.stringify(data.top10Apps))
  formData.append('allSocialMediasInPrivate', String(data.allSocialMediasInPrivate))
  formData.append('image', data.image as Blob)

  return api.post('/register', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export const updateSecondaryEmails = (secondaryEmails: Array<string>): Promise<AxiosResponse> => {
  const formData = new FormData()
  formData.append('secondaryEmails', JSON.stringify(secondaryEmails))
  return api.put('/register', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export const updateRegister = (data: TSignUpForm): Promise<AxiosResponse> => {
  const formData = new FormData()
  formData.append('fullname', data.fullname)
  formData.append('gender', data.gender)
  formData.append('birthDate', data.birthDate)
  formData.append('address[street]', data.address.street)
  formData.append('address[number]', data.address.number)
  formData.append('address[postalCode]', data.address.postalCode)
  formData.append('address[city]', data.address.city)
  formData.append('address[country]', data.address.country)
  formData.append('havePasswordManager', String(data.havePasswordManager))
  formData.append('webDomains', JSON.stringify(data.webDomains))
  formData.append('useMFA', String(data.useMFA))
  formData.append('haveResponsePlan', String(data.haveResponsePlan))
  formData.append('top10Apps', JSON.stringify(data.top10Apps))
  formData.append('allSocialMediasInPrivate', String(data.allSocialMediasInPrivate))
  formData.append('image', data.image as Blob)

  return api.put('/register', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export const getRegister = async (): Promise<IRegister> => {
  const { data } = await api.get('/register')
  return data
}
export const isAdmin = (email: string): Promise<AxiosResponse> => {
  return api.post('/auth/verify-email', { email })
}

export const deleteRegister = (): Promise<AxiosResponse> => {
  return api.delete('/register')
}

interface ICheckDomainResponse {
  domainExists: boolean
}
export const isDomainBeenUsed = async (domain: string): Promise<ICheckDomainResponse> => {
  const { data } = await api.get(`/company/checkDomain/${domain}`)
  return data
}
export default {
  getRegister,
  register,
  deleteRegister,
  updateRegister,
  isAdmin,
  isDomainBeenUsed,
  updateSecondaryEmails,
}
