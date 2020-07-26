import { action, observable } from 'mobx'
import AdminModel from './AdminModel'

export default class Admins {
  rootStore

  @observable rawData = []
  @observable admins = []

  @observable isLoaded = false
  @observable adminToEdit = null
  @observable isAdminCreation

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  get api() {
    return this.rootStore.api.admins
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

  @action
  setAdmins(array) {
    this.admins.replace(array)
  }

  @action
  setAdminToEdit(admin) {
    this.isAdminCreation = false
    this.adminToEdit = admin
  }

  @action
  setRawData(array) {
    this.rawData.replace(array)
    this.isLoaded = true
  }

  @action
  toggleAdminCreation = () => {
    this.isAdminCreation = !this.isAdminCreation
  }

  @action
  updateAdmin({ admin, rawAdmin }) {
    const rawAdminIndex = this.rawData.findIndex(a => a.id === rawAdmin.id)
    this.rawData.splice(rawAdminIndex, 1, rawAdmin)

    const adminIndex = this.admins.findIndex(a => a.id === admin.id)
    this.admins.splice(adminIndex, 1, admin)
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
