import _uniqueId from 'lodash/uniqueId'

export default class AttachmentModel {
  messagesStore

  id = _uniqueId()
  name = ''

  constructor(messagesStore) {
    this.messagesStore = messagesStore
  }
}
