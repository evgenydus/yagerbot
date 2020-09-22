import { action, computed, observable } from 'mobx'
import Cookies from 'js-cookie'
import AdminsStore from './Admins'
import GroupsStore from './Groups'
import MessagesStore from './Messages'
import ModalsStore from './Modal'
import UsersStore from './Users'

export default class RootStore {
  api

  adminStore
  groupsStore
  messagesStore
  modalsStore
  usersStore

  @observable authToken = null
  @observable isReady = false

  constructor({ api }) {
    this.api = api

    this.adminStore = new AdminsStore(this)
    this.groupsStore = new GroupsStore(this)
    this.messagesStore = new MessagesStore(this)
    this.modalsStore = new ModalsStore(this)
    this.usersStore = new UsersStore(this)

    this.authToken = Cookies.get('authToken')
  }

  @computed
  get totalGroupsCount() {
    return this.groupsStore.groups.length
  }

  @computed
  get totalMessagesCount() {
    return this.messagesStore.messages.length
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
    Promise.all([this.usersStore.load(), this.groupsStore.load(), this.messagesStore.load()]).then(
      () => {
        this.setReady(true)
      },
    )
  }
}
