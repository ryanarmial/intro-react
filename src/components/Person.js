import React, {Component} from 'react'

class Person extends Component {

	render() {
		return (
			<div>
        <h4>{this.props.data.name}</h4>
        <h5>{this.props.data.height}</h5>
      </div>
		)
	}

}

export default Person