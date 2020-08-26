import _uniqueId from 'lodash/uniqueId'

export default class MessageModel {
  messagesStore

  id = _uniqueId('message-')
  title = ''
  text = ''
  attachments = []
  isSent

  constructor({ attachments, isSent, text, title }, messagesStore) {
    this.messagesStore = messagesStore

    this.title = title
    this.text = text
    this.attachments = attachments
    this.isSent = isSent
  }
}
