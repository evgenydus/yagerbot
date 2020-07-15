import { action, observable } from 'mobx'

export default class User {
  @observable id
  @observable username
  @observable firstName
  @observable lastName
  @observable label
  @observable groupId

  constructor({ firstName = '', groupId, id, label = '', lastName = '', username }, users) {
    this.id = id
    this.username = username
    this.firstName = firstName
    this.lastName = lastName
    this.label = label
    this.groupId = groupId

    this.users = users
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
