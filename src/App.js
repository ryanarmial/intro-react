import React from 'react';
import axios from 'axios';

import Input from './components/Input'
import Person from './components/Person'
import Button from './components/Button'
import './App.css';

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
      <div className="App">
        <h1>
          {klass}
        </h1>
        {
          todos.map((todo, i) => <h4 key={i}>{todo}</h4>)
        }

        <Input onChange={this.changeTodo} value={newTodo} />

        <Button click={this.addTodo} />
        {
          people.map(person => (
            <Person data={person}/>
          ))
        }
      </div>
    )
  }
}

export default App;
