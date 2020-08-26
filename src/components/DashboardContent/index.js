import React from 'react'
import { observer } from 'mobx-react'

import DashCardsList from './DashCardsList'
import LoadIndicator from '../LoadIndicator'

const DashboardContent = ({ store }) => {
  if (!store.isReady) {
    return (
      <div className="inline-block p-4 xs:block xs:mx-auto">
        <LoadIndicator />
      </div>
    )
  }

  return (
    <div className="p-4">
      <DashCardsList store={store} />
    </div>
  )
}

export default observer(DashboardContent)
