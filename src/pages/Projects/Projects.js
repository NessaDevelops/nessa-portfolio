import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import './Projects.css';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [
        "../../imgs/bucketlist.png",
        "../../imgs/bucketlist.png",
        "../../imgs/bucketlist.png",
        "../../imgs/bucketlist.png",
        "../../imgs/bucketlist.png",
        "../../imgs/bucketlist.png",
        "../../imgs/bucketlist.png",
      ]
    };
  }

  render() {
     const tileList = this.state.tiles.map((tile, index) =>
        <div className="tile" key={index}></div>
     );
    return (
      <div className="container">
        <NavBar></NavBar>
        <div className="wrapper">
          <h2>Projects</h2>
          <div className="tiles">
            {tileList}
          </div>
        </div>
      </div>
     )
  }
};

export default Projects;
