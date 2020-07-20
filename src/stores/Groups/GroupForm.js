import { action, computed, observable } from 'mobx'
import GroupModel from './GroupModel'

export default class GroupForm {
  id = null
  @observable name = ''
  @observable color = ''
  @observable userIds = []

  @observable isLoading = false

  constructor(groupsStore, group) {
    this.groupsStore = groupsStore
    if (group) {
      this.id = group.id
      this.name = group.name
      this.color = group.color
      this.userIds = group.userIds
    }
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

  cancelEdit = () => {
    this.groupsStore.setGroupToEdit(null)
  }

  @action
  updateData = () => {
    this.isLoading = true

    this.api
      .updateGroup(this.id, this.requestPayload)
      .then(groupData => {
        this.groupsStore.updateGroup({
          group: new GroupModel(groupData, this.groupsStore),
          rawGroup: groupData,
        })
        this.cancelEdit()
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
