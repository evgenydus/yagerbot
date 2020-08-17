import { action, observable } from 'mobx'

export default class MessagesStore {
  rootStore

  @observable rawData = []
  @observable messages = []
  @observable isMessageCreation

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @action
  toggleMessageCreation = () => {
    this.isMessageCreation = !this.isMessageCreation
  }
}
