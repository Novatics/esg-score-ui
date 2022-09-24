export enum EUserRole {
  ADMIN = 'admin',
  USER_B2C = 'userB2C',
  EMPLOYEE = 'employee',
}

export type TUserRole = 'admin' | 'userB2C' | 'employee'

export type TCognitoUserAdmin = {
  name: string
  email: string
  dateCreated: string
}
export type TUser = {
  name: string
  phone: string
  email: string
  email_verified: boolean
  companyId: string
  role: TUserRole | ''
}
export type TSignUpForm = {
  fullname: string
  phoneNumber: string
  company?: string
  email: string
  secondaryEmails: Array<string> | null
  gender: string
  birthDate: string
  address: {
    street: string
    number: string
    postalCode: string
    city: string
    country: string
  }
  havePasswordManager: boolean | null
  webDomains: Array<string> | null
  useMFA: boolean | null
  haveResponsePlan: boolean | null
  image: File | null
  top10Apps: Array<string>
  allSocialMediasInPrivate: boolean | null
}
