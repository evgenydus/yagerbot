import { action, observable } from 'mobx'

export default class ModalsStore {
  parentStore

  @observable isOpen = false

  constructor(parentStore) {
    this.parentStore = parentStore
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
