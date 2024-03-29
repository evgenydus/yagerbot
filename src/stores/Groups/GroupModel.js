import { computed, observable } from 'mobx'

export default class GroupModel {
  groupsStore

  id
  @observable userIds = []
  @observable name = ''
  @observable color = ''

  constructor({ color, id, memberIds, name }, groupsStore) {
    this.groupsStore = groupsStore

    this.id = id
    this.userIds = memberIds
    this.name = name
    this.color = color
  }

  @computed
  get isActive() {
    return this.groupsStore.groupToEdit?.id === this.id
  }

  @computed
  get isEditInProgress() {
    return Boolean(this.groupsStore.groupToEdit)
  }

  @computed
  get usersCount() {
    return this.userIds.length
  }

  edit = () => {
    this.groupsStore.setGroupToEdit(this)
    this.groupsStore.formModal.openModal()
  }

  destroy = () => {
    this.groupsStore.setGroupToEdit(null)
    this.groupsStore.removeGroup(this.id)
  }
}
