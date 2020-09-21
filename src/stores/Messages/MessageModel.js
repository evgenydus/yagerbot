import _uniqueId from 'lodash/uniqueId'

export default class MessageModel {
  messagesStore

  id = _uniqueId('message-')
  title = ''
  text = ''
  attachments = []
  isSent

  constructor(messagesStore, { attachments, isSent, text, title }) {
    this.messagesStore = messagesStore

    this.title = title
    this.text = text
    this.attachments = attachments
    this.isSent = isSent
  }

  destroy = () => {
    this.messagesStore.removeMessage(this)
  }
}
