import React from 'react'

import LoginForm from '../../components/LoginForm'

const Login = () => {
  return (
    <div className="bg-white max-w-xl px-16 py-12 rounded-md shadow-lg w-10/12">
      <h2 className="mb-8 text-3xl text-center">Представьтесь, пожалуйста</h2>
      <LoginForm />
    </div>
  )
}

export default Login
