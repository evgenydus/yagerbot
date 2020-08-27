import React from 'react'
import { observer } from 'mobx-react'
import MessageCard from './MessageCard'

const MessagesList = ({ messages }) => (
  <div className="gap-4 grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2">
    {messages.map(message => (
      <MessageCard key={message.id} message={message} />
    ))}
  </div>
)

export default observer(MessagesList)
