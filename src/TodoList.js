import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <ul>
      {props.items.map((todo) =>
        <li key={todo.id}>
          <TodoItem 
            id={todo.id}
            title={todo.title}
          />
        </li>
        )}
    </ul>
  )
}

export default TodoList;