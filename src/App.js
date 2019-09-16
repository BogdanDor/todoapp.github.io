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
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  createTodo(title) {
    this.setState((prevState => ({
      todos: [
        {id: prevState.lastId, title: title}, ...prevState.todos
      ],
      lastId: prevState.lastId + 1
    })));
  }

  deleteTodo(id) {
    console.log('delete todo');
    const newTodos = this.state.todos.filter(item => item.id !== id);
    this.setState({ todos: newTodos });
  }

  render() {
    return (
      <div className="App">
        <div className="App__inner">
          <TodoInput onCreateTodo={this.createTodo} />
          <TodoList items={this.state.todos} onDeleteTodo={this.deleteTodo} />
        </div>      
      </div>
    );  
  }
}

export default App;
