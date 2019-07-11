import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'

import Home from './containers/Home'
import About from './containers/About'
import Custom from './containers/Custom'

import Logo from './components/Logo'
import Menu from './components/Menu'

import './App.css';
import store from './store'

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div id="app">
            <Logo />
            <Menu />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/:semmi" component={Custom} />
              <Route component={() => <h1>404 Page</h1>} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
