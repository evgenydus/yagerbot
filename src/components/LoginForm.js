import React, { useCallback, useState } from 'react'
import { observer } from 'mobx-react'

import LoginFormStore from '../stores/LoginForm'

import Button from './UI/Button'
import TextInput from './UI/TextInput'
import LoadIndicator from './LoadIndicator'

const LoginForm = ({ store }) => {
  const [formStore] = useState(() => new LoginFormStore({ rootStore: store }))

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
      <div className="mt-2">
        {formStore.isLoading ? (
          <LoadIndicator />
        ) : (
          <Button className="mx-auto" type="submit">
            Войти
          </Button>
        )}
      </div>
    </form>
  )
}

export default observer(LoginForm)
