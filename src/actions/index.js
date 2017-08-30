export const addItemAction = (text) => {
	const data =  {
		type: 'ADD',
		payload: {
			id: Date.now(),
			text: text,
			isToggle: false
		}
	 }
	return data
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
	console.log('action',res)
	const data =  {
		type: 'TOGGLE',
		payload: {
			idToggle: res.id,
			isToggle: !res.isToggle
		}
	 }
	return data
}

