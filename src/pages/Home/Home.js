import React, { Component } from 'react';
import logo from '../../imgs/logo.png';
import './Home.css';
import '../../styles/theme.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <img src={logo} className="home-logo" alt="logo" />
        <div>
          <h1>NESSA STABLER</h1>
          <div className="subtitle">WEB DESIGNER & DEVELOPER</div>
          <div className="hobbies" id="rotate">
            <div>Avid Hiker</div>
            <div>Devoted Dog Mama</div>
            <div>Passionate Video Gamer</div>
            <div>Meme Enthusiast</div>
            <div>Aspiring Globe Trotter</div>
          </div>
          <nav className="nav row">
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Home;
