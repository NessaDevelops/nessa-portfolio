import React, { Component } from 'react';
import anime from 'animejs';
import './styles.css';

class Modal extends Component {
//   componentDidMount() {
//     anime({
//         targets: ['.modal-container'],
//         delay: 2000,
//         opacity: {
//           value: [0, 1],
//           duration: 10000,
//         },
//     });
//   }

  render() {
    if (this.props.isOpen === false)
      return null

    let modalStyle = {
      position: 'absolute',
      height: '80%',
      width: '80%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '9999',
      background: '#fff'
    }

    let backdropStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px',
      zIndex: '9998',
      background: 'rgba(0, 0, 0, 0.3)'
    }

    return (
      <div>
        <div style={modalStyle}>{this.props.children}</div>
        <div style={backdropStyle} onClick={e => this.close(e)}/>}
      </div>
    )
  }

  close(e) {
    e.preventDefault()

    if (this.props.onClose) {
      this.props.onClose()
    }
  }
}

export default Modal;