import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './components/store/index.jsx'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
