import axios from 'axios'

export const addItemAction = (text) => {
	return (dispatch) => {
		return axios.post('http://localhost:3000/todos', {
			id: Date.now(),
			text,
			isToggle: false
		})
				.then(response => {
					console.log(response)
						return dispatch({type: 'ADD', payload: response.data})
				})
				.catch((error) => {
						console.log(error)
				})
	}
}

export const fetchDataAction = () => {
	return (dispatch) => {
		axios.get('http://localhost:3000/todos')
				.then(response => {
						dispatch({
								type: 'TODO_FETCH_SUCCESS',
								payload: response.data
						})
				})
				.catch((error) => {
						console.log(error)
				})
	}
}

export const delItemAction = (id) => {
	const data =  {
		type: 'DELETE',
		payload: {
			index: id
		}
	 }
	return data
}

export const editItemAction = (res) => {
	const data =  {
		type: 'EDIT',
		payload: {
			id: res.id,
			text: res.text
		}
	 }
	return data
}

export const toggleAction = (res) => {
	const data =  {
		type: 'TOGGLE',
		payload: {
			idToggle: res.id,
			isToggle: !res.isToggle
		}
	 }
	return data
}

