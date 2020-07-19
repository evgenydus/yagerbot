import React from 'react'
import { observer } from 'mobx-react'
import UserCardList from '../../components/UserCardList'

const Dashboard = ({ usersStore }) => (
  <div className="h-screen">
    <div className="flex items-center justify-center m-auto">Dashboard</div>
    <UserCardList users={usersStore.users} />
  </div>
)

export default observer(Dashboard)
