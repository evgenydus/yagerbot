import React, { useState } from 'react'
import { observer } from 'mobx-react'
import CreateAdminForm from '../../stores/Admins/CreateAdminForm'

import Button from '../UI/Button'
import CardWrapper from '../CardWrapper'
import FormField from '../UI/FormField'
import TextInput from '../UI/TextInput'

const CreateAdmin = ({ adminStore }) => {
  const [isCreation, setCreation] = useState(false)
  const [formStore] = useState(() => new CreateAdminForm(adminStore))

  const toggleCreation = () => {
    setCreation(!isCreation)
  }

  if (!isCreation) return <Button onClick={toggleCreation}>Новый админ</Button>

  const handleUsernameChange = ({ target: { value } }) => formStore.setUsername(value)
  const handlePasswordChange = ({ target: { value } }) => formStore.setPassword(value)
  const handleFirstNameChange = ({ target: { value } }) => formStore.setFirstName(value)
  const handleLastNameChange = ({ target: { value } }) => formStore.setLastName(value)

  const handleSubmit = event => {
    event.preventDefault()

    formStore.sendData().then(toggleCreation)
  }

  return (
    <CardWrapper className="inline-flex">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">Создание админа</div>
        <div className="flex mb-4">
          <FormField label="Логин*">
            <TextInput
              autoFocus
              onChange={handleUsernameChange}
              required
              value={formStore.username}
            />
          </FormField>
          <FormField className="ml-4" label="Пароль*">
            <TextInput
              onChange={handlePasswordChange}
              required
              type="password"
              value={formStore.password}
            />
          </FormField>
        </div>
        <div className="flex">
          <FormField label="Имя">
            <TextInput onChange={handleFirstNameChange} value={formStore.firstName} />
          </FormField>
          <FormField className="ml-4" label="Фамилия">
            <TextInput onChange={handleLastNameChange} value={formStore.lastName} />
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
