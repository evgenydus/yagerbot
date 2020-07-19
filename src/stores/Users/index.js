import { action, observable } from 'mobx'
import UserModel from './UserModel'
import usersMock from '../../mocks/users'

export default class Users {
  rootStore

  @observable users = []

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  get api() {
    return this.rootStore.api.users
  }

  @action
  loadUsers() {
    const users = usersMock.map(userData => new UserModel(userData, this))

    this.users.replace(users)
  }
}
