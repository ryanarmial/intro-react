import axios from 'axios'
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

export function hitSwapi() {
  return (dispatch, state) => {

    // Melakukan hal yang asynchronous
    // Set state nya menjadi Loading true
    dispatch(loadingHitApi())

    axios.get('https://swapi.co/api/people')
      .then(({data}) => {
        // dispatch(succesHitApi(data))
        // Set Loading nya menjadi false
        dispatch({
          type: 'SUCCESS_HIT_API',
          data
        })
      })
      .catch(error => {
        // Set loading nya menjadi false
        dispatch({
          type: 'ERROR_HIT_API',
          error
        })
      })

  }
}

export function succesHitApi(data) {
  return {
    type: 'SUCCESS_HIT_API',
    data
  }
}

export function loadingHitApi() {
  return {
    type: 'LOADING_HIT_API'
  }
}

