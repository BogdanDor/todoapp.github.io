import React from 'react';
import logo from './logo.svg';
import './App.css';

import TodoList from './TodoList';

const todos = [
  {id: 6, title: 'user can check todo'},
  {id: 5, title: 'user can update todo'},
  {id: 4, title: 'user can delete todo'},
  {id: 3, title: 'user can create todo'},
  {id: 2, title: 'refactoring. Delete dead code'},
  {id: 1, title: 'stylization list'},
  {id: 0, title: 'display todo list'},
];

function App() {
  return (
    <TodoList items={todos} />
  );
}

export default App;
