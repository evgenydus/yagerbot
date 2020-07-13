import React from 'react'

import Button from '../UI/Button/Button'

const LoginForm = () => {
  return (
    <form className="flex flex-col">
      <input className="border-b mb-6 p-1" type="text" placeholder="Ваш логин" />
      <input className="border-b mb-12 p-1" type="password" placeholder="Пароль" />
      <Button classList="bg-green-400 hover:bg-green-500 m-auto w-56">Войти</Button>
    </form>
  )
}

export default LoginForm
