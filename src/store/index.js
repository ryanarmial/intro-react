import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import apiMiddleware from './apiMiddleware.js'

import People from './People'
import Planets from './Planets'

import {CHANGE_KLASS} from './action-types.js'


const initState = {
	klass: 'Eager-Fox-2019'
}

function reducers(state = initState, action) {

	switch(action.type) {
		case CHANGE_KLASS:
			return {
				klass: action.payload
			}
		default:
			return state
	}

}

const rootReducers = combineReducers({
	reducers,
	People,
	Planets
})

export default createStore(
	rootReducers,
	applyMiddleware(apiMiddleware)
)
