import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import './Home.css';
import '../../styles/theme.css';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <NavBar></NavBar>
        <div className="wrapper">  
          <p>hi my name is</p>
          <h1 className="name">nessa.</h1>
          <p>&amp; i&#39;m a full stack web developer</p>
          <p className="smol">(plus i really enjoy design)</p>                
        </div>
      </div>
    );
  }
}

export default Home;
