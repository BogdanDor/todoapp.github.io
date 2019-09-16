import React from 'react';
import './App.css';

import TodoList from './TodoList';
import TodoInput from './TodoInput';

const initialTodos = [
  {id: 6, title: 'user can check todo'},
  {id: 5, title: 'user can update todo'},
  {id: 4, title: 'user can delete todo'},
  {id: 3, title: 'user can create todo'},
  {id: 2, title: 'refactoring. Delete dead code'},
  {id: 1, title: 'stylization list'},
  {id: 0, title: 'display todo list'},
];

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      todos: initialTodos,
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
