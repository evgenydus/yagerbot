import React from 'react'

import LoginForm from '/components/LoginForm'

const Login = () => {
  return (
    <div className="bg-primary-light flex h-screen items-center justify-center m-auto">
      <div className="bg-white max-w-xl p-8 rounded-md shadow-lg">
        <div className="mb-8 text-2xl text-center">Представьтесь, пожалуйста</div>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
