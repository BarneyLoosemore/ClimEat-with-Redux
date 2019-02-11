import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import Root from './components/Root'

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(<Root store={store} />, document.querySelector('#root'))