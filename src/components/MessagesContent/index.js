import React from 'react'
import { observer } from 'mobx-react'
import ManageMessage from './ManageMessage'

const MessagesContent = ({ store }) => {
  return (
    <div className="p-4">
      <div className="mb-4 text-sm">
        В этом разделе лежат подготовленные к отправке сообщения.
      </div>
      <div className="mb-4">
        {/*<MessagesList />*/}
      </div>
      <ManageMessage messagesStore={store.messagesStore} />
    </div>
  )
}

export default observer(MessagesContent)
