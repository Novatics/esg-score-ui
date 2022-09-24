export type TCognitoUserInfo = {
  username: string
  attributes: {
    sub: string
    email: string
    'custom:company': string
    email_verified: boolean
    name: string
    phone_number_verified: boolean
    phone_number: string
  }
}
