import { action, observable } from 'mobx'
import AdminModel from './AdminModel'

export default class Admins {
  rootStore

  @observable rawData = []
  @observable admins = []

  @observable isLoaded = false
  @observable isAdminCreation

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  get api() {
    return this.rootStore.api.admins
  }

  @action
  toggleAdminCreation = () => {
    this.isAdminCreation = !this.isAdminCreation
  }

  @action
  setRawData(array) {
    this.rawData.replace(array)
  }

  @action
  setAdmins(array) {
    this.admins.replace(array)

    this.isLoaded = true
  }

  @action
  addAdmin(adminData) {
    this.admins.push(new AdminModel(adminData, this))
    this.rawData.push(adminData)
  }

  @action
  removeAdmin(id) {
    const newAdmins = this.admins.filter(admin => admin.id !== id)
    const newRawData = this.rawData.filter(admin => admin.id !== id)
    this.admins.replace(newAdmins)
    this.rawData.replace(newRawData)

    this.api.deleteAdmin(id)
  }

  load() {
    if (this.isLoaded) return

    this.api.getAdminList().then(data => {
      this.setRawData(data)
      const admins = data.map(adminData => new AdminModel(adminData, this))

      this.setAdmins(admins)
    })
  }
}
