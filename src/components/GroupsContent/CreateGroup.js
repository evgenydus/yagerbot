import React, { useState, useRef } from 'react'
import { observer } from 'mobx-react'
import CreateGroupForm from '../../stores/Groups/CreateGroupForm'

import Button from '../UI/Button'
import CardWrapper from '../CardWrapper'
import ColorPicker from '../UI/ColorPicker'
import FormField from '../UI/FormField'
import Select from '../UI/Select'
import TextInput from '../UI/TextInput'
import FormButtons from './FormButtons'

const CreateGroup = ({ groupsStore }) => {
  const [isCreation, setCreation] = useState(false)

  const toggleCreation = () => {
    setCreation(!isCreation)
  }

  const [formStore] = useState(() => new CreateGroupForm(groupsStore, () => {}))

  const nameInputRef = useRef(null)

  if (!isCreation) return <Button onClick={toggleCreation}>Новая группа</Button>

  const handleNameChange = ({ target: { value } }) => formStore.setName(value)

  const handleColorChange = color => formStore.setColor(color)

  const handleSelectChange = optionsArray => {
    const userIds = optionsArray.map(option => option.value)
    formStore.setUserIds(userIds)
  }

  const handleSubmit = event => {
    event.preventDefault()
    formStore
      .sendData()
      .then(toggleCreation)
      .catch(() => {
        nameInputRef.current.focus()
      })
  }

  return (
    <CardWrapper className="flex max-w-sm">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mb-4">Создание группы</div>
        <div className="flex mb-4">
          <FormField className="flex-grow" label="Название*">
            <TextInput
              ref={nameInputRef}
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
        <div className="mt-4">
          <FormButtons isLoading={formStore.isLoading} onCancel={toggleCreation} />
        </div>
      </form>
    </CardWrapper>
  )
}

export default observer(CreateGroup)
