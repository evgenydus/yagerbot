import React, { useEffect } from 'react'
import { observer } from 'mobx-react'

import PageWrapper from '../components/PageWrapper'
import AdminContent from '../components/AdminContent'

const Admin = ({ store }) => {
  useEffect(() => {
    store.adminStore.load()
  }, [store])

  return (
    <PageWrapper>
      <AdminContent store={store} />
    </PageWrapper>
  )
}

export default observer(Admin)
