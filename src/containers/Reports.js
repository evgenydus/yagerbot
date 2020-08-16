import React from 'react'
import { observer } from 'mobx-react'

import PageWrapper from '../components/PageWrapper'

const Reports = ({ store }) => (
  <PageWrapper store={store}>
    <div className="p-4">Отчеты</div>
  </PageWrapper>
)

export default observer(Reports)
