const initPeople = {
	data: [],
	error: [],
	loading: false
}
function people(state = initPeople, action) {
	switch(action.type){
		case "GET_PEOPLE_SUCCESS":
			return {
				...state,
				data: action.payload,
				loading: false
			}
		case "GET_PEOPLE_FAILED":
			return {
				...state,
				error: action.payload,
				loading: false
			}
		case "GET_PEOPLE_LOADING":
			return {
				...state,
				loading: true
			}
		default:
			return state
	}
}

export default people;