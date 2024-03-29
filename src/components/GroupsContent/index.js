import React from 'react'
import { observer } from 'mobx-react'

import ManageGroup from './ManageGroup'
import GroupList from './GroupList'

const GroupsContent = ({ store }) => (
  <div className="p-4">
    <div className="mb-4 text-sm">
      Группы нужны для того, чтобы было удобно рассылать сообщения. <br />
      Создай группу, добавь участников, затем при создании сообщения выбери группу, чтобы отправить
      информацию её участникам.
    </div>
    <div className="mb-4">
      <GroupList groups={store.groupsStore.groups} />
    </div>
    <ManageGroup groupsStore={store.groupsStore} />
  </div>
)

export default observer(GroupsContent)
