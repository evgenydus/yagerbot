import React from 'react'
import { observer } from 'mobx-react'

import LoadIndicator from '../LoadIndicator'
import UserCardList from './UserCardList'
import UserForm from './UserForm'

const UsersContent = ({ store }) => {
  if (!store.isReady) {
    return (
      <div className="inline-block p-4 xs:block xs:mx-auto">
        <LoadIndicator />
      </div>
    )
  }

  return (
    <div className="p-4">
      <UserCardList users={store.usersStore.users} />
      {store.usersStore.userToEdit && (
        <div className="mt-4">
          <UserForm store={store} />
        </div>
      )}
    </div>
  )
}

export default observer(UsersContent)
