import React from 'react'
import { observer } from 'mobx-react'
import { useLocation } from '@reach/router'
import { navigationItems, pageNames } from '../constants'

const Header = () => {
  const location = useLocation()
  const nameKey = navigationItems.find(x => location.pathname.includes(x))

  return (
    <div className="bg-white border-b flex h-16 items-center px-4 text-xl">
      {pageNames[nameKey]}
    </div>
  )
}

export default observer(Header)
