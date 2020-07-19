import React from 'react'
import { observer } from 'mobx-react'
import AdminList from '../AdminList'
import CreateAdmin from './CreateAdmin'

const AdminContent = ({ store }) => {
  if (!store.adminStore.isLoaded) {
    return <div className="p-4 text-sm">Загружаю...</div>
  }

  return (
    <div className="p-4">
      <AdminList admins={store.adminStore.admins} />
      <div className="mt-4">
        <CreateAdmin adminStore={store.adminStore} />
      </div>
    </div>
  )
}

export default observer(AdminContent)
