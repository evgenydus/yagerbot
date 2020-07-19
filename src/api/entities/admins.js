import makeRequest from '../base'

const url = '/admins/'

const adminApi = {
  createAdmin(payload) {
    return makeRequest('post', url, payload)
  },

  deleteAdmin(id) {
    return makeRequest('delete', `${url}${id}/`)
  },

  getAdmin(id) {
    return makeRequest('get', `${url}${id}/`)
  },

  getAdminList() {
    return makeRequest('get', url)
  },

  updateAdmin(id, payload) {
    return makeRequest('patch', `${url}${id}/`, payload)
  },
}

export default adminApi
