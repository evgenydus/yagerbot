import { observable } from 'mobx'
import User from './User'

const usersData = [
  {
    firstName: 'Aleksandr',
    groupId: 987,
    id: 123,
    label: 'Aleksandr Dus',
    lastName: 'D',
    username: 'sashadus',
  },
]

export default class Users {
  @observable users = []

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  loadUsers() {
    const users = usersData.map((user) => new User(user, this))

    this.users.replace(users)
  }
}
