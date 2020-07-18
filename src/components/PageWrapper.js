import React from 'react'
import { observer } from 'mobx-react'
import Sidebar from './Sidebar'
import Header from './Header'

const PageWrapper = ({ children }) => (
  <div className="flex max-w-screen-xl min-h-screen mx-auto">
    <Sidebar />
    <div className="bg-gray-100 border-r flex-grow">
      <Header />
      <div className="p-4">{children}</div>
    </div>
  </div>
)

export default observer(PageWrapper)
