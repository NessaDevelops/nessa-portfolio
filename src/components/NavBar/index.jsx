import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav>
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