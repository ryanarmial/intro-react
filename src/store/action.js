// function ini adalah action creator
// yang di return dari fungsi ini adalah action nya

export function addCounter(number) {
  console.log('Seru ya redux HAHAHHAHAHAHHA')
  return {
    type: 'ADD_COUNTER',
    counterIncrement: number
  }
}

export function removeCounter() {
  return {
    type: 'REMOVE_COUNTER'
  }
}
