import adminsApi from './entities/admins'
import authApi from './entities/auth'
import groupsApi from './entities/groups'
import usersApi from './entities/users'

const api = {
  admins: adminsApi,
  auth: authApi,
  groups: groupsApi,
  users: usersApi,
}

export default api
