import React, { useState } from 'react'
import { observer } from 'mobx-react'
import UserFormStore from '../../stores/Users/UserForm'
import CardWrapper from '../CardWrapper'
import FormField from '../UI/FormField'
import TextInput from '../UI/TextInput'
import Select from '../UI/Select'
import FormButtons from '../UI/FormButtons'

const UserForm = ({ store }) => {
  const [formStore] = useState(() => new UserFormStore(store.usersStore))

  const handleSubmit = event => {
    event.preventDefault()

    formStore.updateData()
  }

  const handleLabelChange = ({ target: { value } }) => {
    formStore.setLabel(value)
  }

  return (
    <CardWrapper className="flex max-w-sm">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mb-4">Редактирование пользователя</div>
        <div className="flex mb-4 text-sm">
          <FormField className="pr-2 truncate w-1/2" label="Ник в телеграме">
            @{formStore.user.username}
          </FormField>
          <FormField className="truncate w-1/2" label="Полное имя">
            {formStore.user.fullName}
          </FormField>
        </div>
        <FormField className="mb-4" label="Имя в системе*">
          <TextInput
            autoFocus
            className="w-full"
            onChange={handleLabelChange}
            required
            value={formStore.label}
          />

        </FormField>
        <FormField className="mb-4" label="Группы">
          <Select
            closeMenuOnSelect={false}
            isMulti
            // onChange={handleSelectChange}
            options={formStore.groupsAsOptions}
            placeholder="Выбери группы..."
          />
        </FormField>
        <FormButtons
          isLoading={formStore.isLoading}
          itemId={formStore.user.id}
          onCancel={formStore.cancelEdit}
        />
      </form>
    </CardWrapper>
  )
}

export default observer(UserForm)
