import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <div className="TodoItem">
      <p className="TodoItem__title">{props.title}</p>
      <button 
        onClick={() => props.onClick(props.id)}
        className="TodoItem__delete"
      >x</button>
    </div>
  );
}

export default TodoItem;