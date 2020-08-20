export default class MessageModel {
  messagesStore

  id
  title = ''
  text = ''
  isSent

  constructor({ id, isSent, text, title }, messagesStore) {
    this.messagesStore = messagesStore

    this.id = id
    this.title = title
    this.text = text
    this.isSent = isSent
  }
}
