import React from 'react'
import { observer } from 'mobx-react'
import DashCardsList from './DashCardsList'

const DashboardContent = ({ store }) => (
  <div className="p-4">
    <DashCardsList store={store} />
  </div>
)

export default observer(DashboardContent)
