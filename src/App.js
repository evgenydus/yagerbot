import React, { useState, useEffect } from 'react'
import { Router } from '@reach/router'
import { observer } from 'mobx-react'
import RootStore from './stores'

import Dashboard from './containers/Dashboard'
import Login from './containers/Login'

const App = () => {
  const [store] = useState(() => new RootStore())

  useEffect(() => {
    store.usersStore.loadUsers()
  }, [store.usersStore])

  return (
    <Router>
      <Login path="/" />
      <Dashboard path="/dashboard" usersStore={store.usersStore} />
    </Router>
  )
}

export default observer(App)
