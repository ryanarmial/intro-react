import React from 'react'

const Input = ({ onChange, value }) => (
	<div>
		<input onChange={onChange} value={ value } />
	</div>
)

export default Input