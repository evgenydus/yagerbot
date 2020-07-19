import React, { useEffect } from 'react'
import { observer } from 'mobx-react'

import PageWrapper from '../components/PageWrapper'
import AdminList from '../components/AdminList'

const Admin = ({ store }) => {
  useEffect(() => {
    store.adminStore.load()
  }, [store])

  return (
    <PageWrapper>
      <div className="p-4">
        {store.adminStore.isLoaded ? (
          <AdminList admins={store.adminStore.admins} />
        ) : (
          <div className="text-sm">Загружаю...</div>
        )}
      </div>
    </PageWrapper>
  )
}

export default observer(Admin)
