import React, { Component } from 'react';
import './styles.css';

class TextInput extends Component {
  render() {
    return (
      <div className="form-group">
        <input className="form-control"
          type={this.props.type} 
          id={this.props.id}
          name={this.props.name}
          ref={this.props.reff}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
          required />
        <div className="error" id={this.props.onChange} />
      </div>
    );
  }
};

TextInput.propTypes = {
  type: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  reff: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  error: React.PropTypes.string.isRequired
}

export default TextInput;