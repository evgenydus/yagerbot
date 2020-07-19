import React from 'react'
import { observer } from 'mobx-react'
import CreateGroup from './CreateGroup'

const GroupsContent = ({ store }) => {
  if (!store.groupsStore.isLoaded) {
    return <div className="p-4 text-sm">Загружаю...</div>
  }

  return (
    <div className="p-4">
      <div className="mb-4 text-sm">
        Группы нужны для того, чтобы было удобно рассылать сообщения. <br />
        Создай группу, добавь участников, затем при создании сообщения выбери группу, чтобы
        отправить информацию её участникам.
      </div>
      <CreateGroup groupsStore={store.groupsStore} />
    </div>
  )
}

export default observer(GroupsContent)
