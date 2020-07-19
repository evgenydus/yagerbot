import React from 'react'

const UserCard = ({ user }) => (
  <div className="bg-white p-4 rounded shadow-xs">
    <div className="text-sm">{user.label}</div>
    <div className="text-gray-500 text-xs">@{user.username}</div>
  </div>
)

export default UserCard
