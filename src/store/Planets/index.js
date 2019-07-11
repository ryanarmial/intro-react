const initPlanets = {
	data: [],
	error: [],
	loading: false
}
function planets(state = initPlanets, action) {
	switch(action.type){
		case "GET_PLANETS_SUCCESS":
			return {
				...state,
				data: action.payload,
				loading: false
			}
		case "GET_PLANETS_FAILED":
			return {
				...state,
				error: action.payload,
				loading: false
			}
		case "GET_PLANETS_LOADING":
			return {
				...state,
				loading: true
			}
		default:
			return state
	}
}

export default planets;