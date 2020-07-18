import React from 'react'
import { observer } from 'mobx-react'

import Sidebar from '../../components/Sidebar/Sidebar'
import UserCardList from '../../components/UserCardList'

const Dashboard = ({ usersStore }) => (
  <div className="flex max-w-screen-xl min-h-screen mx-auto">
    <Sidebar />
    <div className="bg-gray-100 border-r flex-grow">
      <div className="bg-white border-b flex h-16 items-center px-4 text-xl">Dashboard</div>
      <UserCardList users={usersStore.users} />
    </div>
  </div>
)

export default observer(Dashboard)
