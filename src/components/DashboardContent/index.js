import React from 'react'
import { observer } from 'mobx-react'
import LoadIndicator from '../LoadIndicator'
import DashCardsList from './DashCardsList'

const DashboardContent = ({ store }) => {
  return (
    <div className="p-4">
      {store.isReady ? (
        <DashCardsList store={store} />
      ) : (
        <div className="inline-block p-4">
          <LoadIndicator />
        </div>
      )}
    </div>
  )
}

export default observer(DashboardContent)
