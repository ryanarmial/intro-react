const defaultValue = {
  name: 'kosasih',
  counter: 0,
  swapi: {
    loading: false,
    data: [],
    error: {}
  }

}

export default function reducer(state = defaultValue, action) {
  switch (action.type) {
    case 'ADD_COUNTER':
      return {
        ...state,
        counter: state.counter + action.counterIncrement
      }
    case 'REMOVE_COUNTER': 
      return {
        ...state,
        counter: state.counter - 1
      }
    case 'SUCCESS_HIT_API':
        return {
          ...state,
          swapi: {
            loading: false,
            data: action.data
          }
        }
    case 'ERROR_HIT_API': 
        return {
          ...state,
          swapi: {
            loading: false,
            error: action.error
          }
        }
    case 'LOADING_HIT_API':
        return {
          ...state,
          swapi: {
            loading: true
          }
        }
    default:
     return state
  }
}