import React, { useState } from 'react'
import { observer } from 'mobx-react'
import CreateGroupForm from '../../stores/Groups/CreateGroupForm'

import Button from '../UI/Button'
import CardWrapper from '../CardWrapper'
import ColorPicker from '../UI/ColorPicker'
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

  const handleColorChange = color => formStore.setColor(color)

  const handleSelectChange = optionsArray => {
    const userIds = optionsArray.map(option => option.value)
    formStore.setUserIds(userIds)
  }

  const handleSubmit = event => {
    event.preventDefault()
    formStore.sendData().then(toggleCreation)
  }

  return (
    <CardWrapper className="flex max-w-sm">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mb-4">Создание группы</div>
        <div className="flex mb-4">
          <FormField className="flex-grow" label="Название*">
            <TextInput
              autoFocus
              className="w-full"
              onChange={handleNameChange}
              required
              value={formStore.name}
            />
          </FormField>
          <FormField className="ml-4" label="Цвет">
            <ColorPicker onChange={handleColorChange} value={formStore.color} />
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
