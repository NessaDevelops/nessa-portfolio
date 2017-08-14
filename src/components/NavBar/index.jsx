import React, { Component } from 'react';
import anime from 'animejs';
import {Link} from 'react-router-dom';
import './styles.css';

class Navbar extends Component {
  componentDidMount() {
    anime({
        targets: ['.fill'],
        delay: 7000,
        opacity: {
          value: [0, 1],
          duration: 10000,
        },
    });
  }

  render() {
    return (
      <nav className="fill">
        <Link to="/about">
          <p>About</p>
        </Link>
        <Link to="/projects">
          <p>Projects</p>
        </Link>
        <Link to="/contact">
          <p>Contact</p>
        </Link>
      </nav>
    );
  }
}

export default Navbar;