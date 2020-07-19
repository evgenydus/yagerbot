import Cookies from 'js-cookie'
import Users from './Users'

export default class RootStore {
  authToken = Cookies.get('authToken')
  api
  usersStore

  constructor({ api }) {
    this.api = api
    this.usersStore = new Users(this)
  }
}
