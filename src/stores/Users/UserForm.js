import { action, computed, observable } from 'mobx'
import UserModel from './UserModel'

export default class UserForm {
  usersStore

  @observable label
  @observable groupIds
  @observable isLoading

  constructor(usersStore) {
    const user = usersStore.userToEdit || usersStore.users[0]
    this.user = user
    this.label = user.label
    this.groupIds = user.groupIds

    this.usersStore = usersStore
  }

  get api() {
    return this.usersStore.api
  }

  @computed
  get groupsAsOptions() {
    return this.usersStore.rootStore.groupsStore.groups.map(g => ({
      color: g.color,
      label: g.name,
      value: g.id,
    }))
  }

  @computed
  get selectedGroups() {
    return this.groupIds.map(id => this.groupsAsOptions.find(option => option.value === id))
  }

  @action
  setGroupIds(array) {
    this.groupIds.replace(array)
  }

  @action
  setLabel(value) {
    this.label = value
  }

  @action
  updateData() {
    if (this.isLoading) return Promise.resolve()

    this.isLoading = true

    return this.api
      .updateUser(this.user.id, { botPanelUsername: this.label, group: this.groupIds })
      .then(userData => {
        this.usersStore.updateUser({
          rawUser: userData,
          user: new UserModel(userData, this.usersStore),
        })
        this.cancelEdit()
      })
      .finally(() => {
        this.isLoading = false
      })
  }

  cancelEdit = () => {
    this.usersStore.setUserToEdit(null)
  }
}
