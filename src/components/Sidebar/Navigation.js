import React from 'react'
import { observer } from 'mobx-react'
import { navigationItems, pageIcons, pageNames, routes } from '../../constants'
import ExactNavLink from './ExactNavLink'

const Navigation = () => (
  <div className="p-4 text-sm">
    {navigationItems.map(item => (
      <ExactNavLink key={item} icon={pageIcons[item]} label={pageNames[item]} to={routes[item]} />
    ))}
  </div>
)

export default observer(Navigation)
