import { combineReducers } from 'redux'

const todos = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload ]
    case 'DELETE':
      const index = action.payload.index
      state.splice(index, 1)
      return [...state]
    case 'EDIT':
      const {id, text} = action.payload
      state[id] = {...state[id], text: text}
      return [...state]
    case 'TOGGLE': 
      const {idToggle, isToggle} = action.payload
      state[idToggle] = {...state[idToggle], isToggle: isToggle}
      return [...state]
    case 'TODO_FETCH_SUCCESS':
      return [...state, action.payload]
    default:
      return state
  }
}

const rootReducer = combineReducers({
  todos
})

export default rootReducer
