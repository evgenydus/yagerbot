import React from 'react'
import { observer } from 'mobx-react'

import AdminCard from './AdminCard'

const AdminList = ({ admins }) => (
  <div className="grid gap-4 grid-cols-4">
    {admins.map(admin => (
      <AdminCard key={admin.id} admin={admin} />
    ))}
  </div>
)

export default observer(AdminList)
