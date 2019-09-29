import React from 'react';
import './TodoItem.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.initTitle,
      isEditable: false
    }

    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleDoubleClick(event) {
    event.preventDefault();
    this.setState({isEditable: true});
  }

  handleBlur() {
    this.setState({
      title: this.props.initTitle,
      isEditable: false
    });
  }

  handleChange(event) {
    this.setState({title: event.target.value});
  }

  handleKeyUp(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.props.onTitleChange(this.props.id, this.state.title);
      setTimeout(this.blur, 0);
    }
  }
  
  render() {
    return (
      <div className="TodoItem">
        <input
          onDoubleClick={this.handleDoubleClick}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          contentEditable={this.state.isEditable}
          className="TodoItem__title"
          value={this.state.title}
          readOnly={!this.state.isEditable}
          type="text"
        />
        <button 
          onClick={() => this.props.onButtonClick(this.props.id)}
          className="TodoItem__delete"
        >
          x
        </button>
      </div>
    )
  }
}

export default TodoItem;