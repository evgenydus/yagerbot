import { computed } from 'mobx'

export default class AdminModel {
  adminsStore

  id
  username
  createdAt

  constructor({ createdAt, id, username }, adminsStore) {
    this.adminsStore = adminsStore

    this.id = id
    this.username = username
    this.createdAt = new Date(createdAt).toLocaleDateString()
  }

  @computed
  get isActive() {
    return this.adminsStore.adminToEdit?.id === this.id
  }

  @computed
  get isEditInProgress() {
    return Boolean(this.adminsStore.adminToEdit)
  }

  destroy = () => {
    this.adminsStore.setAdminToEdit(null)
    this.adminsStore.removeAdmin(this.id)
  }

  edit = () => {
    this.adminsStore.setAdminToEdit(this)
  }
}
