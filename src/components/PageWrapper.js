import React, { useState } from 'react'
import { observer } from 'mobx-react'

import Backdrop from './UI/Backdrop'
import Header from './Header'
import LoadIndicator from './LoadIndicator'
import Sidebar from './Sidebar'

const PageWrapper = ({ children, store }) => {
  const [isSideOpen, setIsSideOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSideOpen(prevState => !prevState)
  }

  const closeSidebar = () => {
    setIsSideOpen(false)
  }

  return (
    <div className="flex max-w-screen-xl min-h-screen mx-auto">
      <Sidebar className={isSideOpen ? 'xs:translate-x-0' : 'xs:-translate-x-full'} />
      <div className="bg-gray-100 border-r flex-grow">
        <Header toggleSidebar={toggleSidebar} />
        {store.isReady ? (
          <div>{children}</div>
        ) : (
          <div className="inline-block p-4">
            <LoadIndicator />
          </div>
        )}
      </div>
      <Backdrop clicked={closeSidebar} isVisible={isSideOpen} />

    </div>
  )
}
export default observer(PageWrapper)
