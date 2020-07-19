import { action, observable } from 'mobx'
import User from './User'
import usersMock from '../mocks/users'

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
    const users = usersMock.map(user => new User(user, this))

    this.users.replace(users)
  }
}
