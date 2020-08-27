import { action, computed, observable } from 'mobx'
import MessageModel from './MessageModel'

export default class MessagesStore {
  rootStore

  @observable messages = []
  @observable isMessageCreation
  @observable messageToEdit = null

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @computed
  get hasMessages() {
    return Boolean(this.rootStore.totalMessagesCount)
  }

  @action
  addMessage(messageData) {
    this.messages.push(new MessageModel(messageData, this))
  }

  @action
  setMessageToEdit(message) {
    this.messageToEdit = message
  }

  @action
  toggleMessageCreation = () => {
    this.isMessageCreation = !this.isMessageCreation
  }

  @action
  removeMessage(message) {
    this.messages.remove(message)
  }

  @action
  updateMessage(message) {
    const messageIndex = this.messages.findIndex(m => m.id === message.id)
    this.messages.splice(messageIndex, 1, message)
  }
}
