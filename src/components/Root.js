import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App/App'

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
)

Root.PropTypes = {
  store: PropTypes.object.isRequired
}

export default Root