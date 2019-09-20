import React from 'react';
import './TodoInput.css';
import InputErrors from './InputErrors.js';

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: '',
      isValid: true,
      animateIsRun: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.runAnimate = this.runAnimate.bind(this);
  }

  handleChange(event) {
    if (event.target.value == ' ') {
      return;
    } 
    this.setState({ 
      value: event.target.value,
      isValid: true,
      animateIsActive: false
    });
  }

  handleSubmit(event) {
    if (this.state.value !== '') {
      this.props.onCreateTodo(this.state.value);
      this.setState({ 
        value: '',
        isValid: true
      });  
    } else {
      this.setState({
        isValid: false,
        animateIsRun: false
      });
      setTimeout(this.runAnimate, 0);
    }
    event.preventDefault();
  }

  runAnimate() {
    this.setState({animateIsRun: true});
  }
  
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="TodoInput"
      >
        <InputErrors valid={this.state.isValid} animateIsRun={this.state.animateIsRun} />
        <input 
          type="text" 
          placeholder="enter new todo"
          value={this.state.value} 
          onChange={this.handleChange} 
          className="TodoInput__item"
        />
      </form>
    );
  }
}

export default TodoInput;