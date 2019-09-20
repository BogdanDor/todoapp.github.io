import React from 'react';
import './InputErrors.css';

function InputErrors(props) {
  if (props.valid) {
    return <p></p>;
  }
  let finalClassName = 'InputErrors';
  if (props.animateIsRun) {
    finalClassName += ' InputErrors--animate-run';
  }
  return <p className={finalClassName}>Error: todo is empty!</p>;
}

export default InputErrors;