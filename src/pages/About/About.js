import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <NavBar></NavBar>
        <div className="wrapper">
          <h2>I create modern &amp; clean websites.</h2>
          <h2>:]</h2>
          <div className="content">
            <div className="me"></div>
            <div className="faq">
              <h3>FAQ</h3>
              <h3>Years Young:</h3>
              <p>26</p>
              <h3>Living In:</h3>
              <p>Houston, Texas</p>
              <h3>Front-end Development:</h3>
              <p>HTML5, CSS3, JavaScript, Angular, React, Redux</p>
              <h3>Back-end Development:</h3>
              <p>Node, MongoDB</p>
              <h3>Design:</h3>
              <p>Illustrator, Photoshop, InDesign</p>
              <h3>Additional Skills:</h3>
              <p>Responsive websites, animation, performance</p>
            </div>
            <div className="bio">
              <a href="https://www.linkedin.com/in/jenessa-stabler/">LinkedIn</a>
              <a href="https://github.com/NessaDevelops">GitHub</a>
              <a href="https://codepen.io/NessaDevelops/">CodePen</a>
              <a href="https://dribbble.com/NessaDevelops">Dribbble</a>
            </div>
          </div>
        </div>
      </div>
     )
  }
};

export default About;
