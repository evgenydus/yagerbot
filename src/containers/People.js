import React from 'react'
import { observer } from 'mobx-react'

import PageWrapper from '../components/PageWrapper'
import UsersContent from '../components/UsersContent'

const People = ({ store }) => (
  <PageWrapper store={store}>
    <UsersContent store={store} />
  </PageWrapper>
)

export default observer(People)
