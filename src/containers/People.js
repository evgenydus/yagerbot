import React from 'react'
import { observer } from 'mobx-react'

import PageWrapper from '../components/PageWrapper'

const People = ({ store }) => <PageWrapper>Люди</PageWrapper>

export default observer(People)
