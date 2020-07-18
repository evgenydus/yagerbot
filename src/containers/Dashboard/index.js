import React from 'react'
import { observer } from 'mobx-react'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import UserCardList from '../../components/UserCardList'

const Dashboard = ({ usersStore }) => (
  <div className="flex max-w-screen-xl min-h-screen mx-auto">
    <Sidebar />
    <div className="bg-gray-100 border-r flex-grow">
      <Header />
      <UserCardList users={usersStore.users} />
    </div>
  </div>
)

export default observer(Dashboard)
