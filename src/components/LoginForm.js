import React, { useCallback, useState } from 'react'
import { navigate } from '@reach/router'
import { observer } from 'mobx-react'

import LoginFormStore from '../stores/LoginForm'

import Button from './UI/Button'
import TextInput from './UI/TextInput'

const LoginForm = ({ store }) => {
  const goToDashboard = () => navigate('/dashboard')

  const [formStore] = useState(
    () => new LoginFormStore({ onSuccess: goToDashboard, rootStore: store }),
  )

  const handleUsernameChange = useCallback(
    ({ target: { value } }) => {
      formStore.setUsername(value)
    },
    [formStore],
  )

  const handlePasswordChange = useCallback(
    ({ target: { value } }) => {
      formStore.setPassword(value)
    },
    [formStore],
  )

  const handleSubmit = event => {
    event.preventDefault()

    formStore.sendData()
  }

  return (
    <form className="flex flex-col w-56" onSubmit={handleSubmit}>
      <TextInput
        autoFocus
        className="mb-4"
        onChange={handleUsernameChange}
        placeholder="Логин"
        value={formStore.username}
      />
      <TextInput
        className="mb-4"
        onChange={handlePasswordChange}
        placeholder="Пароль"
        type="password"
        value={formStore.password}
      />
      {formStore.errorMessage && (
        <div className="my-1 text-red-500 tracking-tight text-xs text-center">
          {formStore.errorMessage}
        </div>
      )}
      <div className="flex h-8 items-center justify-center mt-2">
        {formStore.isLoading ? (
          <div className="text-sm">Подожди...</div>
        ) : (
          <Button type="submit">Войти</Button>
        )}
      </div>
    </form>
  )
}

export default observer(LoginForm)
