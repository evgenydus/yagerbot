import React, { useState } from 'react'
import { observer } from 'mobx-react'
import AdminFormStore from '../../stores/Admins/AdminForm'

import CardWrapper from '../CardWrapper'
import FormButtons from '../UI/FormButtons'
import FormField from '../UI/FormField'
import TextInput from '../UI/TextInput'

const AdminForm = ({ admin, adminStore }) => {
  const [formStore] = useState(() => new AdminFormStore(adminStore, admin))

  const handleUsernameChange = ({ target: { value } }) => formStore.setUsername(value)
  const handlePasswordChange = ({ target: { value } }) => formStore.setPassword(value)
  const handleFirstNameChange = ({ target: { value } }) => formStore.setFirstName(value)
  const handleLastNameChange = ({ target: { value } }) => formStore.setLastName(value)

  const handleSubmit = event => {
    event.preventDefault()

    if (formStore.isLoading) return

    if (formStore.id) {
      formStore.updateData()

      return
    }

    formStore.sendData().then(adminStore.toggleAdminCreation)
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
        <div className="mt-4">
          <FormButtons
            isLoading={formStore.isLoading}
            itemId={formStore.id}
            onCancel={formStore.id ? formStore.cancelEdit : adminStore.toggleAdminCreation}
          />
        </div>
      </form>
    </CardWrapper>
  )
}

export default observer(AdminForm)
