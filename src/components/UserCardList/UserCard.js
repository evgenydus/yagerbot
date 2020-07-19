import React from 'react'

const UserCard = ({ user }) => (
  <div className="border p-4 rounded tracking-tight">
    <div className="font-semibold">{user.label}</div>
    <div className="text-gray-500 text-sm">@{user.username}</div>
  </div>
)

export default UserCard
