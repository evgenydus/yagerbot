import React from 'react'
import { observer } from 'mobx-react'

import PageWrapper from '../components/PageWrapper'
import UsersContent from '../components/UsersContent'
import { ToastContainer } from 'react-toastify'

const People = ({ store }) => (
  <PageWrapper>
    <UsersContent store={store} />
    <ToastContainer />
  </PageWrapper>
)

export default observer(People)
