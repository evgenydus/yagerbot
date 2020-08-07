import React from 'react'
import { observer } from 'mobx-react'

import AdminList from './AdminList'
import LoadIndicator from '../LoadIndicator'
import ManageAdmin from './ManageAdmin'

const AdminContent = ({ store }) => {
  if (!store.adminStore.isLoaded) {
    return (
      <div className="inline-block p-4 xs:block xs:mx-auto">
        <LoadIndicator />
      </div>
    )
  }

  return (
    <div className="p-4">
      <AdminList admins={store.adminStore.admins} />
      <div className="mt-4">
        <ManageAdmin adminStore={store.adminStore} />
      </div>
    </div>
  )
}

export default observer(AdminContent)
