import { action, observable } from 'mobx'

export default class ModalsStore {
  rootStore

  @observable isOpen = false

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @action
  closeModal = () => {
    this.isOpen = false
  }

  @action
  openModal = () => {
    this.isOpen = true
  }
}
