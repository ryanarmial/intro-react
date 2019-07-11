import React from 'react'

// import './styles.css'

const Custom = (props) => {
	let params = new URLSearchParams(props.location.search);
	return (
		<div className="container">
			<h1>{params.get('id')}</h1>
			<h1>ini dari Halaman CUSTOM</h1>
			<h2>{props.match.params.semmi}</h2>
		</div>
	)
}

export default Custom;