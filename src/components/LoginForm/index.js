import React from 'react'

import Button from '/components/UI/Button'


const LoginForm = () => {
  return (
    <form className="flex flex-col">
      <input className="input" type="text" placeholder="Ваш логин" />
      <input className="input" type="password" placeholder="Пароль" />
      <Button className="btn-primary mt-4 mx-auto">Войти</Button>
    </form>
  )
}

export default LoginForm
