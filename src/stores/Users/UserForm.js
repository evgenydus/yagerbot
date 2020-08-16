import { action, computed, observable } from 'mobx'
import UserModel from './UserModel'
import showToast from '../../utils/toasts'

export default class UserFormStore {
  usersStore

  @observable label
  @observable groupIds
  @observable isLoading

  constructor(usersStore) {
    const user = usersStore.userToEdit || usersStore.users[0]
    this.user = user
    this.label = user.label
    this.groupIds = user.groupIds.slice()

    this.usersStore = usersStore
  }

  get api() {
    return this.usersStore.api
  }

  get requestPayload() {
    return {
      botPanelUsername: this.label,
      groupIds: this.groupIds,
    }
  }

  @computed
  get groupsAsOptions() {
    return this.usersStore.rootStore.groupsStore.groups.map(group => ({
      color: group.color,
      label: group.name,
      value: group.id,
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
      .updateUser(this.user.id, this.requestPayload)
      .then(userData => {
        this.usersStore.updateUser({
          rawUser: userData,
          user: new UserModel(userData, this.usersStore),
        })
        this.usersStore.rootStore.groupsStore.load()
        this.cancelEdit()
        showToast('Пользователь изменен')
      })
      .catch(() => {
        showToast('Не удалось сохранить пользователя', 'error')
      })
      .finally(() => {
        this.isLoading = false
      })
  }

  cancelEdit = () => {
    this.usersStore.setUserToEdit(null)
  }
}
