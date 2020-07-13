import React, { useState } from 'react'
import RootStore from './stores'

import Login from './Containers/Login'

const App = () => {
  const [store] = useState(() => new RootStore())

  return (
    <div className="flex items-center justify-center h-screen w-9/12 m-auto">
      <Login />
    </div>
  )
}

export default App
