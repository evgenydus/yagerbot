import _uniqueId from 'lodash/uniqueId'

export default class AttachmentModel {
  messagesStore

  id
  name = ''

  constructor(messagesStore) {
    this.messagesStore = messagesStore
    this.id = _uniqueId()
  }
}
