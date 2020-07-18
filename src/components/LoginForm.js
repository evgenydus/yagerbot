import React, { useCallback, useState } from 'react'
import { navigate } from '@reach/router'
import { observer } from 'mobx-react'

import LoginFormStore from '../stores/LoginForm'

import Button from './UI/Button'

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
      <input
        autoFocus
        className="input-text input-text-sm mb-4"
        onChange={handleUsernameChange}
        placeholder="Логин"
        type="text"
        value={formStore.username}
      />
      <input
        className="input-text input-text-sm mb-4"
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
      <div className="flex h-10 items-center justify-center mt-4">
        {formStore.isLoading ? (
          <div className="text-sm">Подожди...</div>
        ) : (
          <Button className="btn-primary" type="submit">
            Войти
          </Button>
        )}
      </div>
    </form>
  )
}

export default observer(LoginForm)
