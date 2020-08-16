import React from 'react'
import { observer } from 'mobx-react'

import MessagesContent from '../components/MessagesContent'
import PageWrapper from '../components/PageWrapper'

const Messages = ({ store }) => (
  <PageWrapper store={store}>
    <MessagesContent store={store} />
  </PageWrapper>
)

export default observer(Messages)
