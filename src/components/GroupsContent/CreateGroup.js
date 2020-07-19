import React, { useState } from 'react'
import { observer } from 'mobx-react'
import Button from '../UI/Button'
import CardWrapper from '../CardWrapper'
import FormField from '../UI/FormField'
import TextInput from '../UI/TextInput'

const CreateGroup = () => {
  const [isCreation, setCreation] = useState(false)

  const toggleCreation = () => {
    setCreation(!isCreation)
  }

  if (!isCreation) return <Button onClick={toggleCreation}>Новая группа</Button>

  return (
    <CardWrapper className="inline-flex">
      <form onSubmit={event => event.preventDefault()}>
        <div className="mb-4">Создание группы</div>
        <div className="flex mb-4">
          <FormField label="Название*">
            <TextInput autoFocus required />
          </FormField>
          <FormField className="ml-4" label="Цвет">
            <TextInput />
          </FormField>
        </div>
        <div className="text-sm">[Селект с добавлением пользователей]</div>
        <div className="flex justify-end mt-4">
          <Button mode="gray" onClick={toggleCreation}>
            Отмена
          </Button>
          <Button className="ml-2" type="submit">
            Создать
          </Button>
        </div>
      </form>
    </CardWrapper>
  )
}

export default observer(CreateGroup)
