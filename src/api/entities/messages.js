import makeRequest from '../base'

const url = '/messages/'

const messagesApi = {
  createMessage(payload) {
    return makeRequest('post', url, payload)
  },

  deleteMessage(id) {
    return makeRequest('delete', `${url}${id}/`)
  },

  getMessage(id) {
    return makeRequest('get', `${url}${id}/`)
  },

  getMessageList() {
    return makeRequest('get', url)
  },

  putAttachments(id, payload) {
    return makeRequest('put', `${url}${id}/`, payload)
  },

  updateMessage(id, payload) {
    return makeRequest('patch', `${url}${id}/`, payload)
  },
}

export default messagesApi
