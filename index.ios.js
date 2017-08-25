import React, { Component } from 'react'
import App from './src/App'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class todolistRedux extends Component {
  render() {
    return (
      <View>
        <App />
      </View>
    );
  }
}

AppRegistry.registerComponent('todolistRedux', () => todolistRedux)
