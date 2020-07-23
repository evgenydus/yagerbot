import React from 'react'
import { observer } from 'mobx-react'

import AdminForm from './AdminForm'
import Button from '../UI/Button'

const ManageAdmin = ({ adminStore }) => {
  if (!adminStore.isAdminCreation) {
    return <Button onClick={adminStore.toggleAdminCreation}>Новый админ</Button>
  }

  return <AdminForm key="create-admin" adminStore={adminStore} />
}

export default observer(ManageAdmin)
