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
    this.updateTodo = this.updateTodo.bind(this);
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

  updateTodo(id, title) {
    const newTodos = this.state.todos.map(item => {
      if (item.id === id) {
        return {id: id, title: title}
      }
      return item;
    });
    this.setState({todos: newTodos});
  }

  deleteTodo(id) {
    console.log('delete todo');
    const newTodos = this.state.todos.filter(item => item.id !== id);
    this.setState({ todos: newTodos });
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">Todo App</header>
        <div className="App__inner">
          <TodoInput onCreateTodo={this.createTodo} />
          <TodoList 
            items={this.state.todos} 
            onUpdateTodo={this.updateTodo}
            onDeleteTodo={this.deleteTodo} 
          />
        </div>      
        <footer className="App__footer">Created by Bogdan Dor</footer>
      </div>
    );  
  }
}

export default App;
