export default class AdminModel {
  adminsStore

  id
  username
  createdAt

  constructor({ created_at, id, username }, adminsStore) {
    this.adminsStore = adminsStore

    this.id = id
    this.username = username
    this.createdAt = new Date(created_at).toLocaleDateString()
  }
}
