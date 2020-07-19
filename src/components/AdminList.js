import React from 'react'
import { observer } from 'mobx-react'
import CardWrapper from './CardWrapper'

const AdminList = ({ admins }) => (
  <div className="grid gap-4 grid-cols-4">
    {admins.map(admin => (
      <CardWrapper key={admin.id}>
        <div className="mb-1 text-sm">{admin.username}</div>
        <div className="text-xs text-gray-500">{`Создан: ${admin.createdAt}`}</div>
      </CardWrapper>
    ))}
  </div>
)

export default observer(AdminList)
