import React from 'react'
import CardWrapper from '../CardWrapper'

const UserCard = ({ user }) => (
  <CardWrapper>
    <div className="text-sm">{user.label}</div>
    <div className="text-gray-500 text-xs">@{user.username}</div>
  </CardWrapper>
)

export default UserCard
