import makeRequest from '../base'

const url = '/members/'

const usersApi = {
  getUserList() {
    return makeRequest('get', url)
  },
}

export default usersApi
