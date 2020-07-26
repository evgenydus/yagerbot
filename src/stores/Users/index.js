import { action, observable } from 'mobx'
import UserModel from './UserModel'

export default class Users {
  rootStore

  @observable rawData = []
  @observable users = []
  @observable isLoaded = false
  @observable userToEdit = null

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  get api() {
    return this.rootStore.api.users
  }

  @action
  load() {
    return this.api.getUserList().then(data => {
      this.setRawData(data)
      const users = data.map(userData => new UserModel(userData, this))

      this.setUsers(users)
    })
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
  setUserToEdit(user) {
    this.userToEdit = user
  }

  @action
  updateUser({ rawUser, user }) {
    const rawUserIndex = this.rawData.findIndex(g => g.id === rawUser.id)
    this.rawData.splice(rawUserIndex, 1, rawUser)

    const userIndex = this.users.findIndex(g => g.id === user.id)
    this.users.splice(userIndex, 1, user)
  }
}
