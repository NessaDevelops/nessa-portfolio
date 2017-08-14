import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import './Projects.css';

const Tile = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
  },
  render() {
    var tileStyle = {
      background: 'url(' + this.props.src + ') no-repeat center center'
    };

    return (
      <div className="tile">
        <span>{this.props.title}</span>
      </div>
    );
  }
});

class TileList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [
        { imgSrc: "../../imgs/bucketlist.png", title: "Bucketlist" },
        { imgSrc: "../../imgs/primary.png", title: "Primary Services" },
        { imgSrc: "../../imgs/bucketlist.png", title: "ArtObjx" },
        { imgSrc: "../../imgs/bucketlist.png", title: "Farm Thing" },
        { imgSrc: "../../imgs/bucketlist.png", title: "Five" },
        { imgSrc: "../../imgs/bucketlist.png", title: "Six" },
        { imgSrc: "../../imgs/bucketlist.png", title: "Seven" }
      ]
    }
  }
  render() {
    const tileList = this.state.tiles.map((tile, index) =>
      <Tile key={index} src={tile.imgSrc} title={tile.title}></Tile>
    );
    return (
      <div className="tiles">{tileList}</div>
    )
  }
};

class Projects extends Component {
  render() {
    return (
      <div className="container">
        <NavBar></NavBar>
        <div className="wrapper">
          <h2>Projects</h2>
          <TileList></TileList>
        </div>
      </div>
     )
  }
};

export default Projects;
