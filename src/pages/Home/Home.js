import React, { Component } from 'react';
import anime from 'animejs';
import NavBar from '../../components/NavBar';
import './Home.css';
import '../../styles/theme.css';

class Home extends Component {
  
  componentDidMount() {
    anime({
      targets: ['.hi'],
      translateX: [-310, 15],
      delay: 800,
      opacity: {
        value: [0, 1],
        duration: 100,
      },
    });

    anime({
      targets: ['.my'],
      delay: 2000,
      opacity: {
        value: [0, 1],
        duration: 12000,
      },
    });

    anime({
      targets: ['.name'],
      delay: 3400,
      opacity: {
        value: [0, 1],
        duration: 12000,
      },
    });

    anime({
      targets: ['.job'],
      delay: 5000,
      opacity: {
        value: [0, 1],
        duration: 12000,
      },
    });

    anime({
      targets: ['.smol'],
      delay: 6000,
      opacity: {
        value: [0, 1],
        duration: 10000,
      },
    });

    anime({
      targets: ['.fill, .logo'],
      delay: 7000,
      opacity: {
        value: [0, 1],
        duration: 10000,
      },
    });
  }

  render() {
    return (
      <div className="container">
        <NavBar></NavBar>
        <div className="wrapper">  
          <div><p className="hi">hi</p><p className="my">my name is</p></div>
          <h1 className="name">nessa.</h1>
          <p className="job">&amp; i&#39;m a full stack web developer</p>
          <p className="smol">(plus i really enjoy design)</p>                
        </div>
      </div>
    );
  }
}

export default Home;
