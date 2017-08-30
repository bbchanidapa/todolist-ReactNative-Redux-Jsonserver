import React, { Component } from 'react'
import { View } from 'react-native'
import { 
  Item, 
  Input, 
  Content, 
  Button,
  Text 
} from 'native-base'
import { connect } from 'react-redux'
import { editItemAction } from '../actions/index'

class EditTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.onChangeEdit.value,
      id: this.props.onChangeEdit.id
    }
  }
  render() {
    return (
      <View>
        <Item>
          <Input 
            value={this.state.text}
            onChangeText={(text) => { this.setState({text: text}) }}
          />
        </Item>
        <Button small info 
          onPress={()=> {
            this.props.onEditTodo({id: this.state.id, text: this.state.text}) 
            this.props.onEdit('add')
            this.props.onChangeMode('add')
          }}><Text> save </Text>
        </Button>
      </View>
    )
  }
}

mapStateToProps = (state) => {
  return { todos: state.todos }
}

mapDispatchToProps = (dispatch, ownProps) => ({
  onEditTodo: (data) => {
		dispatch(editItemAction(data))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(EditTodo)