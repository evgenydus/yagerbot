import React from 'react'
import CardWrapper from '../CardWrapper'

const MessageCard = ({ message }) => (
  <CardWrapper className="mb-2">
    <div>{message.title}</div>
  </CardWrapper>
)

export default MessageCard
