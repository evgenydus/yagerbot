import React from 'react'
import { observer } from 'mobx-react'

import PageWrapper from '../components/PageWrapper'
import UserCardList from '../components/UserCardList'

const Dashboard = ({ usersStore }) => (
  <PageWrapper>
    <div className="p-4">
      <UserCardList users={usersStore.users} />
    </div>
  </PageWrapper>
)

export default observer(Dashboard)
