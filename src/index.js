import React from 'react'
import ReactDOM from 'react-dom' // eslint-disable-line import/no-unresolved
import { hot } from 'react-hot-loader'
import { observerBatching } from 'mobx-react'

import App from './App'

import './fontAwesome'
import './styles/index.css'

observerBatching()

const HotApp = hot(module)(App)

ReactDOM.render(<HotApp />, document.getElementById('root'))

module.hot.accept()
