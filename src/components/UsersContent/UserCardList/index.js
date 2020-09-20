import React from 'react'
import { observer } from 'mobx-react'
import UserCard from './UserCard'

const UserCardList = ({ users }) => {
  if (!users.length) return null

  return (
    <div className="gap-4 grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}

export default observer(UserCardList)
