import React from 'react';
import './App.css';

import TodoList from './TodoList';
import TodoInput from './TodoInput';

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      todos: [],
      lastId: 6
    }

    this.createTodo = this.createTodo.bind(this);
  }

  createTodo(title) {
    let newId = this.state.lastId;
    newId++;
    this.setState({ 
      todos: [{ id: newId, title: title }, ...this.state.todos],
      lastId: newId
    });
  }

  render() {
    return (
      <div className="App">
        <TodoInput onCreateTodo={this.createTodo} />
        <TodoList items={this.state.todos} />      
      </div>
    );  
  }
}

export default App;
