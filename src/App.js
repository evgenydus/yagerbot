import React, { useState, useEffect } from 'react'
import { Router, navigate } from '@reach/router'
import { observer } from 'mobx-react'
import api from './api'
import RootStore from './stores'

import Admin from './containers/Admin'
import Dashboard from './containers/Dashboard'
import Login from './containers/Login'
import { routes } from './constants'

const App = () => {
  const [store] = useState(() => new RootStore({ api }))

  useEffect(() => {
    if (store.authToken) {
      navigate(routes.dashboard)
    } else {
      navigate('/login')
    }
    store.usersStore.loadUsers()
  }, [store.authToken, store.usersStore])

  return (
    <Router>
      <Login path="/login" store={store} />
      <Dashboard path={routes.dashboard} usersStore={store.usersStore} />
      <Admin path={routes.admin} store={store} />
    </Router>
  )
}

export default observer(App)
