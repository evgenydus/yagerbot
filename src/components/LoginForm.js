import React from 'react'
import { navigate } from '@reach/router'

import Button from './UI/Button'

const LoginForm = () => {
  const handleSubmit = event => {
    event.preventDefault()
    navigate('/dashboard')
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input className="input-text input-text-sm mb-4" placeholder="Ваш логин" type="text" />
      <input className="input-text input-text-sm mb-4" placeholder="Пароль" type="password" />
      <Button className="btn-primary mt-4 mx-auto" type="submit">
        Войти
      </Button>
    </form>
  )
}

export default LoginForm
