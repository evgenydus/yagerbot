import React from 'react'
import { observer } from 'mobx-react'

import LoginForm from '../../components/LoginForm'

const Login = () => (
  <div className="bg-primary-light flex h-screen items-center justify-center m-auto">
    <div className="bg-white max-w-xl p-8 rounded-md shadow-lg">
      <div className="mb-8 text-2xl text-center">Представьтесь, пожалуйста</div>
      <LoginForm />
    </div>
  </div>
)

export default observer(Login)
