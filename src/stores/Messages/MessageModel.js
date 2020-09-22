import { action, computed, observable } from 'mobx'

export default class MessageModel {
  messagesStore

  id
  title = ''
  text = ''
  @observable attachments = []

  constructor(messagesStore, message) {
    this.messagesStore = messagesStore
    this.setMessageData(message)
  }

  @computed
  get isActive() {
    return this.messagesStore.messageToEdit?.id === this.id
  }

  @computed
  get isEditInProgress() {
    return Boolean(this.messagesStore.messageToEdit)
  }

  @action
  setMessageData({ id, text, title }) {
    this.id = id
    this.title = title
    this.text = text
  }

  destroy = () => {
    this.messagesStore.removeMessage(this)
  }

  edit = () => {
    this.messagesStore.setMessageToEdit(this)
  }
}
