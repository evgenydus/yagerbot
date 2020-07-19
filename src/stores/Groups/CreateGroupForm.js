import { action, computed, observable } from 'mobx'

export default class CreateGroupForm {
  @observable name = ''
  @observable color = ''
  @observable userIds = []

  constructor(groupsStore) {
    this.groupsStore = groupsStore
  }

  get api() {
    return this.groupsStore.api
  }

  @computed
  get usersOptions() {
    return this.groupsStore.rootStore.usersStore.users.map(x => ({ label: x.label, value: x.id }))
  }

  @action
  setName(value) {
    this.name = value
  }
}
