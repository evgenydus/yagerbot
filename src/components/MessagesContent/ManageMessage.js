import React from 'react'
import { observer } from 'mobx-react'

import Button from '../UI/Button'
import MessageForm from './MessageForm'

const ManageMessage = ({ messagesStore }) => {
  if (messagesStore.messageToEdit)
    return (
      <MessageForm
        key="edit-message"
        message={messagesStore.messageToEdit}
        messagesStore={messagesStore}
      />
    )

  if (!messagesStore.isMessageCreation)
    return (
      <Button className="xs:mx-auto" onClick={messagesStore.toggleMessageCreation}>
        Новое сообщение
      </Button>
    )

  return <MessageForm key="create-message" messagesStore={messagesStore} />
}

export default observer(ManageMessage)
