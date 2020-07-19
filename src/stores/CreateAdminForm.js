import { action, observable } from 'mobx'

export default class CreateAdminForm {
  adminStore

  @observable username = ''
  @observable password = ''
  @observable firstName = ''
  @observable lastName = ''

  constructor(adminStore) {
    this.adminStore = adminStore
  }

  get api() {
    return this.adminStore.api
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

  @action
  setUsername(value) {
    this.username = value
  }

  @action
  setPassword(value) {
    this.password = value
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
  resetForm() {
    this.username = ''
    this.password = ''
    this.firstName = ''
    this.lastName = ''
  }

  sendData() {
    return this.api.createAdmin(this.requestPayload).then(adminData => {
      this.adminStore.addAdmin(adminData)
      this.resetForm()
    })
  }
}
