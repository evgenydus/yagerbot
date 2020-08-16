import { action, computed, observable } from 'mobx'
import AdminModel from './AdminModel'

export default class AdminFormStore {
  adminsStore

  id = null
  @observable username = ''
  @observable password = ''
  @observable firstName = ''
  @observable lastName = ''

  @observable isLoading = false

  constructor(adminsStore, admin) {
    this.adminsStore = adminsStore

    if (admin) {
      this.id = admin.id
      this.username = admin.username
      this.firstName = admin.firstName
      this.lastName = admin.lastName
    }
  }

  get api() {
    return this.adminsStore.api
  }

  get requestPayload() {
    return {
      first_name: this.firstName,
      last_name: this.lastName,
      password: this.password,
      role: 'admin',
      username: this.username,
    }
  }

  @computed
  get isValid() {
    return this.username.trim() && this.password.trim()
  }

  @action
  resetForm() {
    this.username = ''
    this.password = ''
    this.firstName = ''
    this.lastName = ''
  }

  @action
  setFirstName(value) {
    this.firstName = value
  }

  @action
  setLastName(value) {
    this.lastName = value
  }

  @action
  setPassword(value) {
    this.password = value
  }

  @action
  setUsername(value) {
    this.username = value
  }

  @action
  updateData() {
    this.isLoading = true

    this.api
      .updateAdmin(this.id, this.requestPayload)
      .then(adminData => {
        this.adminsStore.updateAdmin({
          admin: new AdminModel(adminData, this.adminsStore),
          rawAdmin: adminData,
        })
        this.cancelEdit()
      })
      .finally(() => {
        this.isLoading = false
      })
  }

  cancelEdit = () => {
    this.adminsStore.adminToEdit = null
  }

  sendData() {
    if (!this.isValid) return Promise.reject()

    this.isLoading = true

    return this.api
      .createAdmin(this.requestPayload)
      .then(adminData => {
        this.adminsStore.addAdmin(adminData)
        this.resetForm()
      })
      .finally(() => {
        this.isLoading = false
      })
  }
}
