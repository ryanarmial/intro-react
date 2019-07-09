import React from 'react';
import axios from 'axios';

import Logo from './components/Logo'
import Menu from './components/Menu'

import './App.css';

class App extends React.Component {

  render() {
    return (
      <div id="app">
      	<Logo />
      	<Menu />
      	<div className="container">
      		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita praesentium similique suscipit alias quae repellat beatae, minima eius non sed nesciunt laudantium possimus molestias delectus facilis veritatis error sequi, eos!
      	</div>
      </div>
    )
  }
}

export default App;
