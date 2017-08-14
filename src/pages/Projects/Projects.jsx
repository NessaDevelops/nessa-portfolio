import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import './Projects.css';

class Tile extends Component {
  render() {
    var tileStyle = {
      background: 'url(' + this.props.src + ') no-repeat center center',
      backgroundSize: 'cover'
    };
    return (
      <div style={tileStyle} className="tile">
        <span>{this.props.title}</span>
      </div>
    );
  }
};

Tile.propTypes = {
  src: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired
}

class TileList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [
        { imgSrc: "/static/media/bucketlist.2956f3dd.png", title: "Bucketlist" },
        { imgSrc: "/static/media/primary.c9024567.png", title: "Primary Services" },
        { imgSrc: "/static/media/bucketlist.2956f3dd.png", title: "ArtObjx" },
        { imgSrc: "/static/media/bucketlist.2956f3dd.png", title: "Farm Thing" },
        { imgSrc: "/static/media/bucketlist.2956f3dd.png", title: "Five" },
        { imgSrc: "/static/media/bucketlist.2956f3dd.png", title: "Six" },
        { imgSrc: "/static/media/bucketlist.2956f3dd.png", title: "Seven" }
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
