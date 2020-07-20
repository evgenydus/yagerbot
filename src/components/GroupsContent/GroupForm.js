import React, { useRef, useState } from 'react'
import { observer } from 'mobx-react'
import GroupFormStore from '../../stores/Groups/GroupForm'

import CardWrapper from '../CardWrapper'
import ColorPicker from '../UI/ColorPicker'
import FormField from '../UI/FormField'
import Select from '../UI/Select'
import TextInput from '../UI/TextInput'

import FormButtons from './FormButtons'

const GroupForm = ({ group, groupsStore, toggleForm }) => {
  const [formStore] = useState(() => new GroupFormStore(groupsStore, group))

  const nameInputRef = useRef(null)

  const handleNameChange = ({ target: { value } }) => formStore.setName(value)

  const handleColorChange = color => formStore.setColor(color)

  const handleSelectChange = optionsArray => {
    const userIds = optionsArray.map(option => option.value)
    formStore.setUserIds(userIds)
  }

  const handleSubmit = event => {
    event.preventDefault()

    if (formStore.isLoading) return

    if (formStore.id) {
      formStore.updateData()

      return
    }

    formStore
      .sendData()
      .then(toggleForm)
      .catch(() => {
        nameInputRef.current.focus()
      })
  }

  return (
    <CardWrapper className="flex max-w-sm">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mb-4">
          {formStore.id ? <div>Редактирование группы</div> : <div>Создание группы</div>}
        </div>
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
          <FormButtons
            groupId={formStore.id}
            isLoading={formStore.isLoading}
            onCancel={formStore.id ? formStore.cancelEdit : toggleForm}
          />
        </div>
      </form>
    </CardWrapper>
  )
}

export default observer(GroupForm)
