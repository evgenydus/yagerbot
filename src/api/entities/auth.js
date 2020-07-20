import makeRequest from '../base'

const authApi = {
  logIn(payload) {
    return makeRequest('post', '/auth/', payload)
  },
}

export default authApi
