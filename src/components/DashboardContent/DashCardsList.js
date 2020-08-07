import React from 'react'
import { observer } from 'mobx-react'
import CardWrapper from '../CardWrapper'

const DashCardsList = ({ store }) => (
  <div className="gap-4 grid lg:grid-cols-4 sm:grid-cols-3 text-center xs:grid-cols-2">
    <CardWrapper>
      <div>Всего пользователей:</div>
      <div className="text-3xl text-primary">{store.totalUsersCount}</div>
    </CardWrapper>
    <CardWrapper className="flex-col inline-flex">
      <div>Всего групп:</div>
      <div className="text-3xl text-primary">{store.totalGroupsCount}</div>
    </CardWrapper>
  </div>
)

export default observer(DashCardsList)
