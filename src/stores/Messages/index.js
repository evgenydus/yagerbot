import { action, computed, observable } from 'mobx'
import MessageModel from './MessageModel'

export default class MessagesStore {
  rootStore

  @observable messages = []
  @observable isMessageCreation = false
  @observable messageToEdit = null

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  get api() {
    return this.rootStore.api.messages
  }

  @computed
  get hasMessages() {
    return Boolean(this.rootStore.totalMessagesCount)
  }

  @action
  addMessage(messageData) {
    this.messages.push(new MessageModel(this, messageData))
  }

  @action
  load() {
    return this.api.getMessageList().then(messagesData => {
      const messages = messagesData.map(message => new MessageModel(this, message))

      this.setMessages(messages)
    })
  }

  @action
  setMessages(messages) {
    this.messages.replace(messages)
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

    this.api.deleteMessage(message.id)
  }

  @action
  updateMessage(message) {
    const messageIndex = this.messages.findIndex(m => m.id === message.id)
    this.messages.splice(messageIndex, 1, message)
  }
}
