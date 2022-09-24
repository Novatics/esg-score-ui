/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable complexity */
import { Auth } from 'aws-amplify'
import { GetState, SetState } from 'zustand'
import { TCognitoUserInfo } from 'models/cognito.model'
import { TUser } from 'models/user.model'
import Services from 'services'
import { get as getRole } from 'util/role'
import { TGlobalStore } from '..'

export interface IUserState {
  user: TUser | undefined
  loadingUser: boolean
  isLogged: () => Promise<boolean>
  setUser: (user: TUser) => void
  getUser: () => Promise<void>
  logout: () => void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const userSlice = (set: SetState<TGlobalStore>, get: GetState<TGlobalStore>): IUserState => ({
  user: undefined,
  loadingUser: true,
  setUser: user => set(state => ({ ...state, user })),
  getUser: async () => {
    set(state => ({ ...state, loadingUser: true }))

    const cognitoUser = (await Auth.currentUserInfo()) as TCognitoUserInfo
    if (!Object.keys(cognitoUser || {}).length) {
      set(state => ({ ...state, user: undefined, loadingUser: false }))
      return
    }

    const { data } = await Services.Auth.isAdmin(cognitoUser.attributes.email)
    const companyId = cognitoUser.attributes['custom:company']

    const role = getRole({ isAdmin: data.isAdmin, companyId })

    const user: TUser = {
      name: cognitoUser.attributes.name,
      phone: cognitoUser.attributes.phone_number,
      email: cognitoUser.attributes.email,
      email_verified: cognitoUser.attributes.email_verified,
      companyId: cognitoUser.attributes['custom:company'],
      role,
    }

    set(state => ({ ...state, user, loadingUser: false }))
  },
  isLogged: async () => {
    const cognitoUser = (await Auth.currentUserInfo()) as TCognitoUserInfo
    return !!cognitoUser
  },
  logout: async () => {
    set(
      state => ({
        ...state,
        user: undefined,
        loadingUser: false,
      }),
      true
    )
    await Auth.signOut()
  },
})

export default userSlice
