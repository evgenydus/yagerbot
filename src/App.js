import React, { useState, useEffect } from 'react'
import { Router, navigate, Redirect } from '@reach/router'
import { hot } from 'react-hot-loader'
import { observer } from 'mobx-react'
import { routes } from './constants'
import api from './api'
import RootStore from './stores'

import Admin from './containers/Admin'
import Dashboard from './containers/Dashboard'
import Groups from './containers/Groups'
import Login from './containers/Login'
import Messages from './containers/Messages'
import People from './containers/People'
import Reports from './containers/Reports'

const App = () => {
  const [store] = useState(() => new RootStore({ api }))

  useEffect(() => {
    if (store.authToken) {
      store.loadMainData()
    } else {
      navigate('/login')
    }
  }, [store, store.authToken])

  return (
    <Router>
      <Redirect from="/" noThrow to={routes.dashboard} />
      <Login path="/login" store={store} />
      <Dashboard path={routes.dashboard} store={store} />
      <People path={routes.people} store={store} />
      <Groups path={routes.groups} store={store} />
      <Messages path={routes.messages} store={store} />
      <Reports path={routes.reports} store={store} />
      <Admin path={routes.admin} store={store} />
    </Router>
  )
}

export default hot(module)(observer(App))
