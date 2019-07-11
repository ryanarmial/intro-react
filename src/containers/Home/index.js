import React from 'react'
import {connect} from 'react-redux'
import {getPeople} from '../../store/People/actions.js'

import Button from '../../components/Button'

// import './styles.css'

class Home extends React.Component {
	state = {
		word: "Hello Eager Fox"
	}
	componentDidMount() {
		this.props.getPeople()
	}
	render() {
		return (
			<div className="container">
				<h1>Halo saya Halaman HOME</h1>
				<h2>{this.props.klass}</h2>
				<p>
					{JSON.stringify(this.props.people)}
				</p>
				<Button/>
			</div>
		)
	}
}

const mapStatetoProps = (state) => {
	return {
		klass: state.reducers.klass,
		people: state.People.data
	}
}

const mapDispatchtoProps = (dispatch) => {
	return {
		getPeople: () => dispatch(getPeople())
	}
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Home);