import React from 'react'

const UserCard = ({ user }) => (
  <div className="bg-white border p-4 rounded">
    <div>{user.label}</div>
    <div className="text-gray-500 text-sm">@{user.username}</div>
  </div>
)

export default UserCard
