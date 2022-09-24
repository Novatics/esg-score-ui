import invariant from 'tiny-invariant'
import { GetState, SetState } from 'zustand'
import { IScore } from 'models/score.model'
import Services from 'services'
import { TGlobalStore } from '..'

export interface IUserScoreState {
  userScore: IScore | null
  fetchUserScore: () => Promise<void>
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const userScoreSlice = (
  set: SetState<TGlobalStore>,
  get: GetState<TGlobalStore>
): IUserScoreState => ({
  userScore: null,
  fetchUserScore: async () => {
    try {
      const { user } = get()
      invariant(user, 'Expected value to be a user')
      const userScore = await Services.Score.get()
      set(state => ({ ...state, userScore }))
    } catch {
      set(state => ({ ...state, userScore: null }))
    }
  },
})

export default userScoreSlice
