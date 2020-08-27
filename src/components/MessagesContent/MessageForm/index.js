import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { css } from '@emotion/core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AttachmentList from './AttachmentList'
import Button from '../../UI/Button'
import CardWrapper from '../../CardWrapper'
import FormButtons from '../../UI/FormButtons'
import FormField from '../../UI/FormField'
import MessageFormStore from '../../../stores/Messages/MessageForm'
import TextInput from '../../UI/TextInput'

const MessageForm = ({ messagesStore }) => {
  const [formStore] = useState(() => new MessageFormStore(messagesStore))

  const handleTitleChange = ({ target: { value } }) => {
    formStore.setTitle(value)
  }

  const handleTextChange = ({ target: { value } }) => formStore.setText(value)

  const handleSubmit = event => {
    event.preventDefault()

    if (formStore.id) {
      formStore.updateData()

      return
    }

    messagesStore.addMessage(formStore.requestPayload)
    messagesStore.toggleMessageCreation()
  }

  return (
    <CardWrapper className="flex max-w-sm">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mb-4">
          {formStore.id ? <div>Редактирование сообщения</div> : <div>Создание сообщения</div>}
        </div>
        <FormField className="mb-4" label="Название">
          <TextInput
            autoFocus
            className="w-full"
            onChange={handleTitleChange}
            required
            value={formStore.title}
          />
        </FormField>
        <FormField className="mb-2" label="Текст сообщения">
          <textarea
            className="input-text input-text-sm py-1 w-full"
            css={css`
              min-height: 5rem;
            `}
            onChange={handleTextChange}
            required
            value={formStore.text}
          />
        </FormField>
        <FormField label="Вложения">
          <AttachmentList formStore={formStore} />
          {formStore.isAddButtonVisible && (
            <Button
              className="h-6 opacity-50 mb-3 w-full"
              mode="secondary"
              onClick={formStore.addAttachment}
            >
              <FontAwesomeIcon icon={['far', 'plus']} />
            </Button>
          )}
        </FormField>
        <FormButtons
          itemId={formStore.id}
          onCancel={formStore.id ? formStore.cancelEdit : messagesStore.toggleMessageCreation}
        />
      </form>
    </CardWrapper>
  )
}

export default observer(MessageForm)
