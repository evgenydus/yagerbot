import React, { useState } from 'react'
import RootStore from './stores'

const App = () => {
  const [store] = useState(() => new RootStore())

  return (
    <div className="flex items-center justify-center h-screen">
      <input className="border rounded" type="text" />
    </div>
  )
}

export default App
