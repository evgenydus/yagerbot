import axios from 'axios'
import Cookies from 'js-cookie'

const proxyURL = 'https://cors-anywhere.herokuapp.com/'
const baseURL = `${proxyURL}https://ygbot.sogood.by/api/v1`

const makeRequest = (method, url, payload = {}) => {
  const options = {
    baseURL,
    data: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
    method,
    url,
  }

  const authToken = Cookies.get('authToken')

  if (authToken) {
    options.headers.Authorization = `Token ${authToken}`
  }

  return axios(options).then(({ data }) => data)
}

export default makeRequest
