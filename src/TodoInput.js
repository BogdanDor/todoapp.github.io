import React from 'react';
import './TodoInput.css';

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.onCreateTodo(this.state.value);
    this.setState({ value: '' });
    event.preventDefault();
  }
  
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="TodoInput"
      >
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