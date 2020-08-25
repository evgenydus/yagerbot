import { action, observable } from 'mobx'
import MessageModel from './MessageModel'

export default class MessagesStore {
  rootStore

  @observable messages = []
  @observable isMessageCreation

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @action
  addMessage(messageData) {
    this.messages.push(new MessageModel(messageData, this))
  }

  @action
  toggleMessageCreation = () => {
    this.isMessageCreation = !this.isMessageCreation
  }

  @action
  removeMessage(id) {
    const newMessages = this.messages.filter(message => message.id !== id)
    this.messages.replace(newMessages)
  }
}
