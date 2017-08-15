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

    return (
      <div>
        <div className='modalStyle'>{this.props.children}</div>
        <div className='backdropStyle' onClick={e => this.close(e)}/>}
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