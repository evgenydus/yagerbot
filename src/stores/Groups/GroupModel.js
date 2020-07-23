import { computed, observable } from 'mobx'

export default class GroupModel {
  groups

  id
  @observable userIds = []
  @observable name = ''
  @observable color = ''

  constructor({ color, id, members, name }, groupsStore) {
    this.groupsStore = groupsStore

    this.id = id
    this.userIds = members.map(member => member.id)
    this.name = name
    this.color = color
  }

  @computed
  get usersCount() {
    return this.userIds.length
  }

  @computed
  get isEditInProgress() {
    return Boolean(this.groupsStore.groupToEdit)
  }

  @computed
  get isActive() {
    return this.groupsStore.groupToEdit?.id === this.id
  }

  edit = () => {
    this.groupsStore.setGroupToEdit(this)
  }

  destroy = () => {
    this.groupsStore.setGroupToEdit(null)
    this.groupsStore.removeGroup(this.id)
  }
}
