import makeRequest from '../base'

const url = '/teams/'

const groupsApi = {
  getGroupList() {
    return makeRequest('get', url)
  },
}

export default groupsApi
