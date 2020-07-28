import { action, computed, observable } from 'mobx'

export default class UserModel {
  usersStore

  id = null
  username = ''
  firstName
  lastName
  @observable label
  @observable groupIds

  constructor(
    { firstName, group, id, botPanelUsername, lastName, telegramUsername },
    usersStore,
  ) {
    this.id = id
    this.username = telegramUsername
    this.firstName = firstName
    this.lastName = lastName
    this.label = botPanelUsername
    this.groupIds = [group]

    this.usersStore = usersStore
  }

  @computed
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  @computed
  get groups() {
    return this.usersStore.rootStore.groupsStore.groups.filter(g => this.groupIds.includes(g.id))
  }

  @computed
  get isActive() {
    return this.usersStore.userToEdit?.id === this.id
  }

  @computed
  get isEditInProgress() {
    return Boolean(this.usersStore.userToEdit)
  }

  @action
  setGroupId(value) {
    this.groupId = value
  }

  @action
  setLabel(value) {
    this.label = value
  }

  edit = () => {
    this.usersStore.setUserToEdit(this)
  }
}
