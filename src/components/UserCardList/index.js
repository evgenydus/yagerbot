import React from 'react'
import { observer } from 'mobx-react'
import UserCard from './UserCard'

const UserCardList = ({ users }) => {
  if (!users.length) return null

  return (
    <div className="grid gap-4 grid-cols-4">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}

export default observer(UserCardList)
