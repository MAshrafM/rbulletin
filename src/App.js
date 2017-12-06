import React, { Component } from 'react'
import logo from './logo.svg'
import { BrowserRouter, Route, Switch } from 'react-router-dom' // eslint-disable-line
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import './App.css'

// redux logger helper function
const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

// dev tool extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

/* eslint-disable no-unused-vars */
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(logger, thunk))
)
/* eslint-disable no-unused-vars */

class App extends Component {
  render () {
    return (
      <Provider>
        <BrowserRouter>
          <div className='App'>
            <header className='App-header'>
              <img src={logo} className='App-logo' alt='logo' />
              <h1 className='App-title'>Welcome to React</h1>
            </header>
            <p className='App-intro'>
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
