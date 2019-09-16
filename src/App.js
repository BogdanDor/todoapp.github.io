import React from 'react';
import './App.css';

import TodoList from './TodoList';
import TodoInput from './TodoInput';

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      todos: [],
      lastId: 0
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
        <div className="App__inner">
          <TodoInput onCreateTodo={this.createTodo} />
          <TodoList items={this.state.todos} />
        </div>      
      </div>
    );  
  }
}

export default App;
