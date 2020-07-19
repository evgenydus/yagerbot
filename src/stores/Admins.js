import { action, observable } from 'mobx'
import Admin from './Admin'

export default class Admins {
  rootStore

  @observable rawData = []
  @observable admins = []

  @observable isLoaded = false

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  get api() {
    return this.rootStore.api.admins
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
    this.admins.push(new Admin(adminData, this))
    this.rawData.push(adminData)
  }

  load() {
    if (this.isLoaded) return

    this.api.getAdminList().then(data => {
      this.setRawData(data)
      const admins = data.map(admin => new Admin(admin, this))

      this.setAdmins(admins)
    })
  }
}
