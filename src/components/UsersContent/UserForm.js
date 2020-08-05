import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { css } from '@emotion/core'

import UserFormStore from '../../stores/Users/UserForm'
import CardWrapper from '../CardWrapper'
import FormField from '../UI/FormField'
import TextInput from '../UI/TextInput'
import Select from '../UI/Select'
import FormButtons from '../UI/FormButtons'

const GroupOption = ({ color, label }) => (
  <div className="flex items-center">
    <div
      className="h-3 mr-2 rounded-full w-3"
      css={css`
        background-color: ${color};
      `}
    />
    <div>{label}</div>
  </div>
)

const UserForm = ({ store }) => {
  const [formStore] = useState(() => new UserFormStore(store.usersStore))

  const handleSubmit = event => {
    event.preventDefault()

    formStore.updateData()
  }

  const handleLabelChange = ({ target: { value } }) => {
    formStore.setLabel(value)
  }

  const handleSelectChange = optionsArray => {
    const groupIds = optionsArray ? optionsArray.map(option => option.value) : []
    formStore.setGroupIds(groupIds)
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
            formatOptionLabel={GroupOption}
            isMulti
            onChange={handleSelectChange}
            options={formStore.groupsAsOptions}
            placeholder="Выбери группы..."
            value={formStore.selectedGroups}
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
