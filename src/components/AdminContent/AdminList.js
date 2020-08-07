import React from 'react'
import { observer } from 'mobx-react'

import AdminCard from './AdminCard'

const AdminList = ({ admins }) => (
  <div className="gap-4 grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2">
    {admins.map(admin => (
      <AdminCard key={admin.id} admin={admin} />
    ))}
  </div>
)

export default observer(AdminList)
