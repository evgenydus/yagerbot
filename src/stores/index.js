import Cookies from 'js-cookie'
import Users from './Users'
import Admins from './Admins'
import Groups from './Groups'

export default class RootStore {
  authToken = Cookies.get('authToken')
  api
  groupsStore
  usersStore

  constructor({ api }) {
    this.api = api
    this.groupsStore = new Groups(this)
    this.usersStore = new Users(this)
    this.adminStore = new Admins(this)
  }
}
