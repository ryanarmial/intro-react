import React from 'react'
import { Link } from "react-router-dom";

import './styles.css'

const Menu = () => (
	<ul id="menu">
		<li>
			<Link to="/">Home</Link>
		</li>
		<li>
			<Link to="/about">About</Link>
		</li>
		<li>PEOPLE</li>
	</ul>
)

export default Menu;