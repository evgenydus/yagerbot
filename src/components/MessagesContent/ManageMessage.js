import React from 'react'
import { observer } from 'mobx-react'

import Button from '../UI/Button'
import MessageForm from './MessageForm'

const ManageMessage = ({ messagesStore }) => {
  if (!messagesStore.isMessageCreation)
    return <Button onClick={messagesStore.toggleMessageCreation}>Новое сообщение</Button>

  return <MessageForm messagesStore={messagesStore} />
}

export default observer(ManageMessage)
