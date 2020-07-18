import React from 'react'
import { observer } from 'mobx-react'

import LoginForm from '../components/LoginForm'

const Login = ({ store }) => (
  <div className="bg-primary-light flex h-screen items-center justify-center m-auto">
    <div className="bg-white max-w-xl p-8 rounded-md shadow-lg">
      <div className="mb-8 text-2xl text-center">Yager Group Bot</div>
      <LoginForm store={store} />
    </div>
  </div>
)

export default observer(Login)
