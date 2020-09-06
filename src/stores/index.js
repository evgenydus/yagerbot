import { action, computed, observable } from 'mobx'
import Cookies from 'js-cookie'
import Admins from './Admins'
import Groups from './Groups'
import ModalsStore from './Modal'
import Users from './Users'

export default class RootStore {
  api
  groupsStore
  usersStore
  adminStore
  modalsStore

  @observable authToken = null
  @observable isReady = false

  constructor({ api }) {
    this.api = api
    this.groupsStore = new Groups(this)
    this.usersStore = new Users(this)
    this.adminStore = new Admins(this)
    this.modalsStore = new ModalsStore(this)
    this.authToken = Cookies.get('authToken')
  }

  @computed
  get totalGroupsCount() {
    return this.groupsStore.groups.length
  }

  @computed
  get totalUsersCount() {
    return this.usersStore.users.length
  }

  @action
  setAuthToken(token) {
    Cookies.set('authToken', token)
    this.authToken = token
  }

  @action
  setReady(isReady) {
    this.isReady = isReady
  }

  loadMainData() {
    Promise.all([this.usersStore.load(), this.groupsStore.load()]).then(() => {
      this.setReady(true)
    })
  }
}
