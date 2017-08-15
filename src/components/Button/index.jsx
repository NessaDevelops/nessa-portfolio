import React, { Component } from 'react';
import styles from './styles.css';

class ChButton extends Component {
  render() {
    const DEFAULT_SIZE = 'Large';
    const DEFAULT_STYLE = 'Primary';
    const sizeName = this.props.size || DEFAULT_SIZE;
    const styleName = this.props.style || DEFAULT_STYLE;
    let classString = `${styles[sizeName]} ${styles[styleName]} `;

    return (
      <button
        className={classString + ' ' + this.props.className}
        onClick={this.props.onClick}
        disabled={this.props.disabled}
        type={this.props.type}
        id={this.props.id}
      >
        {this.props.label}
      </button>
    );
  }
};

ChButton.propTypes = {
  label: React.PropTypes.string.isRequired,
  size: React.PropTypes.string,
  style: React.PropTypes.string,
  onClick: React.PropTypes.func,
  disabled: React.PropTypes.bool,
  id: React.PropTypes.string,
  type: React.PropTypes.string,
  className: React.PropTypes.string
}

export default ChButton;