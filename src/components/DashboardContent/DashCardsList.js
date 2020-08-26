import React from 'react'
import { observer } from 'mobx-react'

import CardWrapper from '../CardWrapper'

const DashCardsList = ({ store }) => (
  <div className="grid gap-4 grid-cols-4 text-center">
    <CardWrapper>
      <div>Всего пользователей:</div>
      <div className="text-3xl text-primary">{store.totalUsersCount}</div>
    </CardWrapper>
    <CardWrapper className="flex-col inline-flex">
      <div>Всего групп:</div>
      <div className="text-3xl text-primary">{store.totalGroupsCount}</div>
    </CardWrapper>
    <CardWrapper className="flex-col inline-flex">
      <div>Всего сообщений:</div>
      <div className="text-3xl text-primary">{store.totalMessagesCount}</div>
    </CardWrapper>
  </div>
)

export default observer(DashCardsList)
