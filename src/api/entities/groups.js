import makeRequest from '../base'

const url = '/teams/'

const groupsApi = {
  createGroup(payload) {
    return makeRequest('post', url, payload)
  },

  deleteGroup(id) {
    return makeRequest('delete', `${url}/${id}`)
  },

  getGroup(id) {
    return makeRequest('get', `${url}/${id}`)
  },

  getGroupList() {
    return makeRequest('get', url)
  },

  updateGroup(id, payload) {
    return makeRequest('patch', `${url}/${id}`, payload)
  },
}

export default groupsApi
