import { observable } from 'mobx'

export default class UserData {
  @observable userName = ''
  @observable password = ''
  @observable token = ''

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  setToken(value) {
    this.token = value
  }

  setUserName(value) {
    this.userName = value
  }

  setPassword(value) {
    this.password = value
  }
}
