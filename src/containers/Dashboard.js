import React from 'react'
import { observer } from 'mobx-react'

import PageWrapper from '../components/PageWrapper'

const Dashboard = ({ store }) => (
  <PageWrapper>
    <div className="p-4">Dashboard</div>
  </PageWrapper>
)

export default observer(Dashboard)
