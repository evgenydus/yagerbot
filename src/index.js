import React from 'react'
import ReactDOM from 'react-dom'
import { observerBatching } from 'mobx-react'

import App from './App'

import './fontAwesome'
import './styles/index.css'

observerBatching()

ReactDOM.render(<App />, document.getElementById('root'))

module.hot.accept()
