import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="container">
        <NavBar></NavBar>
        <div className="wrapper">
          <h2>About Me</h2>
        </div>
      </div>
     )
  }
};

export default About;
