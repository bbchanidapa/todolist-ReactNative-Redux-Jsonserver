import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import { createStore } from 'redux'
import { connect } from 'react-redux'
import Todo  from '../components/Todo'
import { addItemAction } from '../actions/index'
  
class AppContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text: '',
			mode: 'add'
		}
	}

	onEdit(event) {
		this.setState({mode: event})
	}

  render() {
    return (
      <View>
				{ this.state.mode == 'add'?
				<View>
					<TextInput onChangeText={(e) => { this.setState({text: e}) }} style={{ margin: 10, borderWidth: 1, borderColor: '#000000'}} />
					<Button title={'+'}
						onPress={()=> {
							const text = this.state.text
							this.props.onAddTodo(text)
						}}
				/>
				</View>
					:
					null
				}
        <Todo onEdit={(e) => this.onEdit(e)} />
      </View>
    )
  }
}

mapStateToProps = (state) => {
    return { todos: state.todos }
}
mapDispatchToProps = (dispatch, ownProps) => ({
	onAddTodo: (data) => {
		dispatch(addItemAction(data))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
