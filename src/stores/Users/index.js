import { action, observable } from 'mobx'
import UserModel from './UserModel'

export default class Users {
  rootStore

  @observable rawData = []
  @observable users = []
  @observable isLoaded = false

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  get api() {
    return this.rootStore.api.users
  }

  @action
  setRawData(array) {
    this.rawData.replace(array)
    this.isLoaded = true
  }

  @action
  setUsers(array) {
    this.users.replace(array)
  }

  @action
  load() {
    return this.api.getUserList().then(data => {
      this.setRawData(data)
      const users = data.map(userData => new UserModel(userData, this))

      this.setUsers(users)
    })
  }
}
