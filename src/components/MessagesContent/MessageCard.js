import React from 'react'
import CardWrapper from '../CardWrapper'
import ActionIcons from '../UI/ActionIcons'

const MessageCard = ({ message }) => (
  <CardWrapper className="group relative">
    <ActionIcons item={message} />
    <div className="mb-1 text-sm truncate">{message.title}</div>
    <div className="text-gray-500 text-xs">{`Вложений: ${message.attachments.length}`}</div>
  </CardWrapper>
)

export default MessageCard
