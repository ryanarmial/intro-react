const defaultValue = {
  name: 'kosasih',
  counter: 0
}

export default function reducer(state = defaultValue, action) {
  console.log('MASa SIH Seru?', state, action)

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
    default:
     return state
  }
}