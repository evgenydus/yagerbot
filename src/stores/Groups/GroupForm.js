import { action, computed, observable } from 'mobx'
import GroupModel from './GroupModel'

export default class GroupForm {
  id = null
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
      memberIds: this.userIds,
      name: this.name,
    }
  }

  @computed
  get isValid() {
    return this.name.trim() && this.color
  }

  @computed
  get selectedUsers() {
    return this.userIds.map(id => this.usersAsOptions.find(option => option.value === id))
  }

  @computed
  get usersAsOptions() {
    return this.groupsStore.rootStore.usersStore.users.map(user => ({
      label: user.label,
      value: user.id,
    }))
  }

  @action
  resetForm() {
    this.name = ''
    this.color = ''
    this.userIds = []
  }

  @action
  setColor(value) {
    this.color = value
  }

  @action
  setFormData({ color, id, name, userIds }) {
    this.id = id
    this.name = name
    this.color = color
    this.userIds = userIds.slice()
  }

  @action
  setName(value) {
    this.name = value
  }

  @action
  setUserIds(array) {
    this.userIds.replace(array)
  }

  @action
  updateData() {
    if (this.isLoading) return Promise.resolve()

    this.isLoading = true

    return this.api
      .updateGroup(this.id, this.requestPayload)
      .then(groupData => {
        this.groupsStore.updateGroup({
          group: new GroupModel(groupData, this.groupsStore),
          rawGroup: groupData,
        })
        this.groupsStore.rootStore.usersStore.load()
        this.groupsStore.cancelEdit()
      })
      .finally(() => {
        this.isLoading = false
      })
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
