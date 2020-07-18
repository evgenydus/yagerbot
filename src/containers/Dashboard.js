import React from 'react'
import { observer } from 'mobx-react'

import PageWrapper from '../components/PageWrapper'
import UserCardList from '../components/UserCardList'

const Dashboard = ({ usersStore }) => (
  <PageWrapper>
    <UserCardList users={usersStore.users} />
  </PageWrapper>
)

export default observer(Dashboard)
