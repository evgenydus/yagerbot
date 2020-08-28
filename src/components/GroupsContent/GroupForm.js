import React, { useEffect, useRef, useState } from 'react'
import { observer } from 'mobx-react'
import GroupFormStore from '../../stores/Groups/GroupForm'

import ColorPicker from '../UI/ColorPicker'
import FormButtons from '../UI/FormButtons'
import FormField from '../UI/FormField'
import Select from '../UI/Select'
import TextInput from '../UI/TextInput'

const GroupForm = ({ groupsStore }) => {
  const [formStore] = useState(() => new GroupFormStore(groupsStore))

  useEffect(() => {
    if (groupsStore.groupToEdit) {
      formStore.setFormData(groupsStore.groupToEdit)
    }
  }, [])

  const nameInputRef = useRef(null)

  const handleNameChange = ({ target: { value } }) => formStore.setName(value)

  const handleColorChange = color => formStore.setColor(color)

  const handleSelectChange = optionsArray => {
    const userIds = optionsArray ? optionsArray.map(option => option.value) : []
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
      .then(groupsStore.formModal.closeModal)
      .catch(() => {
        nameInputRef.current.focus()
      })
  }

  return (
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
      <FormField className="mb-4" label="Пользователи">
        <Select
          closeMenuOnSelect={false}
          isMulti
          onChange={handleSelectChange}
          options={formStore.usersAsOptions}
          placeholder="Выбери пользователей..."
          value={formStore.selectedUsers}
        />
      </FormField>
      <FormButtons
        isLoading={formStore.isLoading}
        itemId={formStore.id}
        onCancel={groupsStore.formModal.closeModal}
      />
    </form>
  )
}

export default observer(GroupForm)
