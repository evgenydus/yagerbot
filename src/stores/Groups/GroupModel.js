import { computed, observable } from 'mobx'

export default class GroupModel {
  groups

  id
  userIds = []
  @observable name = ''
  @observable color = ''
  isActive

  constructor({ color, id, is_active, members, name }, groups) {
    this.admins = groups

    this.id = id
    this.userIds = members.map(member => member.id)
    this.name = name
    this.color = color
    this.isActive = is_active
  }

  @computed
  get usersCount() {
    return this.userIds.length
  }
}
