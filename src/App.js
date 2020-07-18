import React, { useState, useEffect } from 'react'
import { Router, navigate } from '@reach/router'
import { observer } from 'mobx-react'
import api from './api'
import RootStore from './stores'

import Login from './containers/Login'

const App = () => {
  const [store] = useState(() => new RootStore({ api }))

  useEffect(() => {
    if (store.authToken) {
      navigate('/dashboard')
    } else {
      navigate('/login')
    }
    store.usersStore.loadUsers()
  }, [store.authToken, store.usersStore])

  return (
    <Router>
      <Login path="/login" store={store} />
      <Dashboard path="/dashboard" usersStore={store.usersStore} />
    </Router>
  )
}

export default observer(App)
