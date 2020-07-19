import React, { useState } from 'react'
import { observer } from 'mobx-react'
import CardWrapper from '../CardWrapper'
import FormField from '../UI/FormField'
import TextInput from '../UI/TextInput'
import Button from '../UI/Button'

const CreateAdmin = () => {
  const [isCreation, setCreation] = useState(false)

  const toggleCreation = () => {
    setCreation(!isCreation)
  }

  if (!isCreation) return <Button onClick={toggleCreation}>Новый админ</Button>

  return (
    <CardWrapper className="inline-flex">
      <form onSubmit={event => event.preventDefault()}>
        <div className="mb-4">Создание админа</div>
        <div className="flex mb-4">
          <FormField label="Логин*">
            <TextInput autoFocus required />
          </FormField>
          <FormField className="ml-4" label="Пароль*">
            <TextInput required type="password" />
          </FormField>
        </div>
        <div className="flex">
          <FormField label="Имя">
            <TextInput />
          </FormField>
          <FormField className="ml-4" label="Фамилия">
            <TextInput />
          </FormField>
        </div>
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

export default observer(CreateAdmin)
