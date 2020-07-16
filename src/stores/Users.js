import { action, computed, observable } from 'mobx'
import User from './User'
import usersMock from '/mocks/users'

export default class Users {
  @observable data = []

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @computed
  get users() {
    return this.data.toJSON()
  }

  @action
  loadUsers() {
    const users = usersMock.map((user) => new User(user, this))

    this.data.replace(users)
  }
}
