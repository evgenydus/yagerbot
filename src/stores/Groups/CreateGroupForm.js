import { action, observable } from 'mobx'

export default class CreateGroupForm {
  @observable name = ''
  @observable color = ''
  @observable userIds = []

  constructor(groupsStore, onSuccess) {
    this.groupsStore = groupsStore
  }

  get api() {
    return this.groupsStore.api
  }

  @action
  setName(value) {
    this.name = value
  }
}
