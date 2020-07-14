import React from 'react'

import Button from '/components/UI/Button'

const cInput = 'border-b mb-6 p-1'

const LoginForm = () => {
  return (
    <form className="flex flex-col">
      <input className={cInput} type="text" placeholder="Ваш логин" />
      <input className={cInput} type="password" placeholder="Пароль" />
      <Button className="bg-green-400 hover:bg-green-500 mt-4 mx-auto">Войти</Button>
    </form>
  )
}

export default LoginForm
