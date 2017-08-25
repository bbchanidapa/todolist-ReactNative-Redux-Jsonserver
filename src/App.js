import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import store from './createStore'

class App extends Component {
  render() {
    return (
      <Provider store={store}>

      </Provider>
    )
  }
}
export default App