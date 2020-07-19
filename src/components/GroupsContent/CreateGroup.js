import React, { useState } from 'react'
import { observer } from 'mobx-react'
import CreateGroupForm from '../../stores/Groups/CreateGroupForm'

import Button from '../UI/Button'
import CardWrapper from '../CardWrapper'
import FormField from '../UI/FormField'
import Select from '../UI/Select'
import TextInput from '../UI/TextInput'

const CreateGroup = ({ groupsStore }) => {
  const [isCreation, setCreation] = useState(false)

  const toggleCreation = () => {
    setCreation(!isCreation)
  }

  const [formStore] = useState(() => new CreateGroupForm(groupsStore, () => {}))

  if (!isCreation) return <Button onClick={toggleCreation}>Новая группа</Button>

  const handleNameChange = ({ target: { value } }) => formStore.setName(value)

  const handleSelectChange = optionsArray => {
    const userIds = optionsArray.map(option => option.value)
    formStore.setUserIds(userIds)
  }

  return (
    <CardWrapper className="inline-flex max-w-sm">
      <form onSubmit={event => event.preventDefault()}>
        <div className="mb-4">Создание группы</div>
        <div className="flex justify-between mb-4">
          <FormField label="Название*">
            <TextInput autoFocus onChange={handleNameChange} required value={formStore.name} />
          </FormField>
          <FormField className="ml-4" label="Цвет">
            <TextInput onChange={() => {}} value={formStore.color} />
          </FormField>
        </div>
        <div className="text-sm">
          <Select
            closeMenuOnSelect={false}
            isMulti
            onChange={handleSelectChange}
            options={formStore.usersAsOptions}
            placeholder="Выбери пользователей..."
          />
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

export default observer(CreateGroup)
