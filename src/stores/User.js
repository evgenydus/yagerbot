import { action, computed, observable } from 'mobx'

export default class User {
  id = null
  username = ''
  firstName
  lastName
  @observable label
  @observable groupId

  constructor(
    { first_name, group, id, bot_panel_username, last_name, telegram_username },
    usersStore,
  ) {
    this.id = id
    this.username = telegram_username
    this.firstName = first_name
    this.lastName = last_name
    this.label = bot_panel_username
    this.groupId = group

    this.usersStore = usersStore
  }

  @computed
  get fullName() {
    return `${this.firstName} ${this.lastName}`
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
