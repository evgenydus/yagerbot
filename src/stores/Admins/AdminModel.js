import { computed } from 'mobx'

export default class AdminModel {
  adminsStore

  id
  username
  createdAt

  constructor({ created_at, id, username }, adminsStore) {
    this.adminsStore = adminsStore

    this.id = id
    this.username = username
    this.createdAt = new Date(created_at).toLocaleDateString()
  }

  @computed
  get isEditInProgress() {
    return Boolean(this.adminsStore.adminToEdit)
  }

  @computed
  get isActive() {
    return this.adminsStore.adminToEdit?.id === this.id
  }

  edit = () => {
    this.adminsStore.setAdminToEdit(this)
  }

  destroy = () => {
    this.adminsStore.setAdminToEdit(null)
    this.adminsStore.removeAdmin(this.id)
  }
}
