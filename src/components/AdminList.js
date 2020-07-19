import React from 'react'
import { observer } from 'mobx-react'

const AdminList = ({ admins }) => (
  <div className="grid gap-4 grid-cols-4">
    {admins.map(admin => (
      <div key={admin.id} className="bg-white p-4 rounded shadow-xs">
        <div className="mb-1 text-sm">{admin.username}</div>
        <div className="text-xs text-gray-500">{`Создан: ${admin.createdAt}`}</div>
      </div>
    ))}
  </div>
)

export default observer(AdminList)
