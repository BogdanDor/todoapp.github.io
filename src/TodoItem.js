import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <p className="TodoItem">{props.title}</p>
  );
}

export default TodoItem;