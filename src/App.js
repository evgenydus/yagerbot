import React, { useState } from 'react'
import RootStore from './stores'

import Login from './containers/Login'

const App = () => {
  const [store] = useState(() => new RootStore())

  return (
    <div>
      <Login />
    </div>
  )
}

export default App
