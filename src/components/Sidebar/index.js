import React from 'react'
import { observer } from 'mobx-react'
import Logo from './Logo'
import Navigation from './Navigation'

const Sidebar = () => (
  <div className="border-r border-l w-48">
    <Logo />
    <Navigation />
  </div>
)

export default observer(Sidebar)
