import axios from 'axios'
import { API_URL } from 'common/constants/env'
import { categoryTypes } from 'util/categoryActions'

const api = axios.create({
  baseURL: API_URL,
})

api.defaults.headers.common.Accept = 'application/json'
api.defaults.headers.common['Content-Type'] = 'application/json'
api.defaults.headers.common.credentials = 'include'
api.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

const TYPES = {
  CPF: "999.999.999-999",
  CNPJ: "99.999.999/9999-99",
};

const applyMask = (value, mask = TYPES.CPF) => {
  if (value.length !== 11) return value;
  let result = "";

  let inc = 0;
  Array.from(value).forEach((letter, index) => {
    if (!mask[index + inc].match(/[0-9]/)) {
      result += mask[index + inc];
      inc++;
    }
    result += letter;
  });
  return result;
}

export const getUserScore = async (userDoc: string, setScoreData: Function) => {
  console.log('USER_DOC: ', applyMask(userDoc))
  if (userDoc.length > 0) {
    const response = await api.get(`/scores/${applyMask(userDoc)}`)
    if (response) {
      const responseData = response.data
      const data = {
        ...responseData,
        [categoryTypes.tax]: 7.2,
        [categoryTypes.education]: 5.7,
        [categoryTypes.health]: 4.2,
      }
      setScoreData(data)
    }
  }
}
