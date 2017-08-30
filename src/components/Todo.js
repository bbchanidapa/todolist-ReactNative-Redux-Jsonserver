import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Container, Button, Text, Content, CheckBox, Body, ListItem } from 'native-base'
import { delItemAction, toggleAction } from '../actions/index'
import ItemTodo from './ItemTodo'
import EditTodo from './EditTodo'

class Todo extends Component {
  constructor(props){
    super(props)
    this.state = {
      mode: '',
      id: '',
      value: '',
      toggle: false
    }
  }

  onChangeMode (event){
    this.setState({ mode: event })
  }

  listItem (){
    return this.props.todos.map((arr, index)=>{
      return (
          <View key={index}>
            <ListItem>
              <CheckBox 
                checked={ this.props.todos[index].isToggle } 
                onPress={()=> {
                  const isToggle = this.props.todos[index].isToggle
                  this.props.onToggle({id: index, isToggle: isToggle})
                }}/> 
              <Body style={{flex: 1, flexDirection: 'row'}}>
                <ItemTodo value={arr.text} idCheck={arr.id} onClickEdit={this.state.edit}/>
                <Button small danger onPress={()=> this.props.onDelete(index)}><Text> x </Text></Button>
                <Button small transparent onPress={()=> {
                  this.setState({edit: !this.edit, id: index , value: arr.text})
                  this.props.onEdit('edit')
                  this.onChangeMode('edit')
                  }
                  }>
                <Text>edit</Text>
                </Button>
              </Body>
            </ListItem>
          </View>
      )
    })
  }

  render() {
    return (
      <View>
        { this.state.mode == 'edit' ?
          <EditTodo onChangeEdit={this.state} onEdit={(e)=>this.props.onEdit(e)} onChangeMode={(e)=>this.onChangeMode(e)}/> :
          this.listItem()
        }
      </View>
    )
  }
}

mapStateToProps = (state) => {
  return { todos: [...state.todos]}
}

mapDispatchToProps = (dispatch, ownProps) => ({
	onDelete: (id) => {
		dispatch(delItemAction(id))
  },
  onToggle: (event) => {
    dispatch(toggleAction(event))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)