import { observable } from 'mobx'
import User from './User'
import usersMock from '/mocks/users'

export default class Users {
  @observable users = []

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  loadUsers() {
    const users = usersMock.map((user) => new User(user, this))

    this.users.replace(users)
  }
}
