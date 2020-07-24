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
    { first_name, group, id, bot_panel_username, last_name, telegram_username },
    usersStore,
  ) {
    this.id = id
    this.username = telegram_username
    this.firstName = first_name
    this.lastName = last_name
    this.label = bot_panel_username
    this.groupIds = [group]

    this.usersStore = usersStore
  }

  @computed
  get isActive() {
    return this.usersStore.userToEdit?.id === this.id
  }

  @computed
  get isEditInProgress() {
    return Boolean(this.usersStore.userToEdit)
  }

  @computed
  get groups() {
    return this.usersStore.rootStore.groupsStore.groups.filter(g => this.groupIds.includes(g.id))
  }

  @computed
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  edit = () => {
    this.usersStore.setUserToEdit(this)
  }

  @action
  setLabel(value) {
    this.label = value
  }

  @action
  setGroupId(value) {
    this.groupId = value
  }
}
