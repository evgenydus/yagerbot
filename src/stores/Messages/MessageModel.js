export default class MessageModel {
  messagesStore

  id
  title = ''
  text = ''
  attachments = []
  isSent

  constructor({ attachments, id, isSent, text, title }, messagesStore) {
    this.messagesStore = messagesStore

    this.id = id
    this.title = title
    this.text = text
    this.attachments = attachments
    this.isSent = isSent
  }
}
