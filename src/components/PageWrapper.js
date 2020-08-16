import React from 'react'
import { observer } from 'mobx-react'

import Header from './Header'
import LoadIndicator from './LoadIndicator'
import Sidebar from './Sidebar'

const PageWrapper = ({ children, store }) => (
  <div className="flex max-w-screen-xl min-h-screen mx-auto">
    <Sidebar />
    <div className="bg-gray-100 border-r flex-grow">
      <Header />
      {store.isReady ? (
        <div>{children}</div>
      ) : (
        <div className="inline-block p-4">
          <LoadIndicator />
        </div>
      )}
    </div>
  </div>
)

export default observer(PageWrapper)
