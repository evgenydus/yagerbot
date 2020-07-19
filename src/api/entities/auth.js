import Cookies from 'js-cookie'
import makeRequest from '../base'

const authApi = {
  logIn(payload) {
    return makeRequest('post', '/auth/', payload).then(({ token }) => {
      Cookies.set('authToken', token)
    })
  },
}

export default authApi
