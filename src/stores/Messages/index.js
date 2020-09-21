import { action, observable } from 'mobx'
import MessageModel from './MessageModel'

export default class MessagesStore {
  rootStore

  @observable messages = []
  @observable isMessageCreation = false

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @action
  addMessage(messageData) {
    this.messages.push(new MessageModel(this, messageData))
  }

  @action
  toggleMessageCreation = () => {
    this.isMessageCreation = !this.isMessageCreation
  }

  @action
  removeMessage(message) {
    this.messages.remove(message)
  }
}
