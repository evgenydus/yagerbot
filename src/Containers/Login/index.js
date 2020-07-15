import React from 'react'

import LoginForm from '/components/LoginForm'

const Login = () => {
  return (
    <div className="bg-white max-w-xl p-8 rounded-md shadow-lg">
      <div className="mb-8 text-2xl text-center">Представьтесь, пожалуйста</div>
      <LoginForm />
    </div>
  )
}

export default Login
