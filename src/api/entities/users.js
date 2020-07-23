import makeRequest from '../base'

const url = '/members/'

const usersApi = {
  // Implemented for development purpose
  createUser(payload) {
    return makeRequest('post', url, payload)
  },
  getUserList() {
    return makeRequest('get', url)
  },
}

export default usersApi
