import React from 'react'
import {connect} from 'react-redux'
import {changeKlass} from '../../store/action.js'

const Button = ({change}) => {
	return (
		<button onClick={change}>Ganti Dong Mas</button>
	)
}

const mapDispatchtoProps = (dispatch) => {
	return {
		change: () => dispatch(changeKlass("LULUS LANGSUNG DAPET KERJA"))
	}
}

export default connect(null, mapDispatchtoProps)(Button)