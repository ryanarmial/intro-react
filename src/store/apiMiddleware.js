import axios from 'axios'
export default store => next => action => {
  if(action.types){
  	next({
			type: `${action.method}_${action.types}_LOADING`
		})
		axios.get(action.url)
			.then(({data}) => {
				next({
					type: `${action.method}_${action.types}_SUCCESS`,
					payload: data.results
				})
			})
			.catch(err => {
				next({
					type: `${action.method}_${action.types}_FAILED`,
					payload: err
				})
			})
  } else {
  	next(action)
  }
}