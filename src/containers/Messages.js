import React from 'react'
import { observer } from 'mobx-react'

import PageWrapper from '../components/PageWrapper'

const Messages = ({ store }) => <PageWrapper>Сообщения</PageWrapper>

export default observer(Messages)
