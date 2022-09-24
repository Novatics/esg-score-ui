import create, { GetState, SetState } from 'zustand'
import { devtools } from 'zustand/middleware'
import userScoreSlice, { IUserScoreState } from './slices/score'
import userSlice, { IUserState } from './slices/user'

export type TGlobalStore = IUserState &
  IUserScoreState & {
    resetStore: () => void
  }

const store = (set: SetState<TGlobalStore>, get: GetState<TGlobalStore>): TGlobalStore => ({
  ...userSlice(set, get),
  ...userScoreSlice(set, get),
  resetStore: () => set({}, true),
})

const globalStore = create<TGlobalStore>(devtools(store))

export default globalStore
