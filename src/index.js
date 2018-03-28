import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import blogApp from './store/reducers'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(blogApp)
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
