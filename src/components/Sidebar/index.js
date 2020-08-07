import React from 'react'
import { observer } from 'mobx-react'
import classnames from 'classnames'
import Logo from './Logo'
import Navigation from './Navigation'

const Sidebar = ({ className }) => (
  <div
    className={classnames(
      className,
      'border-l border-r flex-shrink-0 w-48 xs:absolute xs:bg-white xs:duration-300 xs:ease xs:h-full xs:transform xs:z-50',
    )}
  >
    <Logo />
    <Navigation />
  </div>
)

export default observer(Sidebar)
