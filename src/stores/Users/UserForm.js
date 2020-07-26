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
    return this.usersStore.rootStore.groupsStore.groups.map(g => ({ label: g.name, value: g.id }))
  }

  @action
  setLabel(value) {
    this.label = value
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
  updateData() {
    if (this.isLoading) return Promise.resolve()

    this.isLoading = true

    return this.api
      .updateUser(this.user.id, { bot_panel_username: this.label })
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
