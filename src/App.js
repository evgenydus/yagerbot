import React, { useState, useEffect } from 'react'
import { Router, navigate, Redirect } from '@reach/router'
import { ToastContainer } from 'react-toastify'
import { observer } from 'mobx-react'
import { routes } from './constants'
import api from './api'
import RootStore from './stores'

import showToast from './utils/toasts'

import Admin from './containers/Admin'
import Dashboard from './containers/Dashboard'
import Groups from './containers/Groups'
import Login from './containers/Login'
import Messages from './containers/Messages'
import People from './containers/People'

const App = () => {
  const [store] = useState(() => new RootStore({ api }))

  useEffect(() => {
    if (store.authToken) {
      store.loadMainData()
    } else {
      showToast('Необходимо авторизоваться', 'error')
      navigate('/login')
    }
  }, [store, store.authToken])

  return (
    <>
      <Router>
        <Redirect from="/" noThrow to={routes.dashboard} />
        <Login path="/login" store={store} />
        <Dashboard path={routes.dashboard} store={store} />
        <People path={routes.people} store={store} />
        <Groups path={routes.groups} store={store} />
        <Messages path={routes.messages} store={store} />
        <Admin path={routes.admin} store={store} />
      </Router>
      <ToastContainer />
    </>
  )
}

export default observer(App)
