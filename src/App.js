import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react'
import RootStore from './stores'

import Login from './containers/Login'

const App = () => {
  const [store] = useState(() => new RootStore())

  useEffect(() => {
    store.usersStore.loadUsers()
  }, [store.usersStore])

  return (
    <div>
      <Login />
    </div>
  )
}

export default observer(App)
