import React, { useState } from 'react'
import { observer } from 'mobx-react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Attachment from './Attachment'
import Button from '../../UI/Button'
import CardWrapper from '../../CardWrapper'
import FormField from '../../UI/FormField'
import FormButtons from '../../UI/FormButtons'
import TextInput from '../../UI/TextInput'
import MessageFormStore from '../../../stores/Messages/MessageForm'

const MessageForm = ({ messagesStore }) => {
  const [formStore] = useState(() => new MessageFormStore(messagesStore))

  const handleTitleChange = ({ target: { value } }) => {
    formStore.setTitle(value)
  }

  const handleTextChange = ({ target: { value } }) => formStore.setText(value)

  const handleSubmit = event => {
    event.preventDefault()
    messagesStore.addMessage(formStore.requestPayload)
  }

  return (
    <CardWrapper className="flex max-w-sm">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mb-4">Создание сообщения</div>
        <FormField className="mb-4" label="Название">
          <TextInput autoFocus className="w-full" onChange={handleTitleChange} required />
        </FormField>
        <FormField className="mb-2" label="Текст сообщения">
          <textarea
            className="input-text input-text-sm py-1 w-full"
            onChange={handleTextChange}
            required
          />
        </FormField>
        <FormField label="Вложения">
          <Attachment formStore={formStore} />
          <Button className="h-6 opacity-50 mb-3 w-full" mode="secondary">
            <FontAwesomeIcon icon={['far', 'plus']} />
          </Button>
        </FormField>
        <FormButtons itemId={formStore.id} onCancel={messagesStore.toggleMessageCreation} />
      </form>
    </CardWrapper>
  )
}

export default observer(MessageForm)
