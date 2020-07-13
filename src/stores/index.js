import UserData from './UserData'

class RootStore {
  constructor() {
    this.userData = new UserData(this)
  }
}

export default RootStore
