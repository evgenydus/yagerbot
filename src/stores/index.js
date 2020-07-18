import Cookies from 'js-cookie'
import Users from './Users'
import Admins from './Admins'

export default class RootStore {
  authToken = Cookies.get('authToken')
  api
  usersStore

  constructor({ api }) {
    this.api = api
    this.usersStore = new Users(this)
    this.adminStore = new Admins(this)
  }
}
