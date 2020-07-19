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

  get requestPayload() {
    return {
      color: this.color,
      name: this.name,
    }
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
  setColor(value) {
    this.color = value
  }

  @action
  setName(value) {
    this.name = value
  }

  sendData() {
    return this.api.createGroup(this.requestPayload).then(groupData => {
      this.groupsStore.addGroup(groupData)
    })
  }
}
