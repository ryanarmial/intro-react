import React from 'react'
import {connect} from 'react-redux'
import {changeKlass} from '../../store/action.js'
import { getPlanets } from '../../store/Planets/actions.js'
// import './styles.css'

class About extends React.Component {
	componentDidMount() {
		this.props.getPlanets()
	}

	render() {
		return (
			<div className="container">
				<h1>Halo saya Halaman About</h1>
				<button onClick={this.props.change}>Pencet dari ABOUT</button>
				<p>{JSON.stringify(this.props.planets)}</p>
			</div>
		)
	}
}

const mapDispatchtoProps = dispatch => {
	return {
		change: () => dispatch(changeKlass("LULUS LANGSUNG CTO")),
		getPlanets: () => dispatch(getPlanets())
	}
}

const mapStatetoProps = state => {
	return {
		planets: state.Planets.data
	}
}

export default connect(mapStatetoProps, mapDispatchtoProps)(About);