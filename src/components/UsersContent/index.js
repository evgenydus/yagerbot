import React from 'react'
import { observer } from 'mobx-react'
import UserCardList from './UserCardList'
import UserForm from './UserForm'

const UsersContent = ({ store }) => (
  <div className="p-4">
    <UserCardList users={store.usersStore.users} />
    {store.usersStore.userToEdit && (
      <div className="mt-4">
        <UserForm store={store} />
      </div>
    )}
  </div>
)

export default observer(UsersContent)
