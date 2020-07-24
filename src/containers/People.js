import React from 'react'
import { observer } from 'mobx-react'

import PageWrapper from '../components/PageWrapper'
import UserCardList from '../components/UserCardList'
import LoadIndicator from '../components/LoadIndicator'

const People = ({ store }) => (
  <PageWrapper>
    {store.isReady ? (
      <div className="p-4">
        <UserCardList users={store.usersStore.users} />
      </div>
    ) : (
      <div className="inline-block p-4">
        <LoadIndicator />
      </div>
    )}
  </PageWrapper>
)

export default observer(People)
