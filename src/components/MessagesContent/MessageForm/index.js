import React from 'react'
import { observer } from 'mobx-react'

import Attachment from './Attachment'
import Button from '../../UI/Button'
import CardWrapper from '../../CardWrapper'
import FormField from '../../UI/FormField'
import TextInput from '../../UI/TextInput'

const MessageForm = ({ messagesStore }) => {
  return (
    <CardWrapper className="flex max-w-sm">
      <form
        className="w-full"
        onSubmit={event => {
          event.preventDefault()
        }}
      >
        <div className="mb-4">Создание сообщения</div>
        <FormField className="mb-4" label="Название">
          <TextInput autoFocus className="w-full" required />
        </FormField>
        <FormField className="mb-2" label="Текст сообщения">
          <textarea className="input-text input-text-sm py-1 w-full" required />
        </FormField>
        <FormField label="Вложения">
          <Attachment />
        </FormField>
        <div className="flex justify-end mt-3">
          <Button mode="gray" onClick={messagesStore.toggleMessageCreation}>Отмена</Button>
          <Button className="ml-2">Сохранить</Button>
        </div>
      </form>
    </CardWrapper>
  )
}

export default observer(MessageForm)
