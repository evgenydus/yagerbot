export default class Admin {
  admins

  id
  username
  createdAt

  constructor({ created_at, id, username }, admins) {
    this.admins = admins

    this.id = id
    this.username = username
    this.createdAt = new Date(created_at).toLocaleDateString()
  }
}
