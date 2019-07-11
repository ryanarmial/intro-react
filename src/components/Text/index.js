import React from 'react'

export default (props) => (
	<>
		<h1>Selamat Datang</h1>
		{true && <h1>Halo</h1> }
		<p>{props.children}</p>
	</>
)