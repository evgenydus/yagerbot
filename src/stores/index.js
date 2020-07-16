import Users from './Users'

export default class RootStore {
  constructor() {
    this.usersStore = new Users(this)
  }
}
