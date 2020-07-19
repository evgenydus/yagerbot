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
  get usersAsOptions() {
    return this.groupsStore.rootStore.usersStore.users.map(user => ({
      label: user.label,
      value: user.id,
    }))
  }

  @action
  setUserIds(array) {
    this.userIds.replace(array)
  }

  @action
  setName(value) {
    this.name = value
  }
}
