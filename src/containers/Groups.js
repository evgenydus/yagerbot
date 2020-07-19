import React, { useEffect } from 'react'
import { observer } from 'mobx-react'

import PageWrapper from '../components/PageWrapper'
import GroupsContent from '../components/GroupsContent'

const Groups = ({ store }) => {
  useEffect(() => {
    store.groupsStore.load()
  }, [store.groupsStore])

  return (
    <PageWrapper>
      <GroupsContent store={store} />
    </PageWrapper>
  )
}

export default observer(Groups)
