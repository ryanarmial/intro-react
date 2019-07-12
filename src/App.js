import React from 'react';
import axios from 'axios';

import Input from './components/Input'
import Person from './components/Person'
import Button from './components/Button'
import './App.css';

import {Provider} from 'react-redux'
import store from './store'

import CounterRedux from './components/CounterRedux'
import ApiRedux from './components/ApiRedux'

import CounterHooks from './components/CounterHooks'



class App extends React.Component {

  // constructor() {
  //   super()
  //   this.state = {
  //     klass: "Eager Fox"
  //   }
  // }
  state = {
    klass: "Eager Fox",
    todos: ['bangun tidur', 'mandi'],
    newTodo: "todo baru",
    people: []
  }

  clickButton(){
    console.log(this.state.klass)
  }

  changeTodo = (e) => {
    const value = e.target.value
    this.setState({
      newTodo: value
    })
  }

  addTodo = () => {
    this.setState({
      todos: this.state.todos.concat(this.state.newTodo),
      klass: "eager-fox-2019"
    }, () => {
      console.log(this.state.todos)
    })
  }
  componentDidMount(){
    axios.get('https://swapi.co/api/people')
      .then(({data}) => {
        this.setState({
          people: data.results
        })
      })
  }

  render() {
    const {people, todos, newTodo, klass} = this.state
    return (
      <Provider store={store}>
        <div className="App">
          <h3>Hooks Lebih Seru</h3>

          <CounterHooks />
        </div>
      </Provider>
    )
  }
}

export default App;
