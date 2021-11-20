import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import { Provider } from 'react-redux'
import App from './App'

import storeFactory from './redux/store'
import { BrowserRouter as Router } from 'react-router-dom'

const reduxStore = storeFactory()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
