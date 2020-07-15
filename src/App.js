import React, { useState, useEffect } from 'react'
import RootStore from './stores'

import Login from './containers/Login'

const App = () => {
  const [store] = useState(() => new RootStore())

  useEffect(() => {
    store.users.loadUsers()
  }, [store.users])

  return (
    <div>
      <Login />
    </div>
  )
}

export default App
