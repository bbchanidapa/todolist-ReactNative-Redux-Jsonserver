import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Item, Input } from 'native-base'
import { connect } from 'react-redux'
import { editItemAction } from '../actions/index'


class ItemTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.value
    }
  }

  render() {
    return (
      <View>
        <Text>{this.props.value}</Text>
      </View>
    )
  }
}

mapStateToProps = (state) => {
  return { todos: [...state.todos] }
}

mapDispatchToProps = (dispatch, ownProps) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ItemTodo)