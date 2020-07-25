import React from 'react'
import { observer } from 'mobx-react'

import DashboardContent from '../components/DashboardContent'
import PageWrapper from '../components/PageWrapper'

const Dashboard = ({ store }) => (
  <PageWrapper>
    <DashboardContent store={store} />
  </PageWrapper>
)

export default observer(Dashboard)
