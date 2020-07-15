import Users from './Users'

export default class RootStore {
  constructor() {
    this.users = new Users(this)
  }
}
