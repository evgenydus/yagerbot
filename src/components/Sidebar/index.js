import React from 'react'
import { observer } from 'mobx-react'
import classnames from 'classnames'
import Logo from './Logo'
import Navigation from './Navigation'

const Sidebar = ({ className }) => (
  <div
    className={classnames(
      className,
      'border-l border-r flex-shrink-0 h-full sm:absolute sm:bg-white sm:duration-300 sm:ease sm:transform sm:z-50 w-48',
    )}
  >
    <Logo />
    <Navigation />
  </div>
)

export default observer(Sidebar)
