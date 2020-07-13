import React, { useState } from 'react'
import RootStore from './stores'

const App = () => {
  const [store] = useState(() => new RootStore())

  return <h2>Hello</h2>
}

export default App
