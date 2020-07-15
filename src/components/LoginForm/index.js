import React from 'react'

import Button from '/components/UI/Button'

const LoginForm = () => {
  return (
    <form className="flex flex-col">
      <input className="input-text input-text-sm mb-4" placeholder="Ваш логин" type="text" />
      <input className="input-text input-text-sm mb-4" placeholder="Пароль" type="password" />
      <Button className="btn-primary mt-4 mx-auto">Войти</Button>
    </form>
  )
}

export default LoginForm
