import axios from 'axios'
import { API_URL } from 'common/constants/env'
import { categoryTypes } from 'util/categoryActions'

const api = axios.create({
  baseURL: API_URL,
})

api.defaults.headers.common.Accept = 'application/json'
api.defaults.headers.common['Content-Type'] = 'application/json'
api.defaults.headers.common.credentials = 'include'

const mockScoreResult = {
  [categoryTypes.energy]: 1.2,
  [categoryTypes.transport]: 2.2,
  [categoryTypes.tax]: 7.2,
  [categoryTypes.education]: 5.7,
  [categoryTypes.health]: 4.2,
};

export const getUserScore = async (userDoc: string, setScoreData: Function) => {
  console.log('USER_DOC: ', userDoc)
  if (userDoc.length > 0) { // change to 0
    const response = await api.get('/pokemon')
    console.log('Resposta: ', response);
    if (response) {
      setScoreData(mockScoreResult)
    }
  }
}
