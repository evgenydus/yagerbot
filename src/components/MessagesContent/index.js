import React from 'react'
import { observer } from 'mobx-react'

const MessagesContent = ({ store }) => {
  return (
    <div className="p-4">
      <div className="mb-4 text-sm">
        В этом разделе лежат подготовленные к отправке сообщения.
      </div>
      <div className="mb-4">
        {/*<MessagesList />*/}
      </div>
      {/*<ManageMessage />*/}
    </div>
  )
}

export default observer(MessagesContent)
