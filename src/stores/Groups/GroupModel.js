import { computed, observable } from 'mobx'

export default class GroupModel {
  groups

  id
  userIds = []
  @observable name = ''
  @observable color = ''
  isActive

  constructor({ color, id, is_active, members, name }, groupsStore) {
    this.groupsStore = groupsStore

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

  @computed
  get isEditInProgress() {
    return Boolean(this.groupsStore.groupToEdit)
  }

  edit = () => {
    this.groupsStore.setGroupToEdit(this)
  }

  destroy = () => {
    this.groupsStore.setGroupToEdit(null)
    this.groupsStore.removeGroup(this.id)
  }
}
