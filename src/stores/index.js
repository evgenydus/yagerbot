import { action, observable } from 'mobx'
import Cookies from 'js-cookie'
import Users from './Users'
import Admins from './Admins'
import Groups from './Groups'

export default class RootStore {
  api
  groupsStore
  usersStore

  @observable authToken = null

  constructor({ api }) {
    this.api = api
    this.groupsStore = new Groups(this)
    this.usersStore = new Users(this)
    this.adminStore = new Admins(this)
    this.authToken = Cookies.get('authToken')
  }

  @action
  setAuthToken(token) {
    Cookies.set('authToken', token)
    this.authToken = token
  }
}
