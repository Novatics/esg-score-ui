/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw'
import { API_URL } from 'common/constants/env'
import mockAuth from './mockAuth'
import mockScore from './mockScore'
import mockUser from './mockUser'

export default [
  // AUTENTICACAO
  rest.get(`${API_URL}/login`, mockAuth.login),
  rest.post(`${API_URL}/user`, mockUser.user),
  rest.post(`${API_URL}/register`, mockAuth.register),
  rest.get(`${API_URL}/score/:email`, mockScore.score),
]
