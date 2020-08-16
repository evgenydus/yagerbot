import React from 'react'
import { observer } from 'mobx-react'

import PageWrapper from '../components/PageWrapper'
import GroupsContent from '../components/GroupsContent'

const Groups = ({ store }) => (
  <PageWrapper store={store}>
    <GroupsContent store={store} />
  </PageWrapper>
)

export default observer(Groups)
