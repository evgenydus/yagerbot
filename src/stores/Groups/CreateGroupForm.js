import { action, computed, observable } from 'mobx'

export default class CreateGroupForm {
  @observable name = ''
  @observable color = ''
  @observable userIds = []

  @observable isLoading = false

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
  get isValid() {
    return this.name.trim() && this.color
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

  @action
  resetForm() {
    this.name = ''
    this.color = ''
    this.userIds = []
  }

  sendData() {
    if (!this.isValid) return Promise.reject()

    this.isLoading = true

    return this.api
      .createGroup(this.requestPayload)
      .then(groupData => {
        this.groupsStore.addGroup(groupData)
        this.resetForm()
      })
      .finally(() => {
        this.isLoading = false
      })
  }
}
