import React, { Component } from 'react';
import anime from 'animejs';
import NavBar from '../../components/NavBar';
import './Home.css';
import '../../styles/theme.css';

class Home extends Component {
  
  componentDidMount() {
    var myAnimation = anime({
      targets: ['.hi'],
      translateX: [-310, 15],
      delay: 800,
      opacity: {
        value: [0, 1],
        duration: 100,
      },
    });
  }

  render() {
    return (
      <div className="container">
        <NavBar></NavBar>
        <div className="wrapper">  
          <span><p className="hi" data-duration="2000">hi</p> my name is</span>
          <h1 className="name">nessa.</h1>
          <p>&amp; i&#39;m a full stack web developer</p>
          <p className="smol">(plus i really enjoy design)</p>                
        </div>
      </div>
    );
  }
}

export default Home;
