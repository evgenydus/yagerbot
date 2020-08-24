import React from 'react'
import { observer } from 'mobx-react'
import ManageMessage from './ManageMessage'
import MessagesList from './MessagesList'

const MessagesContent = ({ store }) => (
  <div className="p-4">
    <div className="mb-4 text-sm">В этом разделе лежат подготовленные к отправке сообщения.</div>
    <div className="mb-4">
      <MessagesList messages={store.messagesStore.messages} />
    </div>
    <ManageMessage messagesStore={store.messagesStore} />
  </div>
)

export default observer(MessagesContent)
